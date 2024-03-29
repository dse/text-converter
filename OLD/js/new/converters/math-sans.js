function mathSans(str) {
    return str.normalize("NFD").replace(/[A-Za-z0-9]/g, function (char) {
        const ord = char.codePointAt(0);
        if (ord >= 65 && ord <= 90) { // 'A' ... 'Z'
            return mathSans.uc[ord - 65];
        }
        if (ord >= 97 && ord <= 122) { // 'a' ... 'z'
            return mathSans.lc[ord - 97];
        }
        if (ord >= 48 && ord <= 57) { // '0' ... '9'
            return mathSans.num[ord - 48];
        }
        return char;
    });
}
Object.assign(mathSans, {
    displayName: 'Math Sans',
    uc: Array.from('\ud835\udda0\ud835\udda1\ud835\udda2\ud835\udda3\ud835\udda4\ud835\udda5\ud835\udda6\ud835\udda7\ud835\udda8\ud835\udda9\ud835\uddaa\ud835\uddab\ud835\uddac\ud835\uddad\ud835\uddae\ud835\uddaf\ud835\uddb0\ud835\uddb1\ud835\uddb2\ud835\uddb3\ud835\uddb4\ud835\uddb5\ud835\uddb6\ud835\uddb7\ud835\uddb8\ud835\uddb9'),
    lc: Array.from('\ud835\uddba\ud835\uddbb\ud835\uddbc\ud835\uddbd\ud835\uddbe\ud835\uddbf\ud835\uddc0\ud835\uddc1\ud835\uddc2\ud835\uddc3\ud835\uddc4\ud835\uddc5\ud835\uddc6\ud835\uddc7\ud835\uddc8\ud835\uddc9\ud835\uddca\ud835\uddcb\ud835\uddcc\ud835\uddcd\ud835\uddce\ud835\uddcf\ud835\uddd0\ud835\uddd1\ud835\uddd2\ud835\uddd3'),
    num: Array.from('\ud835\udfe2\ud835\udfe3\ud835\udfe4\ud835\udfe5\ud835\udfe6\ud835\udfe7\ud835\udfe8\ud835\udfe9\ud835\udfea\ud835\udfeb'),
});

if (typeof module !== 'undefined') {
    module.exports = mathSans;
    if (typeof require !== 'undefined' && require.main === module) {
        console.log(mathSans(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\n' +
                'abcdefghijklmnopqrstuvwxyz\n' +
                '0123456789\n' +
                ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        ));
    }
}
