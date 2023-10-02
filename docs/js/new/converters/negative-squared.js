function negativeSquared(str) {
    return str.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return negativeSquared.uc[ord - 65];
        }
        return char;
    });
}
Object.assign(negativeSquared, {
    displayName: 'Negative Squared',
    uc: Array.from('\ud83c\udd70\ud83c\udd71\ud83c\udd72\ud83c\udd73\ud83c\udd74\ud83c\udd75\ud83c\udd76\ud83c\udd77\ud83c\udd78\ud83c\udd79\ud83c\udd7a\ud83c\udd7b\ud83c\udd7c\ud83c\udd7d\ud83c\udd7e\ud83c\udd7f\ud83c\udd80\ud83c\udd81\ud83c\udd82\ud83c\udd83\ud83c\udd84\ud83c\udd85\ud83c\udd86\ud83c\udd87\ud83c\udd88\ud83c\udd89'),
});

if (typeof module !== 'undefined') {
    module.exports = negativeSquared;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(negativeSquared(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
