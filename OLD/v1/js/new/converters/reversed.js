function reversed(str) {
    return str.normalize("NFD").replace(/[!-~]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 33 && ord <= 126) {
            return reversed.graphic[ord - 33];
        }
        return char;
    });
}
Object.assign(reversed, {
    displayName: 'Reversed',
    graphic: Array.from(
        '!"#$%&\'' +
            ')(*+,-.\\' +
            '0\u07c1234567' +
            '89:\u204f>=<\u2e2e' +
            '@Ad\u2183b\u018e\ua7fbG' +
            'HIJK\u2143M\u1d0eO' +
            '\ua7fcp\u1d19\ua644TUVW' +
            'XYZ]/[^_' +
            '`Ad\u2184b\u0258\ua7fbg' +
            'Hijklm\u1d0eo' +
            'qp\u1d19\ua645TUvw' +
            'xYz}|{\u223d'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = reversed;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(reversed(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
