function mathSansItalic(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathSansItalic.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathSansItalic.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathSansItalic, {
    displayName: 'Math Sans Italic',
    uc: Array.from('\ud835\ude08\ud835\ude09\ud835\ude0a\ud835\ude0b\ud835\ude0c\ud835\ude0d\ud835\ude0e\ud835\ude0f\ud835\ude10\ud835\ude11\ud835\ude12\ud835\ude13\ud835\ude14\ud835\ude15\ud835\ude16\ud835\ude17\ud835\ude18\ud835\ude19\ud835\ude1a\ud835\ude1b\ud835\ude1c\ud835\ude1d\ud835\ude1e\ud835\ude1f\ud835\ude20\ud835\ude21'),
    lc: Array.from('\ud835\ude22\ud835\ude23\ud835\ude24\ud835\ude25\ud835\ude26\ud835\ude27\ud835\ude28\ud835\ude29\ud835\ude2a\ud835\ude2b\ud835\ude2c\ud835\ude2d\ud835\ude2e\ud835\ude2f\ud835\ude30\ud835\ude31\ud835\ude32\ud835\ude33\ud835\ude34\ud835\ude35\ud835\ude36\ud835\ude37\ud835\ude38\ud835\ude39\ud835\ude3a\ud835\ude3b'),
});

if (typeof module !== 'undefined') {
    module.exports = mathSansItalic;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathSansItalic(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
