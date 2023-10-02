function mathScriptBold(str) {
    return str.normalize("NFD").replace(/[A-Za-z]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathScriptBold.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathScriptBold.lc[ord - 97];
        }
        return char;
    });
}
Object.assign(mathScriptBold, {
    displayName: 'Math Script Bold',
    uc: Array.from('\ud835\udcd0\ud835\udcd1\ud835\udcd2\ud835\udcd3\ud835\udcd4\ud835\udcd5\ud835\udcd6\ud835\udcd7\ud835\udcd8\ud835\udcd9\ud835\udcda\ud835\udcdb\ud835\udcdc\ud835\udcdd\ud835\udcde\ud835\udcdf\ud835\udce0\ud835\udce1\ud835\udce2\ud835\udce3\ud835\udce4\ud835\udce5\ud835\udce6\ud835\udce7\ud835\udce8\ud835\udce9'),
    lc: Array.from('\ud835\udcea\ud835\udceb\ud835\udcec\ud835\udced\ud835\udcee\ud835\udcef\ud835\udcf0\ud835\udcf1\ud835\udcf2\ud835\udcf3\ud835\udcf4\ud835\udcf5\ud835\udcf6\ud835\udcf7\ud835\udcf8\ud835\udcf9\ud835\udcfa\ud835\udcfb\ud835\udcfc\ud835\udcfd\ud835\udcfe\ud835\udcff\ud835\udd00\ud835\udd01\ud835\udd02\ud835\udd03'),
});
if (typeof module !== 'undefined') {
    module.exports = mathScriptBold;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathScriptBold(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
