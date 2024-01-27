function mathScript(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathScript.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathScript.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathScript, {
    displayName: 'Math Script',
    uc: Array.from('\ud835\udc9c\u212c\ud835\udc9e\ud835\udc9f\u2130\u2131\ud835\udca2\u210b\u2110\ud835\udca5\ud835\udca6\u2112\u2133\ud835\udca9\ud835\udcaa\ud835\udcab\ud835\udcac\u211b\ud835\udcae\ud835\udcaf\ud835\udcb0\ud835\udcb1\ud835\udcb2\ud835\udcb3\ud835\udcb4\ud835\udcb5'),
    lc: Array.from('\ud835\udcb6\ud835\udcb7\ud835\udcb8\ud835\udcb9\u212f\ud835\udcbb\u210a\ud835\udcbd\ud835\udcbe\ud835\udcbf\ud835\udcc0\ud835\udcc1\ud835\udcc2\ud835\udcc3\u2134\ud835\udcc5\ud835\udcc6\ud835\udcc7\ud835\udcc8\ud835\udcc9\ud835\udcca\ud835\udccb\ud835\udccc\ud835\udccd\ud835\udcce\ud835\udccf'),
});
if (typeof module !== 'undefined') {
    module.exports = mathScript;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathScript(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
