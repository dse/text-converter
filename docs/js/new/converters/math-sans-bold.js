function mathSansBold(str) {
    return str.normalize("NFD").replace(/[A-Za-z0-9]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathSansBold.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathSansBold.lc[ord - 97];
        }
        if (ord >= 48 && ord <= 57) { // '0' ... '9'
            return mathSansBold.num[ord - 48];
        }
        return char;
    });
}
Object.assign(mathSansBold, {
    displayName: 'Math Sans Bold',
    uc: Array.from('\ud835\uddd4\ud835\uddd5\ud835\uddd6\ud835\uddd7\ud835\uddd8\ud835\uddd9\ud835\uddda\ud835\udddb\ud835\udddc\ud835\udddd\ud835\uddde\ud835\udddf\ud835\udde0\ud835\udde1\ud835\udde2\ud835\udde3\ud835\udde4\ud835\udde5\ud835\udde6\ud835\udde7\ud835\udde8\ud835\udde9\ud835\uddea\ud835\uddeb\ud835\uddec\ud835\udded'),
    lc: Array.from('\ud835\uddee\ud835\uddef\ud835\uddf0\ud835\uddf1\ud835\uddf2\ud835\uddf3\ud835\uddf4\ud835\uddf5\ud835\uddf6\ud835\uddf7\ud835\uddf8\ud835\uddf9\ud835\uddfa\ud835\uddfb\ud835\uddfc\ud835\uddfd\ud835\uddfe\ud835\uddff\ud835\ude00\ud835\ude01\ud835\ude02\ud835\ude03\ud835\ude04\ud835\ude05\ud835\ude06\ud835\ude07'),
    num: Array.from('\ud835\udfec\ud835\udfed\ud835\udfee\ud835\udfef\ud835\udff0\ud835\udff1\ud835\udff2\ud835\udff3\ud835\udff4\ud835\udff5'),
});

if (typeof module !== 'undefined') {
    module.exports = mathSansBold;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathSansBold(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
