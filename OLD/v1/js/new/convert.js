'use strict';
function convert(str, converter) {
    if (converter.case === 'upper') {
        str = str.toUpperCase();
    } else if (converter.case === 'lower') {
        str = str.toLowerCase();
    }
    var arr = Array.from(str);
    arr = arr.map(function (char) {
        var idx;
        var keys, key;
        var i;
        var ord = char.codePointAt(0);
        var result;
        if (converter.uc && ord >= 65 && ord <= 90) {
            return converter.uc[ord - 65];
        }
        if (converter.lc && ord >= 97 && ord <= 122) {
            return converter.lc[ord - 97];
        }
        if (converter.num && ord >= 48 && ord <= 57) {
            return converter.lc[ord - 48];
        }
        if (converter.printable && ord >= 32 && ord <= 126) {
            return converter.printable[ord - 32];
        }
        if (converter.from && converter.to) {
            result = convertFromTo(char, converter.from, converter.to);
            if (result != null) {
                return result;
            }
        }
        if (converter.map && Array.isArray(converter.map)) {
            for (i = 0; i < converter.map.length; i += 1) {
                result = convertFromTo(char,
                                       converter.map[i].from,
                                       converter.map[i].to);
                if (result != null) {
                    return result;
                }
            }
        }
        return char;
    });
    return arr.join('');
}

// from: either an array of two numbers (codepoint range) or an array of strings
// to: either an array of two numbers (codepoint range) or an array of strings
// return null if no conversion done
function convertFromTo(char, from, to) {
    var idx;
    var codepoint;
    if (!Array.isArray(from) || !Array.isArray(to)) {
        return;
    }
    codepoint = char.codePointAt(0);
    if (from.length === 2 && typeof from[0] === 'number' && typeof from[1] === 'number') {
        if (codepoint < from[0] || codepoint > from[1]) {
            return;
        }
        idx = codepoint - from[0];
    } else {
        idx = from.indexOf(char);
        if (idx === -1) {
            return;
        }
    }
    if (to.length === 2 && typeof to[0] === 'number' && typeof to[1] === 'number') {
        return String.fromCodePoint(to[0] + idx);
    } else {
        return to[idx];
    }
}
