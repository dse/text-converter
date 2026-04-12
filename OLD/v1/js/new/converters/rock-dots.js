function rockDots(str) {
    return str.normalize("NFD").replace(/[ -~]/g, function (char) {
        const ord = char.codePointAt(0);
        if (rockDots.map[char] != null) {
            return rockDots.map[char];
        }
        return char;
    });
}
Object.assign(rockDots, {
    displayName: 'Rock Dots',
    map: {
        'A': '\u00c4',
        'E': '\u00cb',
        'I': '\u00cf',
        'O': '\u00d6',
        'U': '\u00dc',
        'a': '\u00e4',
        'e': '\u00eb',
        'i': '\u00ef',
        'o': '\u00f6',
        'u': '\u00fc',
        'y': '\u00ff',
        'Y': '\u0178',
        'H': '\u1e26',
        'h': '\u1e27',
        'W': '\u1e84',
        'w': '\u1e85',
        'X': '\u1e8c',
        'x': '\u1e8d',
        't': '\u1e97',
        '-': '\u2e1a',
    },
});

if (typeof module !== 'undefined') {
    module.exports = rockDots;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(rockDots(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
