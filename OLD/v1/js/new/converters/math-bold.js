function mathBold(str) {
    return str.normalize("NFD").replace(/[A-Za-z0-9]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathBold.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathBold.lc[ord - 97];
        }
        if (ord >= 48 && ord <= 57) { // '0' ... '9'
            return mathBold.num[ord - 48];
        }
        return char;
    });
}
Object.assign(mathBold, {
    displayName: 'Math Bold',
    num: Array.from(
        '\ud835\udfce\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7'
    ),
    uc: Array.from(
        '\ud835\udc00\ud835\udc01\ud835\udc02\ud835\udc03\ud835\udc04\ud835\udc05\ud835\udc06\ud835\udc07\ud835\udc08\ud835\udc09\ud835\udc0a\ud835\udc0b\ud835\udc0c\ud835\udc0d\ud835\udc0e\ud835\udc0f\ud835\udc10\ud835\udc11\ud835\udc12\ud835\udc13\ud835\udc14\ud835\udc15\ud835\udc16\ud835\udc17\ud835\udc18\ud835\udc19'
    ),
    lc: Array.from(
        '\ud835\udc1a\ud835\udc1b\ud835\udc1c\ud835\udc1d\ud835\udc1e\ud835\udc1f\ud835\udc20\ud835\udc21\ud835\udc22\ud835\udc23\ud835\udc24\ud835\udc25\ud835\udc26\ud835\udc27\ud835\udc28\ud835\udc29\ud835\udc2a\ud835\udc2b\ud835\udc2c\ud835\udc2d\ud835\udc2e\ud835\udc2f\ud835\udc30\ud835\udc31\ud835\udc32\ud835\udc33'
    ),
});

if (typeof module !== 'undefined') {
    module.exports = mathBold;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathBold(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
