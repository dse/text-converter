'use strict';

const CIRCLED = {
    name: 'Circled',
    uc: Array.from(
        '\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf',
    ),
    lc: Array.from(
        '\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7\u24e8\u24e9',
    ),
    num: Array.from(
        '\u24ea\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468',
    ),
    from: Array.from(
        '*+-./=|\\><',
    ),
    to: Array.from(
        '\u229b\u2295\u2296\u2299\u2298\u229c\u29b6\u29b8\u29c0\u29c1',
    ),
};

if (typeof module !== 'undefined') {
    module.exports = {
        CIRCLED,
    };
}
