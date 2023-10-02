function ladybug(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return ladybug.uc[ord - 65];
        }
        return char;
    });
}
Object.assign(ladybug, {
    displayName: 'Ladybug',
    uc: Array.from(
        '\ua34f\ua303\ua3f3\ua037\ua3c2\ua387\ua045\ua00d' +
            '\ua024\ua4bb\ua018\ua492\ua3ad\ua224\ua0a6\u1598' +
            '\ua1b0\ua2ea\ua31a\ua4c4\ua00e\ua4a6\ua150\ua267' +
            '\ua329\ua074'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = ladybug;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(ladybug(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
