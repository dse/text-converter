function inverted(str) {
    return str.normalize("NFD").replace(/[!-~]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 33 && ord <= 126) {
            return inverted.graphic[ord - 33];
        }
        return char;
    });
}
Object.assign(inverted, {
    displayName: 'Inverted',
    graphic: Array.from(
        '\u00a1"#$%\u214b,' +
            '()*+\u2018-./' +
            '01234567' +
            '89:;<=>\u00bf' +
            '@\u0250q\u0254p\u01dd\u025f\u0183' +
            '\u0265\u0131\u027e\u029e\u05df\u026fuo' +
            'db\u0279s\u0287n\ud800\udf21\u028d' +
            'x\u028ez[\\]^_`\u0250q\u0254p\u01dd\u025f\u0183' +
            '\u0265\u0131\u027e\u029e\u05df\u026fuo' +
            'db\u0279s\u0287n\u028c\u028d' +
            'x\u028ez{|}~'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = inverted;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(inverted(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
