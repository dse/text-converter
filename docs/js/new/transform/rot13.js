// TODO: handle multi-character glyphs
function rot13(str) {
    str = str.replace(/[A-Za-z]/g, function (char) {
        const code = char.charCodeAt(0);
        if (code >= 65  && code <= 77)  /* A to M */ { return String.fromCharCode(code + 13); }
        if (code >= 78  && code <= 90)  /* N to Z */ { return String.fromCharCode(code - 13); }
        if (code >= 97  && code <= 109) /* a to m */ { return String.fromCharCode(code + 13); }
        if (code >= 110 && code <= 122) /* n to z */ { return String.fromCharCode(code - 13); }
        return char;
    });
    return str;
}

if (typeof module !== 'undefined') {
    module.exports = rot13;
}
