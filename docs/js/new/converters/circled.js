function circled(str) {
    return str.normalize("NFD").replace(/[ -~]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return String.fromCodePoint(0x24b6 + ord - 65);
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return String.fromCodePoint(0x24d0 + ord - 97);
        }
        if (ord >= 49 && ord <= 57) { // '1' ... '9'
            return String.fromCodePoint(0x2460 + ord - 49);
        }
        if (circled.map[char] != null) {
            return circled.map[char];
        }
        return char;
    });
}
Object.assign(circled, {
    displayName: 'Circled',
    map: {
        '0': '⓪',
        '+': '⊕',
        '-': '⊖',
        '*': '⊛',
        '/': '⊘',
        '=': '⊜',
        '\\': '⦸',
        '|': '⦶',
        '<': '⧀',
        '>': '⧁',
    },
});
if (typeof module !== 'undefined') {
    module.exports = circled;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(circled('ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789\n' +
                            ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'));
    }
}
