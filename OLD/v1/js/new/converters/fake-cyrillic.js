function fakeCyrillic(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return fakeCyrillic.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return fakeCyrillic.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(fakeCyrillic, {
    displayName: 'Fake Cyrillic',
    uc: Array.from(
        '\u0414\u0411\u0480\u2181\u0404F\u0411\u041d' +
            '\u0406\u0408\u040cL\u041c\u0418\u0424' +
            '\u0420Q\u042f\u0405\u0413\u0426V\u0429\u0416' +
            '\u0427Z'
    ),
    lc: Array.from(
        '\u0430\u044a\u0441\u2181\u044df\u0411\u0402' +
            '\u0456\u0458\u043al\u043c\u0438\u043e\u0440' +
            'q\u0453\u0455\u0442\u0446v\u0448\u0445' +
            '\u040ez'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = fakeCyrillic;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(fakeCyrillic(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
