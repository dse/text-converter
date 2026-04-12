/*jshint esversion: 11 */

const ZALGO_DOWNWARD = [
    '\u0316',           // U+0316 COMBINING GRAVE ACCENT BELOW
    '\u0317',           // U+0317 COMBINING ACUTE ACCENT BELOW
    '\u0318',           // U+0318 COMBINING LEFT TACK BELOW
    '\u0319',           // U+0319 COMBINING RIGHT TACK BELOW
    '\u031c',           // U+031C COMBINING LEFT HALF RING BELOW
    '\u031d',           // U+031D COMBINING UP TACK BELOW
    '\u031e',           // U+031E COMBINING DOWN TACK BELOW
    '\u031f',           // U+031F COMBINING PLUS SIGN BELOW
    '\u0320',           // U+0320 COMBINING MINUS SIGN BELOW
    '\u0324',           // U+0324 COMBINING DIAERESIS BELOW
    '\u0325',           // U+0325 COMBINING RING BELOW
    '\u0326',           // U+0326 COMBINING COMMA BELOW
    '\u0329',           // U+0329 COMBINING VERTICAL LINE BELOW
    '\u032a',           // U+032A COMBINING BRIDGE BELOW
    '\u032b',           // U+032B COMBINING INVERTED DOUBLE ARCH BELOW
    '\u032c',           // U+032C COMBINING CARON BELOW
    '\u032d',           // U+032D COMBINING CIRCUMFLEX ACCENT BELOW
    '\u032e',           // U+032E COMBINING BREVE BELOW
    '\u032f',           // U+032F COMBINING INVERTED BREVE BELOW
    '\u0330',           // U+0330 COMBINING TILDE BELOW
    '\u0331',           // U+0331 COMBINING MACRON BELOW
    '\u0332',           // U+0332 COMBINING LOW LINE
    '\u0333',           // U+0333 COMBINING DOUBLE LOW LINE
    '\u0339',           // U+0339 COMBINING RIGHT HALF RING BELOW
    '\u033a',           // U+033A COMBINING INVERTED BRIDGE BELOW
    '\u033b',           // U+033B COMBINING SQUARE BELOW
    '\u033c',           // U+033C COMBINING SEAGULL BELOW
    '\u0345',           // U+0345 COMBINING GREEK YPOGEGRAMMENI
    '\u0347',           // U+0347 COMBINING EQUALS SIGN BELOW
    '\u0348',           // U+0348 COMBINING DOUBLE VERTICAL LINE BELOW
    '\u0349',           // U+0349 COMBINING LEFT ANGLE BELOW
    '\u034d',           // U+034D COMBINING LEFT RIGHT ARROW BELOW
    '\u034e',           // U+034E COMBINING UPWARDS ARROW BELOW
    '\u0353',           // U+0353 COMBINING X BELOW
    '\u0354',           // U+0354 COMBINING LEFT ARROWHEAD BELOW
    '\u0355',           // U+0355 COMBINING RIGHT ARROWHEAD BELOW
    '\u0356',           // U+0356 COMBINING RIGHT ARROWHEAD AND UP ARROWHEAD BELOW
    '\u0359',           // U+0359 COMBINING ASTERISK BELOW
    '\u035a',           // U+035A COMBINING DOUBLE RING BELOW
];

const ZALGO_MIDDLE = [
    '\u0315',           // U+0315 COMBINING COMMA ABOVE RIGHT
    '\u031b',           // U+031B COMBINING HORN
    '\u0321',           // U+0321 COMBINING PALATALIZED HOOK BELOW
    '\u0322',           // U+0322 COMBINING RETROFLEX HOOK BELOW
    '\u0327',           // U+0327 COMBINING CEDILLA
    '\u0328',           // U+0328 COMBINING OGONEK
    '\u0334',           // U+0334 COMBINING TILDE OVERLAY
    '\u0335',           // U+0335 COMBINING SHORT STROKE OVERLAY
    '\u0336',           // U+0336 COMBINING LONG STROKE OVERLAY
    '\u0337',           // U+0337 COMBINING SHORT SOLIDUS OVERLAY
    '\u0338',           // U+0338 COMBINING LONG SOLIDUS OVERLAY
    '\u0340',           // U+0340 COMBINING GRAVE TONE MARK
    '\u0341',           // U+0341 COMBINING ACUTE TONE MARK
    '\u0358',           // U+0358 COMBINING DOT ABOVE RIGHT
    '\u035c',           // U+035C COMBINING DOUBLE BREVE BELOW
    '\u035d',           // U+035D COMBINING DOUBLE BREVE
    '\u035e',           // U+035E COMBINING DOUBLE MACRON
    '\u035f',           // U+035F COMBINING DOUBLE MACRON BELOW
    '\u0360',           // U+0360 COMBINING DOUBLE TILDE
    '\u0361',           // U+0361 COMBINING DOUBLE INVERTED BREVE
    '\u0362',           // U+0362 COMBINING DOUBLE RIGHTWARDS ARROW BELOW
];

const ZALGO_UPWARD = [
    '\u0301',           // U+0301 COMBINING ACUTE ACCENT
    '\u0302',           // U+0302 COMBINING CIRCUMFLEX ACCENT
    '\u0303',           // U+0303 COMBINING TILDE
    '\u0304',           // U+0304 COMBINING MACRON
    '\u0305',           // U+0305 COMBINING OVERLINE
    '\u0306',           // U+0306 COMBINING BREVE
    '\u0307',           // U+0307 COMBINING DOT ABOVE
    '\u0308',           // U+0308 COMBINING DIAERESIS
    '\u0309',           // U+0309 COMBINING HOOK ABOVE
    '\u030a',           // U+030A COMBINING RING ABOVE
    '\u030b',           // U+030B COMBINING DOUBLE ACUTE ACCENT
    '\u030c',           // U+030C COMBINING CARON
    '\u030d',           // U+030D COMBINING VERTICAL LINE ABOVE
    '\u030e',           // U+030E COMBINING DOUBLE VERTICAL LINE ABOVE
    '\u030f',           // U+030F COMBINING DOUBLE GRAVE ACCENT
    '\u0310',           // U+0310 COMBINING CANDRABINDU
    '\u0311',           // U+0311 COMBINING INVERTED BREVE
    '\u031a',           // U+031A COMBINING LEFT ANGLE ABOVE
    '\u033d',           // U+033D COMBINING X ABOVE
    '\u033e',           // U+033E COMBINING VERTICAL TILDE
    '\u033f',           // U+033F COMBINING DOUBLE OVERLINE
    '\u0342',           // U+0342 COMBINING GREEK PERISPOMENI
    '\u0343',           // U+0343 COMBINING GREEK KORONIS
    '\u0344',           // U+0344 COMBINING GREEK DIALYTIKA TONOS
    '\u0346',           // U+0346 COMBINING BRIDGE ABOVE
    '\u034a',           // U+034A COMBINING NOT TILDE ABOVE
    '\u034b',           // U+034B COMBINING HOMOTHETIC ABOVE
    '\u034c',           // U+034C COMBINING ALMOST EQUAL TO ABOVE
    '\u0350',           // U+0350 COMBINING RIGHT ARROWHEAD ABOVE
    '\u0351',           // U+0351 COMBINING LEFT HALF RING ABOVE
    '\u0352',           // U+0352 COMBINING FERMATA
    '\u0357',           // U+0357 COMBINING RIGHT HALF RING ABOVE
    '\u035b',           // U+035B COMBINING ZIGZAG ABOVE
    '\u0363',           // U+0363 COMBINING LATIN SMALL LETTER A
    '\u0364',           // U+0364 COMBINING LATIN SMALL LETTER E
    '\u0365',           // U+0365 COMBINING LATIN SMALL LETTER I
    '\u0366',           // U+0366 COMBINING LATIN SMALL LETTER O
    '\u0367',           // U+0367 COMBINING LATIN SMALL LETTER U
    '\u0368',           // U+0368 COMBINING LATIN SMALL LETTER C
    '\u0369',           // U+0369 COMBINING LATIN SMALL LETTER D
    '\u036a',           // U+036A COMBINING LATIN SMALL LETTER H
    '\u036b',           // U+036B COMBINING LATIN SMALL LETTER M
    '\u036c',           // U+036C COMBINING LATIN SMALL LETTER R
    '\u036d',           // U+036D COMBINING LATIN SMALL LETTER T
    '\u036e',           // U+036E COMBINING LATIN SMALL LETTER V
    '\u036f',           // U+036F COMBINING LATIN SMALL LETTER X
];

function generateZalgo(options) {
    let min = 2;
    let max = 5;
    let downward = true;
    let middle = true;
    let upward = true;
    if (options != null) {
        if (options.min      != null) { min       = options.min; }
        if (options.max      != null) { max       = options.max; }
        if (options.downward != null) { downward  = options.downward; }
        if (options.middle   != null) { middle    = options.middle; }
        if (options.upward   != null) { upward    = options.upward; }
    }
    if (max > min) { let temp = max; max = min; min = temp; }
    if (max < 1) { return ''; } // make sure max >= 1
    if (min < 0) { min = 0; }   // make sure min >= 0
    const zalgoChars = (downward ? ZALGO_DOWNWARD : '') +
          (middle ? ZALGO_MIDDLE : '') +
          (upward ? ZALGO_UPWARD : '');
    if (zalgoChars === '') { return ''; }
    const count = min + Math.floor(Math.random() + (max - min + 1));
    let result = '';
    for (let i = 1; i <= count; i += 1) {
        result += randomChar(zalgoChars);
    }
    return result;
}

function zalgoChar(char, options) {
    let codepoint;
    if (char.length === 2) {
        codepoint = codepointFromSurrogatePair(char[0], char[1]);
    } else {
        codepoint = char.charCodeAt(0);
    }
    if ((codepoint >= 0 && codepoint <= 32) ||
        (codepoint >= 127 && codepoint <= 160)) {
        return char;
    }
    return char + generateZalgo(options);
}

function zalgo(text, options) {
    text = text.replace(/([^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff])/g,
                        function (char) {
                            return zalgoChar(char, options);
                        });
    return string;
}

module.exports = zalgo;
