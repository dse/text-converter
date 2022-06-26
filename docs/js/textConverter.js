function unicodeSplit(string) {
    var result = [];
    while (string.length) {
        if (/^[^\ud800-\udfff]/.test(string)) {
            result.push(string.slice(0, 1));
            string = string.slice(1);
        } else if (/^[\ud800-\udbff][\udc00-\udfff]/.test(string)) {
            result.push(string.slice(0, 2));
            string = string.slice(2);
        } else {
            string = string.replace(/^[\udc00-\udfff]/, '');
        }
    }
    return result;
}

function TextConverter(args) {
    var charMap = this.charMap = {};
    if ('preMapping' in args) {
        this.preMapping = args.preMapping;
    }
    if ('mappings' in args) {
        if (args.mappings instanceof Array) {
            args.mappings.forEach(function (mapping) {
                if (mapping.lc) {
                    this.mapLC(mapping.lc);
                }
                if (mapping.uc) {
                    this.mapUC(mapping.uc);
                }
                if (mapping.num) {
                    this.mapNum(mapping.num);
                }
                if (mapping.from && mapping.to) {
                    this.map(mapping.from, mapping.to);
                }
            }.bind(this));
        } else {
            throw new Error('mappings is not an array');
        }
    }
    if ('name' in args) {
        this.name = args.name;
    }
}

Object.assign(TextConverter.prototype, {
    convert: function (string) {
        var result = '';
        var stringSplit = unicodeSplit(string);
        var charFrom;
        while (stringSplit.length) {
            charFrom = stringSplit.shift();
            if (charFrom in this.charMap) {
                result += this.charMap[charFrom];
            } else {
                result += charFrom;
            }
        }
        return result;
    },
    mapCharCodeRange: function (fromCodeRangeLow, fromCodeRangeHigh, toString) {
        var i;
        var charFrom;
        var charTo;
        var toStringSplit = unicodeSplit(toString);
        for (i = fromCodeRangeLow; i <= fromCodeRangeHigh && toStringSplit.length; i += 1) {
            charFrom = String.fromCharCode(i);
            charTo = toStringSplit.shift();
            this.charMap[charFrom] = charTo;
        }
    },
    mapUC: function (uc) {
        return this.mapCharCodeRange(65, 90, uc);
    },
    mapLC: function (lc) {
        return this.mapCharCodeRange(97, 122, lc);
    },
    mapNum: function (num) {
        return this.mapCharCodeRange(48, 57, num);
    },
    mapString: function (fromString, toString) {
        var i;
        var fromStringSplit = unicodeSplit(fromString);
        var toStringSplit = unicodeSplit(toString);
        var fromChar;
        var toChar;
        while (fromStringSplit.length && toStringSplit.length) {
            fromChar = fromStringSplit.shift();
            toChar = toStringSplit.shift();
            this.charMap[fromChar] = toChar;
        }
    },
    map: function (from, to) {
        var fromCodeRangeLow;
        var fromCodeRangeHigh;
        if (from instanceof Array && from.length >= 2) {
            fromCodeRangeLow = from[0];
            fromCodeRangeHigh = from[1];
            if (typeof fromCodeRangeLow === 'string') {
                fromCodeRangeLow = fromCodeRangeLow.charCodeAt(0);
            }
            if (typeof fromCodeRangeHigh === 'string') {
                fromCodeRangeHigh = fromCodeRangeHigh.charCodeAt(0);
            }
            this.mapCharCodeRange(fromCodeRangeLow, fromCodeRangeHigh, to);
        } else if (typeof from === 'string') {
            this.mapString(from, to);
        }
    },
    isUcOnly: function () {
        var codepoint;
        var char;
        var uc = 0;
        for (codepoint = 65; codepoint <= 90; codepoint += 1) {
            char = String.fromCharCode(codepoint);
            if (char in this.charMap) {
                uc += 1;
            }
        }
        var lc = 0;
        for (codepoint = 97; codepoint <= 122; codepoint += 1) {
            char = String.fromCharCode(codepoint);
            if (char in this.charMap) {
                lc += 1;
            }
        }
        var result = uc >= 24 && lc <= 2; // heuristic
        return result;
    },
});
