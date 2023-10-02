function mathDoubleStruck(str) {
    return str.normalize("NFD").replace(/[A-Za-z0-9]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathDoubleStruck.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathDoubleStruck.lc[ord - 97];
        }
        if (ord >= 48 && ord <= 57) { // '0' ... '9'
            return mathDoubleStruck.num[ord - 48];
        }
        return char;
    });
}
Object.assign(mathDoubleStruck, {
    displayName: 'Math Double-Struck',
    uc: Array.from(
        '\ud835\udd38\ud835\udd39\u2102\ud835\udd3b\ud835\udd3c\ud835\udd3d\ud835\udd3e\u210d\ud835\udd40\ud835\udd41\ud835\udd42\ud835\udd43\ud835\udd44\u2115\ud835\udd46\u2119\u211a\u211d\ud835\udd4a\ud835\udd4b\ud835\udd4c\ud835\udd4d\ud835\udd4e\ud835\udd4f\ud835\udd50\u2124'
    ),
    lc: Array.from(
        '\ud835\udd52\ud835\udd53\ud835\udd54\ud835\udd55\ud835\udd56\ud835\udd57\ud835\udd58\ud835\udd59\ud835\udd5a\ud835\udd5b\ud835\udd5c\ud835\udd5d\ud835\udd5e\ud835\udd5f\ud835\udd60\ud835\udd61\ud835\udd62\ud835\udd63\ud835\udd64\ud835\udd65\ud835\udd66\ud835\udd67\ud835\udd68\ud835\udd69\ud835\udd6a\ud835\udd6b'
    ),
    num: Array.from(
        '\ud835\udfd8\ud835\udfd9\ud835\udfda\ud835\udfdb\ud835\udfdc\ud835\udfdd\ud835\udfde\ud835\udfdf\ud835\udfe0\ud835\udfe1'
    ),
});
if (typeof module !== 'undefined') {
    module.exports = mathDoubleStruck;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathDoubleStruck(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
