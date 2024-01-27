'use strict';
/*jshint devel: true */
/*global zalgo */

const converters = {
    comic,
    manga,
    circled,
};

const COMIC_UC = Array.from(
    '\u15e9\u15f7\u1455\u15ea\u15f4\u15b4\u161c\u157c' +
        'I\u148dK\u14aa\u15f0\u144eO\u146d' +
        '\u146b\u1587\u1515T\u144c\u142f\u15ef\u166d' +
        'Y\u1614',
);
const MANGA_UC = Array.from(
    '\u5342\u4e43\u531a\u15ea\u4e47\u5343\u161c\u5344' +
        '|\uff8c\u049c\u3125\u722a\u51e0\u3116\u5369' +
        '\u04a8\u5c3a\u4e02\u3112\u3129\u142f\u5c71\u4e42' +
        '\u311a\u4e59'
);
const CIRCLED_UC = Array.from(
    '\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf',
);
const CIRCLED_LC = Array.from(
    '\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7\u24e8\u24e9',
);
const CIRCLED_DIGIT = Array.from(
    '\u24ea\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468',
);
const CIRCLED_MAPPING = {
    '*':  '\u229b',
    '+':  '\u2295',
    '-':  '\u2296',
    '.':  '\u2299',
    '/':  '\u2298',
    '=':  '\u229c',
    '|':  '\u29b6',
    '\\': '\u29b8',
    '>':  '\u29c0',
    '<':  '\u29c1',
};

window.addEventListener('load', setup);

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

    let converterName = JSON.parse(localStorage.getItem('textConverter.converterName'));
    let caseTransform = JSON.parse(localStorage.getItem('textConverter.caseTransform'));
    let rot13Flag     = JSON.parse(localStorage.getItem('textConverter.rot13Flag'));
    let zalgoFlag     = JSON.parse(localStorage.getItem('textConverter.zalgoFlag'));
    let zalgoAmount   = JSON.parse(localStorage.getItem('textConverter.zalgoAmount'));
    let backwardsFlag = JSON.parse(localStorage.getItem('textConverter.backwardsFlag'));
    let inputText     = localStorage.getItem('textConverter.inputText');

    if (converterName != null) {
        const idx = Array.from(converterSelect.options).findIndex(option => option.value === converterName);
        if (idx !== -1) {
            converterSelect.selectedIndex = idx;
        }
    }
    if (caseTransform != null) {
        const idx = Array.from(caseTransformSelect.options).findIndex(option => option.value === caseTransform);
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

    copyButton.addEventListener('click', function () {
        navigator.clipboard.writeText(inputTextArea.value).then(function () {
            const indicator = document.getElementById('copiedIndicator');
            if (!indicator) { return; }
            indicator.classList.add('flash');
            indicator.offsetHeight; // trigger a reflow
            indicator.classList.remove('flash');
        });
    });

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
            const chars = Array.from(text.normalize("NFC"));
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
    }

    update();
    updatePlaceholder();
}

function spongebob(text) {
    let upper = false;
    return text.normalize("NFD").replace(/\p{LC}/gu, function (letter) {
        letter = upper ? letter.toUpperCase() : letter.toLowerCase();
        upper = !upper;
        return letter;
    });
}
function rot13(text) {
    return text.normalize("NFD").replace(/[A-Za-z]/g, function (letter) {
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
function comic(text) {
    return text.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (letter) {
        return COMIC_UC[letter.codePointAt(0) - 65];
    });
}
function manga(text) {
    return text.normalize("NFD").toUpperCase().replace(/[A-Z]/g, function (letter) {
        return MANGA_UC[letter.codePointAt(0) - 65];
    });
}
function circled(text) {
    return text.normalize("NFD").toUpperCase().replace(/./g, function (char) {
        const codepoint = char.codePointAt(0);
        if (codepoint >= 65 && codepoint <= 90) {
            return CIRCLED_UC[codepoint - 65];
        }
        if (codepoint >= 97 && codepoint <= 122) {
            return CIRCLED_LC[codepoint - 65];
        }
        if (codepoint >= 48 && codepoint <= 57) {
            return CIRCLED_DIGIT[codepoint - 48];
        }
        return CIRCLED_MAPPING[char] ?? char;
    });
}
