function Zalgo(type) {
    this.downward = true;
    this.middle = true;
    this.upward = true;
    if (type) {
        this.type(type);
    }
}
Object.assign(Zalgo.prototype, {
    chars: {
        downward: '\u0316\u0317\u0318\u0319\u031c\u031d\u031e\u031f\u0320\u0324\u0325\u0326\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0339\u033a\u033b\u033c\u0345\u0347\u0348\u0349\u034d\u034e\u0353\u0354\u0355\u0356\u0359\u035a',
        upward: '\u030d\u030e\u0304\u0305\u033f\u0311\u0306\u0310\u0352\u0357\u0351\u0307\u0308\u030a\u0342\u0343\u0344\u034a\u034b\u034c\u0303\u0302\u030c\u0350\u0301\u030b\u030f\u033d\u0309\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f\u033e\u035b\u0346\u031a',
        middle: '\u0315\u031b\u0340\u0341\u0358\u0321\u0322\u0327\u0328\u0334\u0335\u0336\u035c\u035d\u035e\u035f\u0360\u0362\u0338\u0337\u0361'
    },
    min: 2,
    max: 5,
    type: function (type) {
        this.downward = false;
        this.upward = false;
        this.middle = false;
        if (typeof type === 'string') {
            if (type in this.chars) {
                this[type] = true;
                return;
            }
            if (type === 'all') {
                this.downward = true;
                this.upward = true;
                this.middle = true;
                return;
            }
        }
        if (type instanceof Array) {
            this.downward = false;
            this.upward = false;
            this.middle = false;
            var all = true;
            type.forEach(function (type) {
                if (type in this.chars) {
                    all = false;
                    this[type] = true;
                }
            }.bind(this));
            if (all) {
                this.downward = true;
                this.upward = true;
                this.middle = true;
            }
            return;
        }
        this.downward = true;
        this.upward = true;
        this.middle = true;
    },
    randomZalgo: function () {
        var s = '';
        if (this.downward) { s += this.chars.downward; }
        if (this.upward) { s += this.chars.upward; }
        if (this.middle) { s += this.chars.middle; }
        var i = Math.floor(Math.random() * s.length);
        var r = s.charAt(i);
        return r;
    },
    convert: function (string) {
        string = string.replace(/([^\ud800-\udfff]|[\ud800-\udfff]{2})/g, function (x) {
            return this.convertChar(x);
        }.bind(this));
        return string;
    },
    convertChar: function (char) {
        var n = this.min + Math.floor(Math.random() * (this.max - this.min + 1));
        var i;
        for (i = 1; i <= n; i += 1) {
            char += this.randomZalgo();
        }
        return char;
    },
});
