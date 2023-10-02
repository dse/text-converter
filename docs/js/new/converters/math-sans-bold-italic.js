function mathSansBoldItalic(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathSansBoldItalic.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathSansBoldItalic.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathSansBoldItalic, {
    displayName: 'Math Sans Bold Italic',
    uc: Array.from('\ud835\ude3c\ud835\ude3d\ud835\ude3e\ud835\ude3f\ud835\ude40\ud835\ude41\ud835\ude42\ud835\ude43\ud835\ude44\ud835\ude45\ud835\ude46\ud835\ude47\ud835\ude48\ud835\ude49\ud835\ude4a\ud835\ude4b\ud835\ude4c\ud835\ude4d\ud835\ude4e\ud835\ude4f\ud835\ude50\ud835\ude51\ud835\ude52\ud835\ude53\ud835\ude54\ud835\ude55'),
    lc: Array.from('\ud835\ude56\ud835\ude57\ud835\ude58\ud835\ude59\ud835\ude5a\ud835\ude5b\ud835\ude5c\ud835\ude5d\ud835\ude5e\ud835\ude5f\ud835\ude60\ud835\ude61\ud835\ude62\ud835\ude63\ud835\ude64\ud835\ude65\ud835\ude66\ud835\ude67\ud835\ude68\ud835\ude69\ud835\ude6a\ud835\ude6b\ud835\ude6c\ud835\ude6d\ud835\ude6e\ud835\ude6f'),
});

if (typeof module !== 'undefined') {
    module.exports = mathSansBoldItalic;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathSansBoldItalic(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
