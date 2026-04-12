function frobnitized(str) {
    return str.normalize("NFD").replace(/[ -~]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return frobnitized.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return frobnitized.lc[ord - 97];
        }
        if (ord >= 48 && ord <= 57) { // '0' ... '9'
            return frobnitized.num[ord - 48];
        }
        if (frobnitized.map[char] != null) {
            return frobnitized.map[char];
        }
        return char;
    });
}
Object.assign(frobnitized, {
    displayName: 'Frobnitized',
    uc: Array.from(
        '...',
    ),
    lc: Array.from(
        '...',
    ),
    num: Array.from(
        '...',
    ),
    map: {
    },
});
if (typeof module !== 'undefined') {
    module.exports = frobnitized;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(frobnitized(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
