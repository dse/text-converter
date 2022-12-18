// TODO: handle multi-character glyphs
function spongebob(str) {
    let flag = true;
    let arr = Array.from(str.toLowerCase());
    arr = arr.map(function (char) {
        const lc = char.toLowerCase();
        const uc = char.toUpperCase();
        if (uc === lc) { return char; }
        flag = !flag;
        return flag ? lc : uc;
    });
    return arr.join('');
}

if (typeof module !== 'undefined') {
    module.exports = spongebob;
}
