function tai(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return tai.uc[ord - 65];
        }
        return char;
    });
}
Object.assign(tai, {
    displayName: 'Tai',
    uc: Array.from(
    '\uaa96\u1947\u1974\u1994\uaac0\u183b\u19c1\uaadd' +
        '\ua838\ua839\u16d5\uaab6\uaa91\uaa80\uaaae\u03c1' +
        '\uaa87\u1945\u1993\uaabb\uaa8a\uaa9c\u1b59\u194a\uaa97\u01ba'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = tai;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(tai(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
