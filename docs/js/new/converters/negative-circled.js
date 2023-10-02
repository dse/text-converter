function negativeCircled(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z0-9]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return negativeCircled.uc[ord - 65];
        }
        if (ord >= 48 && ord <= 57) { // '0' ... '9'
            return negativeCircled.num[ord - 48];
        }
        return char;
    });
}
Object.assign(negativeCircled, {
    displayName: 'Negative Circled',
    num: Array.from('\u24ff\u2776\u2777\u2778\u2779\u277a\u277b\u277c\u277d\u277e'),
    uc: Array.from('\ud83c\udd50\ud83c\udd51\ud83c\udd52\ud83c\udd53\ud83c\udd54\ud83c\udd55\ud83c\udd56\ud83c\udd57\ud83c\udd58\ud83c\udd59\ud83c\udd5a\ud83c\udd5b\ud83c\udd5c\ud83c\udd5d\ud83c\udd5e\ud83c\udd5f\ud83c\udd60\ud83c\udd61\ud83c\udd62\ud83c\udd63\ud83c\udd64\ud83c\udd65\ud83c\udd66\ud83c\udd67\ud83c\udd68\ud83c\udd69'),
});
if (typeof module !== 'undefined') {
    module.exports = negativeCircled;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(negativeCircled(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
