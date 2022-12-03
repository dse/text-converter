// TODO: handle multi-character glyphs
function reverse(str) {
    const arr = Array.from(str);
    arr.reverse();
    return arr.join('');
}

if (typeof module !== 'undefined') {
    module.exports = reverse;
}
