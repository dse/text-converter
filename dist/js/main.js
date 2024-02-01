'use strict';
/*jshint devel: true */
/*global zalgo */

/*!
 * Unicode converter.
 *
 * Thanks:
 * - https://qaz.wtf/u/
 * - https://lingojam.com/FancyFontGenerator%2CUnicodeText
 */

const converterArray = [
    { converter: circled,            id: 'circled',            name: 'Circled' },
    { converter: circledNegative,    id: 'circledNegative',    name: 'Circled Negative' },
    { converter: comic,              id: 'comic',              name: 'Comic' },
    { converter: fakeCyrillic,       id: 'fakeCyrillic',       name: 'Fake Cyrillic' },
    { converter: fullWidth,          id: 'fullWidth',          name: 'Full Width' },
    { converter: inverted,           id: 'inverted',           name: 'Inverted' },
    { converter: ladybug,            id: 'ladybug',            name: 'Ladybug' },
    { converter: manga,              id: 'manga',              name: 'Manga' },
    { converter: mathBold,           id: 'mathBold',           name: 'Math Bold' },
    { converter: mathBoldItalic,     id: 'mathBoldItalic',     name: 'Math Bold Italic' },
    { converter: mathDoubleStruck,   id: 'mathDoubleStruck',   name: 'Math Double Struck' },
    { converter: mathFraktur,        id: 'mathFraktur',        name: 'Math Fraktur' },
    { converter: mathFrakturBold,    id: 'mathFrakturBold',    name: 'Math Fraktur Bold' },
    { converter: mathItalic,         id: 'mathItalic',         name: 'Math Italic' },
    { converter: mathMonospace,      id: 'mathMonospace',      name: 'Math Monospace' },
    { converter: mathSans,           id: 'mathSans',           name: 'Math Sans' },
    { converter: mathSansBold,       id: 'mathSansBold',       name: 'Math Sans Bold' },
    { converter: mathSansBoldItalic, id: 'mathSansBoldItalic', name: 'Math Sans BoldItalic' },
    { converter: mathSansItalic,     id: 'mathSansItalic',     name: 'Math Sans Italic' },
    { converter: mathScriptBold,     id: 'mathScriptBold',     name: 'Math Script Bold' },
    { converter: mathScript,         id: 'mathScript',         name: 'Math Script' },
    { converter: parenthesized,      id: 'parenthesized',      name: 'Parenthesized' },
    { converter: reversed,           id: 'reversed',           name: 'Reversed' },
    { converter: rockDots,           id: 'rockDots',           name: 'Rock Dots' },
    { converter: smallCapitals,      id: 'smallCapitals',      name: 'Small Capitals' },
    { converter: squared,            id: 'squared',            name: 'Squared' },
    { converter: squaredNegative,    id: 'squaredNegative',    name: 'Squared Negative' },
    { converter: tai,                id: 'tai',                name: 'Tai' },
    { converter: upsideDown,         id: 'upsideDown',         name: 'Upside Down' },
    { converter: yi,                 id: 'yi',                 name: 'Yi' },
];

// create the object { circled, circledNegative, comic, ... }
const converters = converterArray.reduce(
    (accum, next) => Object.assign(accum, { [next.converter.name]: next.converter }),
    {}
);

if (typeof window !== 'undefined') {
    window.addEventListener('load', setup);
}

function setup() {
    const converterSelect     = document.getElementById('converter');
    const caseTransformSelect = document.getElementById('caseTransform');
    const rot13Checkbox       = document.getElementById('rot13');
    const zalgoCheckbox       = document.getElementById('zalgo');
    const zalgoAmountElt      = document.getElementById('zalgoAmount');
    const backwardsCheckbox   = document.getElementById('backwards');
    const inputTextArea       = document.getElementById('input');
    const outputTextArea      = document.getElementById('output');
    const copyButton          = document.getElementById('copy');

    // populate the dropdown
    converterArray.forEach(({ converter, id, name }) => {
        const option = new Option();
        option.label = name;
        option.value = id;
        converterSelect.add(option);
    });

    let converterName = JSON.parse(localStorage.getItem('textConverter.converterName'));
    let caseTransform = JSON.parse(localStorage.getItem('textConverter.caseTransform'));
    let rot13Flag     = JSON.parse(localStorage.getItem('textConverter.rot13Flag'));
    let zalgoFlag     = JSON.parse(localStorage.getItem('textConverter.zalgoFlag'));
    let zalgoAmount   = JSON.parse(localStorage.getItem('textConverter.zalgoAmount'));
    let backwardsFlag = JSON.parse(localStorage.getItem('textConverter.backwardsFlag'));
    let inputText     = localStorage.getItem('textConverter.inputText');

    if (converterName != null) {
        const idx = Array.from(converterSelect.options)
                         .findIndex(option => option.value === converterName);
        if (idx !== -1) {
            converterSelect.selectedIndex = idx;
        }
    }
    if (caseTransform != null) {
        const idx = Array.from(caseTransformSelect.options)
                         .findIndex(option => option.value === caseTransform);
        if (idx !== -1) {
            caseTransformSelect.selectedIndex = idx;
        }
    }
    if (rot13Flag != null) {
        rot13Checkbox.checked = rot13Flag;
    }
    if (zalgoFlag != null) {
        zalgoCheckbox.checked = zalgoFlag;
    }
    if (zalgoAmount != null) {
        zalgoAmountElt.value = zalgoAmount;
    }
    if (backwardsFlag != null) {
        backwardsCheckbox.checked = backwardsFlag;
    }
    if (inputText != null) {
        inputTextArea.value = inputText;
    }

    converterSelect     .addEventListener('change', function () { update(); updatePlaceholder(); });
    caseTransformSelect .addEventListener('change', function () { update(); updatePlaceholder(); });
    rot13Checkbox       .addEventListener('change', function () { update(); updatePlaceholder(); });
    zalgoCheckbox       .addEventListener('change', function () { update(); updatePlaceholder(); });
    zalgoAmountElt      .addEventListener('change', function () { update(); updatePlaceholder(); });
    backwardsCheckbox   .addEventListener('change', function () { update(); updatePlaceholder(); });

    inputTextArea.addEventListener('input',  function () { update(); });
    inputTextArea.addEventListener('change', function () { update(); });

    const showThemAllElement = document.getElementById('showThemAll');
    const showThemAllTemplateElement = document.getElementById('showThemAllTemplate');
    if (showThemAllElement && showThemAllTemplateElement) {
        converterArray.forEach(({ id, name }) => {
            showThemAllElement.innerHTML +=
                showThemAllTemplateElement.innerHTML
                                          .replace(/\{\{\s*id\s*\}\}/g, id)
                                          .replace(/\{\{\s*name\s*\}\}/g, name);
        });
    }

    if (showThemAllElement && showThemAllTemplateElement) {
        converterArray.forEach(({ id }) => {
            const copyButton = document.getElementById('copy-' + id);
            copyButton.addEventListener('click', function () {
                const textElement = document.getElementById('output-' + id);
                navigator.clipboard.writeText(textElement.value).then(function () {
                    const indicator = document.getElementById('copiedIndicator');
                    if (!indicator) { return; }
                    indicator.classList.add('flash');
                    /*jshint -W030 */
                    indicator.offsetHeight; // trigger a reflow
                    /*jshint +W030 */
                    indicator.classList.remove('flash');
                });
            });
        });
    }

    copyButton.addEventListener('click', function () {
        navigator.clipboard.writeText(outputTextArea.value).then(function () {
            const indicator = document.getElementById('copiedIndicator');
            if (!indicator) { return; }
            indicator.classList.add('flash');
            /*jshint -W030 */
            indicator.offsetHeight; // trigger a reflow
            /*jshint +W030 */
            indicator.classList.remove('flash');
        });
    });

    function showThemAll() {
        converterArray.forEach(({ id, name, converter }) => {
            const textElement = document.getElementById('output-' + id);
            if (textElement) {
                textElement.innerHTML = converter(inputTextArea.value);
            }
        });
    }

    function convert(text) {
        if (rot13Flag) {
            text = rot13(text);
        }
        switch (caseTransform) {
        case 'lower':
            text = text.toLowerCase();
            break;
        case 'upper':
            text = text.toUpperCase();
            break;
        case 'spongebob':
            text = spongebob(text);
            break;
        }
        if (backwardsFlag) {
            const chars = Array.from(text.normalize("NFD"));
            chars.reverse();
            text = chars.join("");
        }
        if (converterName != null && converterName !== '') {
            text = converters[converterName]?.(text) ?? text;
        }
        if (zalgoFlag) {
            text = zalgo(text, zalgoAmount);
        }
        return text;
    }

    function updatePlaceholder() {
        outputTextArea.placeholder = convert(inputTextArea.placeholder);
    }

    function update() {
        converterName = converterSelect.options[converterSelect.selectedIndex].value;
        caseTransform = caseTransformSelect.options[caseTransformSelect.selectedIndex].value;
        rot13Flag = rot13Checkbox.checked;
        zalgoFlag = zalgoCheckbox.checked;
        backwardsFlag = backwardsCheckbox.checked;
        zalgoAmount = zalgoAmountElt.value;

        outputTextArea.value = convert(inputTextArea.value);
        localStorage.setItem('textConverter.converterName', JSON.stringify(converterName));
        localStorage.setItem('textConverter.caseTransform', JSON.stringify(caseTransform));
        localStorage.setItem('textConverter.rot13Flag',     JSON.stringify(rot13Flag));
        localStorage.setItem('textConverter.zalgoFlag',     JSON.stringify(zalgoFlag));
        localStorage.setItem('textConverter.zalgoAmount',   JSON.stringify(zalgoAmount));
        localStorage.setItem('textConverter.backwardsFlag', JSON.stringify(backwardsFlag));
        localStorage.setItem('textConverter.inputText',     inputTextArea.value);

        showThemAll();
    }

    update();
    updatePlaceholder();
}

function spongebob(text) {
    let upper = false;
    return text.normalize("NFD").replace(/\p{Cased_Letter}/gu, function (letter) {
        letter = upper ? letter.toUpperCase() : letter.toLowerCase();
        upper = !upper;
        return letter;
    });
}

function rot13(text) {
    return text.normalize("NFD").replace(/[A-Za-z]/gu, function (letter) {
        const codepoint = letter.codePointAt(0);
        if (codepoint >= 65 && codepoint <= 77) { // A-M
            return String.fromCodePoint(codepoint + 13); // N-Z
        }
        if (codepoint >= 78 && codepoint <= 90) { // N-Z
            return String.fromCodePoint(codepoint - 13); // A-M
        }
        if (codepoint >= 97 && codepoint <= 109) { // a-m
            return String.fromCodePoint(codepoint + 13); // n-z
        }
        if (codepoint >= 110 && codepoint <= 122) { // n-z
            return String.fromCodePoint(codepoint - 13); // a-m
        }
        return letter;
    });
}

const COMIC_UC = Array.from('\u15e9\u15f7\u1455\u15ea\u15f4\u15b4\u161c\u157c' +
                            'I\u148dK\u14aa\u15f0\u144eO\u146d' +
                            '\u146b\u1587\u1515T\u144c\u142f\u15ef\u166d' +
                            'Y\u1614');

function comic(text) {
    return text.normalize("NFD").toUpperCase().replace(/[A-Z]/gu, function (letter) {
        return COMIC_UC[letter.codePointAt(0) - 65];
    });
}

const MANGA_UC = Array.from('\u5342\u4e43\u531a\u15ea\u4e47\u5343\u161c\u5344' +
                            '|\uff8c\u049c\u3125\u722a\u51e0\u3116\u5369' +
                            '\u04a8\u5c3a\u4e02\u3112\u3129\u142f\u5c71\u4e42' +
                            '\u311a\u4e59');

function manga(text) {
    return text.normalize("NFD").toUpperCase().replace(/[A-Z]/gu, function (letter) {
        return MANGA_UC[letter.codePointAt(0) - 65];
    });
}

const CIRCLED_UC = Array.from('\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd' +
                              '\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5' +
                              '\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd' +
                              '\u24ce\u24cf');
const CIRCLED_LC = Array.from('\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7' +
                              '\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df' +
                              '\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7' +
                              '\u24e8\u24e9');
const CIRCLED_DIGIT = Array.from('\u24ea\u2460\u2461\u2462\u2463' +
                                 '\u2464\u2465\u2466\u2467\u2468');
const CIRCLED_MAPPING = {
    '*':  '\u229b',
    '+':  '\u2295',
    '-':  '\u2296',
    '.':  '\u2299',
    '/':  '\u2298',
    '=':  '\u229c',
    '|':  '\u29b6',
    '\\': '\u29b8',
    '<':  '\u29c0',
    '>':  '\u29c1',
};
function circled(text) {
    return text.normalize("NFD").replace(/./gu, function (char) {
        const codepoint = char.codePointAt(0);
        if (codepoint >= 65 && codepoint <= 90) {
            return CIRCLED_UC[codepoint - 65];
        }
        if (codepoint >= 97 && codepoint <= 122) {
            return CIRCLED_LC[codepoint - 97];
        }
        if (codepoint >= 48 && codepoint <= 57) {
            return CIRCLED_DIGIT[codepoint - 48];
        }
        return CIRCLED_MAPPING[char] ?? char;
    });
}

const SQUARED_UC = Array.from('🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉');
const SQUARED_MAPPING = {
    "*": "⧆",
    "+": "⊞",
    "-": "⊟",
    ".": "⊡",
    "/": "⧄",
    "\\": "⧅",
};
function squared(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/./gu,     char => SQUARED_MAPPING[char] ?? char)
               .replace(/[A-Z]/gu, char => SQUARED_UC[char.codePointAt(0) - 65]);
}

const SQUARED_NEGATIVE_UC = Array.from('🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉');
function squaredNegative(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/[A-Z]/gu, char => SQUARED_NEGATIVE_UC[char.codePointAt(0) - 65]);
}

const FAKE_CYRILLIC_UC = Array.from("ДБҀↁЄFБНІЈЌLМИФРQЯЅГЦVЩЖЧZ");
const FAKE_CYRILLIC_LC = Array.from("аъсↁэfБЂіјкlмиорqѓѕтцvшхЎz");
function fakeCyrillic(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/[A-Z]/gu, char => FAKE_CYRILLIC_UC[char.codePointAt(0) - 65])
               .replace(/[a-z]/gu, char => FAKE_CYRILLIC_LC[char.codePointAt(0) - 97]);
}

function fullWidth(text) {
    return text.normalize("NFD").replace(/./gu, function (char) {
        const codepoint = char.codePointAt(0);
        if (codepoint === 32) {
            return "\u3000";
        }
        if (codepoint >= 33 && codepoint <= 126) {
            return String.fromCodePoint(0xff01 + codepoint - 33);
        }
        return char;
    });
}

const INVERTED = Array.from('\u00a1"#$%\u214b,' +
                            '()*+\u2018-./' +
                            '01234567' +
                            '89:;<=>\u00bf' +
                            '@\u0250q\u0254p\u01dd\u025f\u0183' +
                            '\u0265\u0131\u027e\u029e\u05df\u026fuo' +
                            'db\u0279s\u0287n\ud800\udf21\u028d' +
                            'x\u028ez[\\]^_`\u0250q\u0254p\u01dd\u025f\u0183' +
                            '\u0265\u0131\u027e\u029e\u05df\u026fuo' +
                            'db\u0279s\u0287n\u028c\u028d' +
                            'x\u028ez{|}~');

function inverted(text) {
    return text.normalize("NFD")
               .replace(/./gu, char => INVERTED[char.codePointAt(0) - 33] ?? char);
}

const LADYBUG_UC = Array.from('\ua34f\ua303\ua3f3\ua037\ua3c2\ua387\ua045\ua00d' +
                              '\ua024\ua4bb\ua018\ua492\ua3ad\ua224\ua0a6\u1598' +
                              '\ua1b0\ua2ea\ua31a\ua4c4\ua00e\ua4a6\ua150\ua267' +
                              '\ua329\ua074');
function ladybug(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/[A-Z]/gu, char => LADYBUG_UC[char.codePointAt(0) - 65]);
}

const MATH_FRAKTUR_UC = Array.from("𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ");
const MATH_FRAKTUR_LC = Array.from("𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷");
function mathFraktur(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_FRAKTUR_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_FRAKTUR_UC[char.codePointAt(0) - 65]);
}

const MATH_FRAKTUR_BOLD_UC = Array.from("𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅");
const MATH_FRAKTUR_BOLD_LC = Array.from("𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟");
function mathFrakturBold(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_FRAKTUR_BOLD_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_FRAKTUR_BOLD_UC[char.codePointAt(0) - 65]);
}

const MATH_BOLD_DIGIT = Array.from("𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗");
const MATH_BOLD_UC    = Array.from("𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙");
const MATH_BOLD_LC    = Array.from("𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳");
function mathBold(text) {
    return text.normalize("NFD")
               .replace(/[0-9]/gu, char => MATH_BOLD_DIGIT[char.codePointAt(0) - 48])
               .replace(/[a-z]/gu, char => MATH_BOLD_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_BOLD_UC[char.codePointAt(0) - 65]);
}

const MATH_BOLD_ITALIC_UC    = Array.from("𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁");
const MATH_BOLD_ITALIC_LC    = Array.from("𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛");
function mathBoldItalic(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_BOLD_ITALIC_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_BOLD_ITALIC_UC[char.codePointAt(0) - 65]);
}

const MATH_DOUBLE_STRUCK_DIGIT = Array.from("𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡");
const MATH_DOUBLE_STRUCK_UC    = Array.from("𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ");
const MATH_DOUBLE_STRUCK_LC    = Array.from("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫");
function mathDoubleStruck(text) {
    return text.normalize("NFD")
               .replace(/[0-9]/gu, char => MATH_DOUBLE_STRUCK_DIGIT[char.codePointAt(0) - 48])
               .replace(/[a-z]/gu, char => MATH_DOUBLE_STRUCK_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_DOUBLE_STRUCK_UC[char.codePointAt(0) - 65]);
}

const MATH_MONOSPACE_UC = Array.from("𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉");
const MATH_MONOSPACE_LC = Array.from("𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣");
const MATH_MONOSPACE_DIGIT = Array.from("𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿");
function mathMonospace(text) {
    return text.normalize("NFD")
               .replace(/[0-9]/gu, char => MATH_MONOSPACE_DIGIT[char.codePointAt(0) - 48])
               .replace(/[a-z]/gu, char => MATH_MONOSPACE_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_MONOSPACE_UC[char.codePointAt(0) - 65]);
}

const MATH_SCRIPT_UC = Array.from("𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵");
const MATH_SCRIPT_LC = Array.from("𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏");
function mathScript(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_SCRIPT_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_SCRIPT_UC[char.codePointAt(0) - 65]);
}

const MATH_SCRIPT_BOLD_UC = Array.from("𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩");
const MATH_SCRIPT_BOLD_LC = Array.from("𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃");
function mathScriptBold(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_SCRIPT_BOLD_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_SCRIPT_BOLD_UC[char.codePointAt(0) - 65]);
}

const MATH_SANS_DIGIT = Array.from("𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫");
const MATH_SANS_UC = Array.from("𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹");
const MATH_SANS_LC = Array.from("𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓");
function mathSans(text) {
    return text.normalize("NFD")
               .replace(/[0-9]/gu, char => MATH_SANS_DIGIT[char.codePointAt(0) - 48])
               .replace(/[a-z]/gu, char => MATH_SANS_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_SANS_UC[char.codePointAt(0) - 65]);
}

const MATH_SANS_ITALIC_UC = Array.from("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡");
const MATH_SANS_ITALIC_LC = Array.from("𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻");
function mathSansItalic(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_SANS_ITALIC_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_SANS_ITALIC_UC[char.codePointAt(0) - 65]);
}

const MATH_SANS_BOLD_DIGIT = Array.from("𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵");
const MATH_SANS_BOLD_UC = Array.from("𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭");
const MATH_SANS_BOLD_LC = Array.from("𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇");
function mathSansBold(text) {
    return text.normalize("NFD")
               .replace(/[0-9]/gu, char => MATH_SANS_BOLD_DIGIT[char.codePointAt(0) - 48])
               .replace(/[a-z]/gu, char => MATH_SANS_BOLD_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_SANS_BOLD_UC[char.codePointAt(0) - 65]);
}

const MATH_SANS_BOLD_ITALIC_UC = Array.from("𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕");
const MATH_SANS_BOLD_ITALIC_LC = Array.from("𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯");
function mathSansBoldItalic(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => MATH_SANS_BOLD_ITALIC_LC[char.codePointAt(0) - 97])
               .replace(/[A-Z]/gu, char => MATH_SANS_BOLD_ITALIC_UC[char.codePointAt(0) - 65]);
}

const ROCK_DOTS = {
    'A': '\u00c4',
    'E': '\u00cb',
    'I': '\u00cf',
    'O': '\u00d6',
    'U': '\u00dc',
    'a': '\u00e4',
    'e': '\u00eb',
    'i': '\u00ef',
    'o': '\u00f6',
    'u': '\u00fc',
    'y': '\u00ff',
    'Y': '\u0178',
    'H': '\u1e26',
    'h': '\u1e27',
    'W': '\u1e84',
    'w': '\u1e85',
    'X': '\u1e8c',
    'x': '\u1e8d',
    't': '\u1e97',
    '-': '\u2e1a',
};

function rockDots(text) {
    return text.normalize("NFD").replace(/./gu, (char) => ROCK_DOTS[char] ?? char);
}

const SMALL_CAPITALS_LC = Array.from('\u1d00\u0299\u1d04\u1d05\u1d07\ua730\u0262\u029c' +
                                     '\u026a\u1d0a\u1d0b\u029f\u1d0d\u0274\u1d0f\u1d18' +
                                     '\ua7af\u0280\ua731\u1d1b\u1d1c\u1d20\u1d21x' +
                                     '\u028f\u1d22');

function smallCapitals(text) {
    return text.normalize("NFD")
               .replace(/[a-z]/gu, char => SMALL_CAPITALS_LC[char.codePointAt(0) - 97]);
}

const TAI_UC = Array.from('\uaa96\u1947\u1974\u1994\uaac0\u183b\u19c1\uaadd' +
                          '\ua838\ua839\u16d5\uaab6\uaa91\uaa80\uaaae\u03c1' +
                          '\uaa87\u1945\u1993\uaabb\uaa8a\uaa9c\u1b59\u194a' +
                          '\uaa97\u01ba');

function tai(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/[A-Z]/gu, char => TAI_UC[char.codePointAt(0) - 65]);
}

const YI_UC = Array.from('\ua2ec\ua0f3\ua254\ua4af\ua3c2\ua2b0\ua34c\ua05d' +
                         '\ua490\ua4bb\ua018\ua492\ua0b5\ua2ca\ua132\ua263' +
                         '\ua1b0\ua2ea\ua1d9\ua4c4\ua4a4\ua4a6\ua150\ua267' +
                         '\ua326\ua074');

function yi(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/[A-Z]/gu, char => YI_UC[char.codePointAt(0) - 65]);
}

const CIRCLED_NEGATIVE_MAPPING = { '0': "⓿" };
const CIRCLED_NEGATIVE_UC = Array.from("🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩");
function circledNegative(text) {
    return text.normalize("NFD").toUpperCase()
               .replace(/./gu, char => CIRCLED_NEGATIVE_MAPPING[char] ?? char)
               .replace(/[A-Z]/gu, char => CIRCLED_NEGATIVE_UC[char.codePointAt(0) - 65]);
}

const UPSIDE_DOWN = {
    "!": "¡",
    "\"": "„",
    "&": "⅋",
    "'": ",",
    "(": ")",
    ")": "(",
    ",": "‘",
    ".": "˙",
    "1": "Ɩ",
    "2": "ζ",
    "3": "Ɛ",
    "4": "߈",
    "5": "ϛ",
    "6": "9",
    "7": "𝘓",
    "9": "6",
    "<": ">",
    ">": "<",
    "?": "¿",
    "A": "∀",
    "B": "𐐒",
    "C": "Ɔ",
    "D": "ꓷ",
    "E": "Ǝ",
    "F": "Ⅎ",
    "G": "⅁",
    "J": "ſ",
    "K": "ꓘ",
    "L": "ꓶ",
    "M": "ꟽ",
    "P": "ᑯ",
    "Q": "Ό",
    "R": "ᴚ",
    "T": "ꓕ",
    "U": "∩",
    "V": "Λ",
    "W": "M",                   //
    "Y": "⅄",
    "[": "]",
    "]": "[",
    "^": "v",
    "_": "‾",
    "`": ",",
    "a": "ɐ",
    "b": "q",
    "c": "ɔ",
    "d": "p",
    "e": "ǝ",
    "f": "ɟ",
    "g": "ƃ",
    "h": "ɥ",
    "i": "ı̣",
    "j": "ɾ̣",
    "k": "ʞ",
    "l": "ן",
    "m": "ɯ",
    "n": "u",
    "p": "d",
    "q": "b",
    "r": "ɹ",
    "t": "ʇ",
    "u": "n",
    "v": "ʌ",
    "w": "ʍ",
    "y": "ʎ",
    "{": "}",
    "}": "{",
};
function upsideDown(text) {
    return text.normalize('NFD').replace(/./gu, char => UPSIDE_DOWN[char] ?? char);
}

const MATH_ITALIC_UC = Array.from('\ud835\udc34\ud835\udc35\ud835\udc36\ud835\udc37' +
                                  '\ud835\udc38\ud835\udc39\ud835\udc3a\ud835\udc3b' +
                                  '\ud835\udc3c\ud835\udc3d\ud835\udc3e\ud835\udc3f' +
                                  '\ud835\udc40\ud835\udc41\ud835\udc42\ud835\udc43' +
                                  '\ud835\udc44\ud835\udc45\ud835\udc46\ud835\udc47' +
                                  '\ud835\udc48\ud835\udc49\ud835\udc4a\ud835\udc4b' +
                                  '\ud835\udc4c\ud835\udc4d');
const MATH_ITALIC_LC = Array.from('\ud835\udc4e\ud835\udc4f\ud835\udc50\ud835\udc51' +
                                  '\ud835\udc52\ud835\udc53\ud835\udc54\u210e' +
                                  '\ud835\udc56\ud835\udc57\ud835\udc58\ud835\udc59' +
                                  '\ud835\udc5a\ud835\udc5b\ud835\udc5c\ud835\udc5d' +
                                  '\ud835\udc5e\ud835\udc5f\ud835\udc60\ud835\udc61' +
                                  '\ud835\udc62\ud835\udc63\ud835\udc64\ud835\udc65' +
                                  '\ud835\udc66\ud835\udc67');

function mathItalic(text) {
    return text.normalize("NFD")
               .replace(/[A-Z]/gu, char => MATH_ITALIC_UC[char.codePointAt(0) - 65] ?? char)
               .replace(/[a-z]/gu, char => MATH_ITALIC_LC[char.codePointAt(0) - 97] ?? char);
}

const PARENTHESIZED_UC = Array.from('\ud83c\udd10\ud83c\udd11\ud83c\udd12\ud83c\udd13' +
                                    '\ud83c\udd14\ud83c\udd15\ud83c\udd16\ud83c\udd17' +
                                    '\ud83c\udd18\ud83c\udd19\ud83c\udd1a\ud83c\udd1b' +
                                    '\ud83c\udd1c\ud83c\udd1d\ud83c\udd1e\ud83c\udd1f' +
                                    '\ud83c\udd20\ud83c\udd21\ud83c\udd22\ud83c\udd23' +
                                    '\ud83c\udd24\ud83c\udd25\ud83c\udd26\ud83c\udd27' +
                                    '\ud83c\udd28\ud83c\udd29');
const PARENTHESIZED_LC = Array.from('\u249c\u249d\u249e\u249f\u24a0\u24a1\u24a2\u24a3' +
                                    '\u24a4\u24a5\u24a6\u24a7\u24a8\u24a9\u24aa\u24ab' +
                                    '\u24ac\u24ad\u24ae\u24af\u24b0\u24b1\u24b2\u24b3' +
                                    '\u24b4\u24b5');
const PARENTHESIZED_1_9 = Array.from('\u2474\u2475\u2476\u2477\u2478\u2479\u247a\u247b\u247c');

function parenthesized(text) {
    return text.normalize("NFD")
               .replace(/[A-Z]/gu, char => PARENTHESIZED_UC[char.codePointAt(0) - 65])
               .replace(/[a-z]/gu, char => PARENTHESIZED_LC[char.codePointAt(0) - 97])
               .replace(/[1-9]/gu, char => PARENTHESIZED_1_9[char.codePointAt(0) - 49]);
}

const REVERSED = Array.from('!"#$%&\'' +
                            ')(*+,-.\\' +
                            '0\u07c1234567' +
                            '89:\u204f>=<\u2e2e' +
                            '@Ad\u2183b\u018e\ua7fbG' +
                            'HIJK\u2143M\u1d0eO' +
                            '\ua7fcp\u1d19\ua644TUVW' +
                            'XYZ]/[^_' +
                            '`Ad\u2184b\u0258\ua7fbg' +
                            'Hijklm\u1d0eo' +
                            'qp\u1d19\ua645TUvw' +
                            'xYz}|{\u223d');

function reversed(text) {
    return text.normalize("NFD")
               .replace(/[!-~]/gu, char => REVERSED[char.codePointAt(0) - 33]);
}

if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    if (require.main === module) {
        for (const converter of Object.keys(converters).sort().map(name => converters[name])) {
            console.log(`======= ${converter.name} =======`);
            console.log(converter(Array.from(' !"#$%&\'()*+,-./').join(' ')));
            console.log(converter(Array.from('0123456789:;<=>?').join(' ')));
            console.log(converter(Array.from('@ABCDEFGHIJKLMNO').join(' ')));
            console.log(converter(Array.from('PQRSTUVWXYZ[\\]^_').join(' ')));
            console.log(converter(Array.from('`abcdefghijklmno').join(' ')));
            console.log(converter(Array.from('pqrstuvwxyz{|}~').join(' ')));
        }
    }
}
