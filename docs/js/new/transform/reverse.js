'use strict';
// TODO: handle multi-character glyphs
function backwards(str) {
    var arr = Array.from(str);
    arr.reverse();
    return arr.join('');
}

if (typeof module !== 'undefined') {
    module.exports = backwards;
}
