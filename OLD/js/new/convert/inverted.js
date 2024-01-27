'use strict';

const INVERTED_33_126 = Array.from(
    '\u00a1"#$%\u214b,' +
        '()*+\u2018-./' +
        '01234567' +
        '89:;<=>\u00bf' +
        '@\u0250q\u0254p\u01dd\u025f\u0183' +
        '\u0265\u0131\u027e\u029e\u05df\u026fuo' +
        'db\u0279s\u0287n\ud800\udf21\u028d' +
        'x\u028ez[\\]^_`\u0250q\u0254p\u01dd\u025f\u0183' +
        '\u0265\u0131\u027e\u029e\u05df\u026fuo' +
        'db\u0279s\u0287n\u028c\u028d' +
        'x\u028ez{|}~'
);

const INVERTED = {
    name: 'Inverted',
    from: [33, 126],
    to: INVERTED_33_126,
};

if (typeof module !== 'undefined') {
    module.exports = { INVERTED };
}
