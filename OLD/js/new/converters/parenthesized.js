function parenthesized(str) {
    return str.normalize("NFD").replace(/[A-Za-z1-9]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return parenthesized.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return parenthesized.lc[ord - 97];
        }
        if (parenthesized.map[char] != null) {
            return parenthesized.map[char];
        }
        return char;
    });
}
Object.assign(parenthesized, {
    displayName: 'Parenthesized',
    uc: Array.from('\ud83c\udd10\ud83c\udd11\ud83c\udd12\ud83c\udd13\ud83c\udd14\ud83c\udd15\ud83c\udd16\ud83c\udd17\ud83c\udd18\ud83c\udd19\ud83c\udd1a\ud83c\udd1b\ud83c\udd1c\ud83c\udd1d\ud83c\udd1e\ud83c\udd1f\ud83c\udd20\ud83c\udd21\ud83c\udd22\ud83c\udd23\ud83c\udd24\ud83c\udd25\ud83c\udd26\ud83c\udd27\ud83c\udd28\ud83c\udd29'),
    lc: Array.from('\u249c\u249d\u249e\u249f\u24a0\u24a1\u24a2\u24a3\u24a4\u24a5\u24a6\u24a7\u24a8\u24a9\u24aa\u24ab\u24ac\u24ad\u24ae\u24af\u24b0\u24b1\u24b2\u24b3\u24b4\u24b5'),
    map: {
        '1': '\u2474',
        '2': '\u2475',
        '3': '\u2476',
        '4': '\u2477',
        '5': '\u2478',
        '6': '\u2479',
        '7': '\u247a',
        '8': '\u247b',
        '9': '\u247c',
    },
});

if (typeof module !== 'undefined') {
    module.exports = parenthesized;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(parenthesized(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
