function yi(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return yi.uc[ord - 65];
        }
        return char;
    });
}
Object.assign(yi, {
    displayName: 'Yi',
    uc: Array.from(
        '\ua2ec\ua0f3\ua254\ua4af\ua3c2\ua2b0\ua34c\ua05d' +
            '\ua490\ua4bb\ua018\ua492\ua0b5\ua2ca\ua132\ua263' +
            '\ua1b0\ua2ea\ua1d9\ua4c4\ua4a4\ua4a6\ua150\ua267\ua326\ua074'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = yi;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(yi(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
