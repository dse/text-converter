function mathItalic(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathItalic.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathItalic.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathItalic, {
    displayName: 'Math Italic',
    uc: Array.from(
    '\ud835\udc34\ud835\udc35\ud835\udc36\ud835\udc37\ud835\udc38\ud835\udc39\ud835\udc3a\ud835\udc3b\ud835\udc3c\ud835\udc3d\ud835\udc3e\ud835\udc3f\ud835\udc40\ud835\udc41\ud835\udc42\ud835\udc43\ud835\udc44\ud835\udc45\ud835\udc46\ud835\udc47\ud835\udc48\ud835\udc49\ud835\udc4a\ud835\udc4b\ud835\udc4c\ud835\udc4d'
    ),
    lc: Array.from(
    '\ud835\udc4e\ud835\udc4f\ud835\udc50\ud835\udc51\ud835\udc52\ud835\udc53\ud835\udc54\u210e\ud835\udc56\ud835\udc57\ud835\udc58\ud835\udc59\ud835\udc5a\ud835\udc5b\ud835\udc5c\ud835\udc5d\ud835\udc5e\ud835\udc5f\ud835\udc60\ud835\udc61\ud835\udc62\ud835\udc63\ud835\udc64\ud835\udc65\ud835\udc66\ud835\udc67'
    ),
});

if (typeof module !== 'undefined') {
    module.exports = mathItalic;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathItalic(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
