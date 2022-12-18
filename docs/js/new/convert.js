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
            if (typeof converter.from === 'string') {
                idx = converter.from.indexOf(char);
                if (idx !== -1) {
                    return converter.to[idx];
                }
            }
            if (Array.isArray(converter.from)) {
                if (ord >= converter.from[0] && ord <= converter.from[1]) {
                    return converter.to[ord - converter.from[0]];
                }
            }
        }
        if (converter.map) {
            keys = Object.keys(converter.map);
            for (i = 0; i < keys.length; i += 1) {
                key = keys[i];
                idx = key.indexOf(char);
                if (idx !== -1) {
                    return converter.map[key][idx];
                }
            }
        }
        return char;
    });
    return arr.join('');
}
