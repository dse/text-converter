function smallCapitals(str) {
    return str.normalize("NFD").replace(/[a-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return smallCapitals.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(smallCapitals, {
    displayName: 'Small Capitals',
    lc: Array.from(
        '\u1d00\u0299\u1d04\u1d05\u1d07\ua730\u0262\u029c' +
            '\u026a\u1d0a\u1d0b\u029f\u1d0d\u0274\u1d0f\u1d18' +
            '\ua7af\u0280\ua731\u1d1b\u1d1c\u1d20\u1d21x' +
            '\u028f\u1d22'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = smallCapitals;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(smallCapitals(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
