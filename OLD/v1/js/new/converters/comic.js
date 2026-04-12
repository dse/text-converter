function comic(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' to 'Z'
            return comic.uc[ord - 65];
        }
        return char;
    });
}
Object.assign(comic, {
    displayName: 'Comic',
    uc: Array.from(
        '\u15e9\u15f7\u1455\u15ea\u15f4\u15b4\u161c\u157c' +
            'I\u148dK\u14aa\u15f0\u144eO\u146d' +
            '\u146b\u1587\u1515T\u144c\u142f\u15ef\u166d' +
            'Y\u1614',
    ),
});
if (typeof module !== 'undefined') {
    module.exports = comic;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(comic(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
