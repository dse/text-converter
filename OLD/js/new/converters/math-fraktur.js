function mathFraktur(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathFraktur.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathFraktur.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathFraktur, {
    displayName: 'Math Fraktur',
    uc: Array.from(
        '\ud835\udd04\ud835\udd05\u212d\ud835\udd07\ud835\udd08\ud835\udd09\ud835\udd0a\u210c' +
            '\u2111\ud835\udd0d\ud835\udd0e\ud835\udd0f\ud835\udd10\ud835\udd11\ud835\udd12\ud835\udd13' +
            '\ud835\udd14\u211c\ud835\udd16\ud835\udd17\ud835\udd18\ud835\udd19\ud835\udd1a\ud835\udd1b' +
            '\ud835\udd1c\u2128'
    ),
    lc: Array.from(
        '\ud835\udd1e\ud835\udd1f\ud835\udd20\ud835\udd21\ud835\udd22\ud835\udd23\ud835\udd24\ud835\udd25' +
            '\ud835\udd26\ud835\udd27\ud835\udd28\ud835\udd29\ud835\udd2a\ud835\udd2b\ud835\udd2c\ud835\udd2d' +
            '\ud835\udd2e\ud835\udd2f\ud835\udd30\ud835\udd31\ud835\udd32\ud835\udd33\ud835\udd34\ud835\udd35' +
            '\ud835\udd36\ud835\udd37'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = mathFraktur;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathFraktur(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
