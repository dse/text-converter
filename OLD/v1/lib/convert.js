/*jshint esversion: 11 */

function convert(str, converter) {
    if (typeof converter === 'function') {
        return converter(str);
    }
    if (converter.toLocaleUpperCase) {
        str = str.toLocaleUpperCase();
    }
    if (converter.toLocaleLowerCase) {
        str = str.toLocaleLowerCase();
    }
    if (converter.uc != null) {
        str = str.replace(/[A-Z]/g, function (char) {
            return converter.uc[char.codePointAt(0) - 65];
        });
    }
    if (converter.lc != null) {
        str = str.replace(/[a-z]/g, function (char) {
            return converter.uc[char.codePointAt(0) - 97];
        });
    }
    if (converter.num != null) {
        str = str.replace(/[0-9]/g, function (char) {
            return converter.uc[char.codePointAt(0) - 48];
        });
    }
    if (converter.asciiPrint != null) {
        str = str.replace(/[ -~]/g, function (char) {
            return converter.uc[char.codePointAt(0) - 32];
        });
    }
    if (converter.from != null && converter.to != null) {
        return Array.from(str).map(char => {
            return converter.to[converter.from.indexOf(char)] ?? char;
        }).join('');
    }
    if (converter.other != null) {
        for (const k of converter.other) {
            str = convert(str, k);
        }
    }
    return str;
}

function convertFromTo(str, from, to) {
    return Array.from(str.normalize('NFD')).map(char => {
        return to[from.indexOf(char)] ?? char;
    }).join('');
}

module.exports = {
    convert,
};
