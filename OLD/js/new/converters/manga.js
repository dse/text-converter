function manga(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return manga.uc[ord - 65];
        }
        return char;
    });
}
Object.assign(manga, {
    displayName: 'Manga',
    uc: Array.from(
        '\u5342\u4e43\u531a\u15ea\u4e47\u5343\u161c\u5344' +
            '|\uff8c\u049c\u3125\u722a\u51e0\u3116\u5369' +
            '\u04a8\u5c3a\u4e02\u3112\u3129\u142f\u5c71\u4e42' +
            '\u311a\u4e59'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = manga;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(manga(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
