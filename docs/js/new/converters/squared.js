function squared(str) {
    return str.normalize("NFD").toUpperCase().replace(/[ -~]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return squared.uc[ord - 65];
        }
        if (squared.map[char] != null) {
            return squared.map[char];
        }
        return char;
    });
}
Object.assign(squared, {
    displayName: 'Squared',
    map: {
        '+': '\u229e',
        '-': '\u229f',
        '.': '\u22a1',
        '/': '\u29c4',
        '*': '\u29c6',
        '\\': '\u29c5',
    },
    uc: Array.from('\ud83c\udd30\ud83c\udd31\ud83c\udd32\ud83c\udd33\ud83c\udd34\ud83c\udd35\ud83c\udd36\ud83c\udd37\ud83c\udd38\ud83c\udd39\ud83c\udd3a\ud83c\udd3b\ud83c\udd3c\ud83c\udd3d\ud83c\udd3e\ud83c\udd3f\ud83c\udd40\ud83c\udd41\ud83c\udd42\ud83c\udd43\ud83c\udd44\ud83c\udd45\ud83c\udd46\ud83c\udd47\ud83c\udd48\ud83c\udd49'),
});

if (typeof module !== 'undefined') {
    module.exports = squared;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(squared(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
