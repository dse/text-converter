function mathBoldItalic(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathBoldItalic.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathBoldItalic.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathBoldItalic, {
    displayName: 'Math Bold Italic',
    uc: Array.from(
        '\ud835\udc68\ud835\udc69\ud835\udc6a\ud835\udc6b\ud835\udc6c\ud835\udc6d\ud835\udc6e\ud835\udc6f\ud835\udc70\ud835\udc71\ud835\udc72\ud835\udc73\ud835\udc74' + 
            '\ud835\udc75\ud835\udc76\ud835\udc77\ud835\udc78\ud835\udc79\ud835\udc7a\ud835\udc7b\ud835\udc7c\ud835\udc7d\ud835\udc7e\ud835\udc7f\ud835\udc80\ud835\udc81'
    ),
    lc: Array.from(
        '\ud835\udc82\ud835\udc83\ud835\udc84\ud835\udc85\ud835\udc86\ud835\udc87\ud835\udc88\ud835\udc89\ud835\udc8a\ud835\udc8b\ud835\udc8c\ud835\udc8d\ud835\udc8e' +
            '\ud835\udc8f\ud835\udc90\ud835\udc91\ud835\udc92\ud835\udc93\ud835\udc94\ud835\udc95\ud835\udc96\ud835\udc97\ud835\udc98\ud835\udc99\ud835\udc9a\ud835\udc9b'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = mathBoldItalic;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathBoldItalic(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
