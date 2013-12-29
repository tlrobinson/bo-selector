/* description: Parses css selectors. */

/* lexical grammar */
%lex

%%
[_a-zA-Z][_a-zA-Z0-9-]*  return 'IDENT';
<<EOF>>                  return 'EOF';
\~\=                     return 'INCLUDES';
"|="                     return 'DASHMATCH';
'#'                      return '#';
","                      return ',';
"."                      return '.';
"["                      return '[';
"]"                      return ']';
"="                      return '=';
":"                      return ':';
"("                      return '(';
")"                      return ')';
">"                      return '>';
"*"                      return '*';
\s+                      return 'S';

/lex

/* operator associations and precedence */

%start expressions

%% /* language grammar */

expressions
    : selector_list EOF
        { return $1;}
    ;

selector_list
    : selector_list (comma selector)
        { $1.selectors.push($3); $$ = $1 }
    | selector
        { $$ = yy.create({ type: 'selector_list', selectors: [$1] }) }
    ;

comma
    : ','
    | ',' S
    ;

selector
    : combinator_selector
    | simple_selector
    ;

simple_selector
    : element constraint_list
        { $1.constraints = $2.constraints; $$ = yy.create({ type: 'selector', element: $1 }) }
    | element
        { $$ = yy.create({ type: 'selector', element: $1 }) }
    | constraint_list
        { $$ = yy.create(
          { type: 'selector', element: { type: 'element', name: '*', constraints: $1.constraints } }
          )
        }
    ;

combinator_selector
    : selector S '>' S simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: $1, right: $5, combinator: 'child' }) }
    | selector S simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: $1, right: $3, combinator: 'descendant' }) }
    ;

element
    : IDENT
        { $$ = yy.create({ type: 'element', name: $1, constraints: [] }) }
    | '*'
        { $$ = yy.create({ type: 'element', name: $1, constraints: [] }) }
    ;

constraint_list
    : constraint_list constraint
        { $1.constraints.push($2); $$ = $1 }
    | constraint
        { $$ = yy.create({ type: 'constraint_list', constraints: [$1] }) }
    ;

constraint
    :   class
    |   hash
    |   attrib
    |   pseudo
    ;

class
    : '.' IDENT
        { $$ = { type: 'class', name: $2 } }
    ;

hash
    : '#' IDENT
        { $$ = { type: 'id', name: $2 } }
    ;

attrib
    : '[' padded_ident ']'
        { $$ = yy.create({ type: 'has_attribute', name: $2 }) }
    | '[' padded_ident INCLUDES padded_ident ']'
        { $$ = yy.create({ type: 'attribute_contains', name: $2, value: $4 }) }
    | '[' padded_ident '=' padded_ident ']'
        { $$ = yy.create({ type: 'attribute_equals', name: $2, value: $4 }) }
    ;

padded_ident
    : S IDENT S
        { $$ = $2 }
    | S IDENT
        { $$ = $2 }
    | IDENT S
        { $$ = $1 }
    | IDENT
        { $$ = $1 }
    ;

pseudo
    : ':' func
        { $$ = yy.create({ type: 'pseudo_func', func: $2 }) }
    | ':' IDENT
        { $$ = yy.create({ type: 'pseudo_class', name: $2 }) }
    ;

func
    : IDENT '(' selector_list ')'
        { $$ = { type: 'function', name: $1, body: $3 } }
    ;