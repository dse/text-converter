function mathMonospace(str) {
    return str.normalize("NFD").replace(/[A-Za-z0-9]/g, function (char) {
        const code = char.codePointAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCodePoint(0x1d670 + code - 65);
        }
        if (code >= 97 && code <= 122) {
            return String.fromCodePoint(0x1d68a + code - 97);
        }
        if (code >= 48 && code <= 57) { // '0' ... '9'
            return String.fromCodePoint(0x1d7f6 + code - 48);
        }
        return char;
    });
}
Object.assign(mathMonospace, {
    displayName: 'Math Monospace',
});
if (typeof module !== 'undefined') {
    module.exports = mathMonospace;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathMonospace(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
