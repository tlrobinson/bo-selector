/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"selector_list":4,"EOF":5,"comma":6,"selector":7,",":8,"S":9,"combinator_selector":10,"simple_selector":11,"element":12,"constraint_list":13,"padded_child_combinator":14,"padded_tilde":15,"padded_plus":16,">":17,"IDENT":18,"*":19,"constraint":20,"class":21,"hash":22,"attrib":23,"pseudo":24,".":25,"#":26,"[":27,"padded_ident":28,"]":29,"=":30,"padded_ident_or_string":31,"CONTAINS":32,"DOES_NOT_CONTAIN":33,"CONTAINS_WORD":34,"CONTAINS_PREFIX":35,"STARTS_WITH":36,"ENDS_WITH":37,"string":38,"~":39,"+":40,"SINGLE_QUOTED_STRING":41,"DOUBLE_QUOTED_STRING":42,":":43,"func":44,"(":45,"func_arguments":46,")":47,"INTEGER":48,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:",",9:"S",17:">",18:"IDENT",19:"*",25:".",26:"#",27:"[",29:"]",30:"=",32:"CONTAINS",33:"DOES_NOT_CONTAIN",34:"CONTAINS_WORD",35:"CONTAINS_PREFIX",36:"STARTS_WITH",37:"ENDS_WITH",39:"~",40:"+",41:"SINGLE_QUOTED_STRING",42:"DOUBLE_QUOTED_STRING",43:":",45:"(",47:")",48:"INTEGER"},
productions_: [0,[3,2],[4,3],[4,1],[6,1],[6,2],[7,1],[7,1],[11,2],[11,1],[11,1],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[12,1],[12,1],[13,2],[13,1],[20,1],[20,1],[20,1],[20,1],[21,2],[22,2],[23,3],[23,5],[23,5],[23,5],[23,5],[23,5],[23,5],[23,5],[28,3],[28,2],[28,2],[28,1],[31,1],[31,3],[31,2],[31,2],[31,1],[14,3],[14,2],[14,2],[14,1],[15,3],[15,2],[15,2],[15,1],[16,3],[16,2],[16,2],[16,1],[38,1],[38,1],[24,2],[24,2],[44,4],[44,3],[46,1],[46,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1];
break;
case 2: $$[$0-2].selectors.push($$[$0]); this.$ = $$[$0-2] 
break;
case 3: this.$ = yy.create({ type: 'selector_list', selectors: [$$[$0]] }) 
break;
case 8: $$[$0-1].constraints = $$[$0].constraints; this.$ = $$[$0-1] 
break;
case 10: this.$ = yy.create(
            { type: 'constraint_list', constraints: $$[$0].constraints }
          )
        
break;
case 11: this.$ = yy.create({ type: 'combinator_selector', left: $$[$0-2], right: $$[$0], combinator: 'child' }) 
break;
case 12: this.$ = yy.create({ type: 'combinator_selector', left: $$[$0-2], right: $$[$0], combinator: 'descendant' }) 
break;
case 13: this.$ = yy.create({ type: 'previous_sibling', left: $$[$0-2], right: $$[$0] }) 
break;
case 14: this.$ = yy.create({ type: 'adjacent_sibling', left: $$[$0-2], right: $$[$0] }) 
break;
case 15: this.$ = yy.create({ type: 'immediate_child', child: $$[$0], combinator: 'child' }) 
break;
case 16: this.$ = yy.create({ type: 'immediate_child', child: $$[$0], combinator: 'child' }) 
break;
case 17: this.$ = yy.create({ type: 'element', name: $$[$0], constraints: [] }) 
break;
case 18: this.$ = yy.create({ type: 'element', name: $$[$0], constraints: [] }) 
break;
case 19: $$[$0-1].constraints.push($$[$0]); this.$ = $$[$0-1] 
break;
case 20: this.$ = yy.create({ type: 'constraint_list', constraints: [$$[$0]] }) 
break;
case 25: this.$ = { type: 'class', name: $$[$0] } 
break;
case 26: this.$ = { type: 'id', name: $$[$0] } 
break;
case 27: this.$ = yy.create({ type: 'has_attribute', name: $$[$0-1] }) 
break;
case 28: this.$ = yy.create({ type: 'attribute_equals', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 29: this.$ = yy.create({ type: 'attribute_contains', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 30: this.$ = yy.create({ type: 'attribute_does_not_contain', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 31: this.$ = yy.create({ type: 'attribute_contains_word', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 32: this.$ = yy.create({ type: 'attribute_contains_prefix', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 33: this.$ = yy.create({ type: 'attribute_starts_with', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 34: this.$ = yy.create({ type: 'attribute_ends_with', name: $$[$0-3], value: $$[$0-1] }) 
break;
case 35: this.$ = $$[$0-1] 
break;
case 36: this.$ = $$[$0] 
break;
case 37: this.$ = $$[$0-1] 
break;
case 38: this.$ = $$[$0] 
break;
case 40: this.$ = $$[$0-2] 
break;
case 41: this.$ = $$[$0] 
break;
case 42: this.$ = $$[$0-1] 
break;
case 43: this.$ = $$[$0] 
break;
case 56: this.$ = $$[$0].substr(1, $$[$0].length - 2) 
break;
case 57: this.$ = $$[$0].substr(1, $$[$0].length - 2) 
break;
case 58: this.$ = yy.create({ type: 'pseudo_func', func: $$[$0] }) 
break;
case 59: this.$ = yy.create({ type: 'pseudo_class', name: $$[$0] }) 
break;
case 60: this.$ = { type: 'function', name: $$[$0-3], args: $$[$0-1] } 
break;
case 61: this.$ = { type: 'function', name: $$[$0-2] } 
break;
}
},
table: [{3:1,4:2,7:3,10:4,11:5,12:7,13:8,17:[1,6],18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{1:[3]},{5:[1,20],6:21,8:[1,22]},{5:[2,3],8:[2,3],9:[1,24],14:23,15:25,16:26,17:[1,27],39:[1,28],40:[1,29],47:[2,3]},{5:[2,6],8:[2,6],9:[2,6],17:[2,6],39:[2,6],40:[2,6],47:[2,6]},{5:[2,7],8:[2,7],9:[2,7],17:[2,7],39:[2,7],40:[2,7],47:[2,7]},{9:[1,30],11:31,12:7,13:8,18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{5:[2,9],8:[2,9],9:[2,9],13:32,17:[2,9],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],39:[2,9],40:[2,9],43:[1,19],47:[2,9]},{5:[2,10],8:[2,10],9:[2,10],17:[2,10],20:33,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],39:[2,10],40:[2,10],43:[1,19],47:[2,10]},{5:[2,17],8:[2,17],9:[2,17],17:[2,17],25:[2,17],26:[2,17],27:[2,17],39:[2,17],40:[2,17],43:[2,17],47:[2,17]},{5:[2,18],8:[2,18],9:[2,18],17:[2,18],25:[2,18],26:[2,18],27:[2,18],39:[2,18],40:[2,18],43:[2,18],47:[2,18]},{5:[2,20],8:[2,20],9:[2,20],17:[2,20],25:[2,20],26:[2,20],27:[2,20],39:[2,20],40:[2,20],43:[2,20],47:[2,20]},{5:[2,21],8:[2,21],9:[2,21],17:[2,21],25:[2,21],26:[2,21],27:[2,21],39:[2,21],40:[2,21],43:[2,21],47:[2,21]},{5:[2,22],8:[2,22],9:[2,22],17:[2,22],25:[2,22],26:[2,22],27:[2,22],39:[2,22],40:[2,22],43:[2,22],47:[2,22]},{5:[2,23],8:[2,23],9:[2,23],17:[2,23],25:[2,23],26:[2,23],27:[2,23],39:[2,23],40:[2,23],43:[2,23],47:[2,23]},{5:[2,24],8:[2,24],9:[2,24],17:[2,24],25:[2,24],26:[2,24],27:[2,24],39:[2,24],40:[2,24],43:[2,24],47:[2,24]},{18:[1,34]},{18:[1,35]},{9:[1,37],18:[1,38],28:36},{18:[1,40],44:39},{1:[2,1]},{7:41,10:4,11:5,12:7,13:8,17:[1,6],18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{9:[1,42],17:[2,4],18:[2,4],19:[2,4],25:[2,4],26:[2,4],27:[2,4],43:[2,4]},{11:43,12:7,13:8,18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{11:44,12:7,13:8,17:[1,45],18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],39:[1,46],40:[1,47],43:[1,19]},{11:48,12:7,13:8,18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{11:49,12:7,13:8,18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{9:[1,50],18:[2,47],19:[2,47],25:[2,47],26:[2,47],27:[2,47],43:[2,47]},{9:[1,51],18:[2,51],19:[2,51],25:[2,51],26:[2,51],27:[2,51],43:[2,51]},{9:[1,52],18:[2,55],19:[2,55],25:[2,55],26:[2,55],27:[2,55],43:[2,55]},{11:53,12:7,13:8,18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19]},{5:[2,16],8:[2,16],9:[2,16],17:[2,16],39:[2,16],40:[2,16],47:[2,16]},{5:[2,8],8:[2,8],9:[2,8],17:[2,8],20:33,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],39:[2,8],40:[2,8],43:[1,19],47:[2,8]},{5:[2,19],8:[2,19],9:[2,19],17:[2,19],25:[2,19],26:[2,19],27:[2,19],39:[2,19],40:[2,19],43:[2,19],47:[2,19]},{5:[2,25],8:[2,25],9:[2,25],17:[2,25],25:[2,25],26:[2,25],27:[2,25],39:[2,25],40:[2,25],43:[2,25],47:[2,25]},{5:[2,26],8:[2,26],9:[2,26],17:[2,26],25:[2,26],26:[2,26],27:[2,26],39:[2,26],40:[2,26],43:[2,26],47:[2,26]},{29:[1,54],30:[1,55],32:[1,56],33:[1,57],34:[1,58],35:[1,59],36:[1,60],37:[1,61]},{18:[1,62]},{9:[1,63],29:[2,38],30:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38]},{5:[2,58],8:[2,58],9:[2,58],17:[2,58],25:[2,58],26:[2,58],27:[2,58],39:[2,58],40:[2,58],43:[2,58],47:[2,58]},{5:[2,59],8:[2,59],9:[2,59],17:[2,59],25:[2,59],26:[2,59],27:[2,59],39:[2,59],40:[2,59],43:[2,59],45:[1,64],47:[2,59]},{5:[2,2],8:[2,2],9:[1,24],14:23,15:25,16:26,17:[1,27],39:[1,28],40:[1,29],47:[2,2]},{17:[2,5],18:[2,5],19:[2,5],25:[2,5],26:[2,5],27:[2,5],43:[2,5]},{5:[2,11],8:[2,11],9:[2,11],17:[2,11],39:[2,11],40:[2,11],47:[2,11]},{5:[2,12],8:[2,12],9:[2,12],17:[2,12],39:[2,12],40:[2,12],47:[2,12]},{9:[1,65],18:[2,45],19:[2,45],25:[2,45],26:[2,45],27:[2,45],43:[2,45]},{9:[1,66],18:[2,49],19:[2,49],25:[2,49],26:[2,49],27:[2,49],43:[2,49]},{9:[1,67],18:[2,53],19:[2,53],25:[2,53],26:[2,53],27:[2,53],43:[2,53]},{5:[2,13],8:[2,13],9:[2,13],17:[2,13],39:[2,13],40:[2,13],47:[2,13]},{5:[2,14],8:[2,14],9:[2,14],17:[2,14],39:[2,14],40:[2,14],47:[2,14]},{18:[2,46],19:[2,46],25:[2,46],26:[2,46],27:[2,46],43:[2,46]},{18:[2,50],19:[2,50],25:[2,50],26:[2,50],27:[2,50],43:[2,50]},{18:[2,54],19:[2,54],25:[2,54],26:[2,54],27:[2,54],43:[2,54]},{5:[2,15],8:[2,15],9:[2,15],17:[2,15],39:[2,15],40:[2,15],47:[2,15]},{5:[2,27],8:[2,27],9:[2,27],17:[2,27],25:[2,27],26:[2,27],27:[2,27],39:[2,27],40:[2,27],43:[2,27],47:[2,27]},{9:[1,70],18:[1,38],28:69,31:68,38:71,41:[1,72],42:[1,73]},{9:[1,70],18:[1,38],28:69,31:74,38:71,41:[1,72],42:[1,73]},{9:[1,70],18:[1,38],28:69,31:75,38:71,41:[1,72],42:[1,73]},{9:[1,70],18:[1,38],28:69,31:76,38:71,41:[1,72],42:[1,73]},{9:[1,70],18:[1,38],28:69,31:77,38:71,41:[1,72],42:[1,73]},{9:[1,70],18:[1,38],28:69,31:78,38:71,41:[1,72],42:[1,73]},{9:[1,70],18:[1,38],28:69,31:79,38:71,41:[1,72],42:[1,73]},{9:[1,80],29:[2,36],30:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36]},{29:[2,37],30:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37]},{4:83,7:3,10:4,11:5,12:7,13:8,17:[1,6],18:[1,9],19:[1,10],20:11,21:12,22:13,23:14,24:15,25:[1,16],26:[1,17],27:[1,18],43:[1,19],46:81,47:[1,82],48:[1,84]},{18:[2,44],19:[2,44],25:[2,44],26:[2,44],27:[2,44],43:[2,44]},{18:[2,48],19:[2,48],25:[2,48],26:[2,48],27:[2,48],43:[2,48]},{18:[2,52],19:[2,52],25:[2,52],26:[2,52],27:[2,52],43:[2,52]},{29:[1,85]},{29:[2,39]},{18:[1,62],38:86,41:[1,72],42:[1,73]},{9:[1,87],29:[2,43]},{9:[2,56],29:[2,56]},{9:[2,57],29:[2,57]},{29:[1,88]},{29:[1,89]},{29:[1,90]},{29:[1,91]},{29:[1,92]},{29:[1,93]},{29:[2,35],30:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35]},{47:[1,94]},{5:[2,61],8:[2,61],9:[2,61],17:[2,61],25:[2,61],26:[2,61],27:[2,61],39:[2,61],40:[2,61],43:[2,61],47:[2,61]},{6:21,8:[1,22],47:[2,62]},{47:[2,63]},{5:[2,28],8:[2,28],9:[2,28],17:[2,28],25:[2,28],26:[2,28],27:[2,28],39:[2,28],40:[2,28],43:[2,28],47:[2,28]},{9:[1,95],29:[2,41]},{29:[2,42]},{5:[2,29],8:[2,29],9:[2,29],17:[2,29],25:[2,29],26:[2,29],27:[2,29],39:[2,29],40:[2,29],43:[2,29],47:[2,29]},{5:[2,30],8:[2,30],9:[2,30],17:[2,30],25:[2,30],26:[2,30],27:[2,30],39:[2,30],40:[2,30],43:[2,30],47:[2,30]},{5:[2,31],8:[2,31],9:[2,31],17:[2,31],25:[2,31],26:[2,31],27:[2,31],39:[2,31],40:[2,31],43:[2,31],47:[2,31]},{5:[2,32],8:[2,32],9:[2,32],17:[2,32],25:[2,32],26:[2,32],27:[2,32],39:[2,32],40:[2,32],43:[2,32],47:[2,32]},{5:[2,33],8:[2,33],9:[2,33],17:[2,33],25:[2,33],26:[2,33],27:[2,33],39:[2,33],40:[2,33],43:[2,33],47:[2,33]},{5:[2,34],8:[2,34],9:[2,34],17:[2,34],25:[2,34],26:[2,34],27:[2,34],39:[2,34],40:[2,34],43:[2,34],47:[2,34]},{5:[2,60],8:[2,60],9:[2,60],17:[2,60],25:[2,60],26:[2,60],27:[2,60],39:[2,60],40:[2,60],43:[2,60],47:[2,60]},{29:[2,40]}],
defaultActions: {20:[2,1],69:[2,39],84:[2,63],87:[2,42],95:[2,40]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 18;
break;
case 1:return 5;
break;
case 2:return 34;
break;
case 3:return 32;
break;
case 4:return 35;
break;
case 5:return 33;
break;
case 6:return 36;
break;
case 7:return 37;
break;
case 8:return 41;
break;
case 9:return 42;
break;
case 10:return 48;
break;
case 11:return 26;
break;
case 12:return 8;
break;
case 13:return 25;
break;
case 14:return 27;
break;
case 15:return 29;
break;
case 16:return 30;
break;
case 17:return 43;
break;
case 18:return 45;
break;
case 19:return 47;
break;
case 20:return 17;
break;
case 21:return "'";
break;
case 22:return 19;
break;
case 23:return 39;
break;
case 24:return 40;
break;
case 25:return 9;
break;
}
},
rules: [/^(?:[_a-zA-Z][_a-zA-Z0-9-]*)/,/^(?:$)/,/^(?:~=)/,/^(?:\*=)/,/^(?:\|=)/,/^(?:!=)/,/^(?:\^=)/,/^(?:\$=)/,/^(?:"[^\n\r\f\\"]*")/,/^(?:'[^\n\r\f\\']*')/,/^(?:\d+)/,/^(?:#)/,/^(?:,)/,/^(?:\.)/,/^(?:\[)/,/^(?:\])/,/^(?:=)/,/^(?::)/,/^(?:\()/,/^(?:\))/,/^(?:>)/,/^(?:')/,/^(?:\*)/,/^(?:~)/,/^(?:\+)/,/^(?:\s+)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}