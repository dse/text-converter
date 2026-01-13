/*jshint esversion: 6 */
function toHex(int) {
    return '0x' + int.toString(16).padStart(4, '0');
}

function toUnicodeHex(int) {
    return 'U+' + int.toString(16).padStart(4, '0').toUpperCase();
}

function codepointFromSurrogatePair(high, low) {
    if (low == null && typeof high === 'string' && high.length >= 2) {
        low = high[1];
        high = high[0];
    }
    if (typeof high === 'string') {
        high = high.charCodeAt(0);
    }
    if (typeof low === 'string') {
        low = low.charCodeAt(0);
    }
    return 0x10000 + ((high & 0x03ff) << 10) + (low & 0x03ff);
}

function toSurrogatePairCodepoints(codepoint) {
    var delta = codepoint - 0x10000;
    var high = 0xd800 + ((delta >> 10) & 0x03ff);
    var low = 0xdc00 + (delta & 0x03ff);
    return [high, low];
}

function toSurrogatePairString(codepoint) {
    var codepoints = toSurrogatePairCodepoints(codepoint);
    return String.fromCharCode(codepoints[0]) + String.fromCharCode(codepoints[1]);
}

function splitUnicodeCodepoints(str) {
    return splitUnicode(str, Number);
}

function splitUnicodeStrings(str) {
    return splitUnicode(str, String);
}

function splitUnicode(str, type) {
    var result = [];
    var codepoint, codepoint2;
    if (type == null) { type = Number; }
    for (var i = 0; i < str.length; i += 1) {
        codepoint = str[i].charCodeAt(0);
        codepoint2 = (i < str.length - 1) ? str[i + 1].charCodeAt(0) : undefined;
        if (codepoint >= 0xd800 && codepoint <= 0xdbff &&
            codepoint2 != null && codepoint2 >= 0xdc00 && codepoint2 <= 0xdfff) {
            // codepoint is high surrogate; codepoint2 is low
            // surrogate
            if (type === Number) {
                result.push(codepointFromSurrogatePair(codepoint, codepoint2));
            } else if (type === String) {
                result.push(str.slice(i, i + 2));
            }
            i += 1;
        } else {
            if (type === Number) {
                result.push(codepoint);
            } else if (type === String) {
                result.push(str[i]);
            }
        }
    }
    return result;
}

function randomFontText(text, randomFont) {
    text = splitUnicode(text, String);
    for (i = 0; i < text.length; i += 1) {
        if (randomFont[text[i]] == null) { continue; }
        text[i] = randomChar(randomFont[text[i]]);
    }
    return text.join('');
}

function randomChar(chars) {
    if (Array.isArray(chars)) {
        chars = chars.join('');
    } else {
        chars = String(chars);
    }
    var i, codepoint;
    while (true) {
        i = Math.floor(Math.random() * chars.length);
        codepoint = chars.charCodeAt(i);
        if (codepoint >= 0xd800 && codepoint <= 0xdbff) {
            // high surrogate
            return chars[i] + chars[i + 1];
        }
        if (codepoint >= 0xdc00 && codepoint <= 0xdfff) {
            // low surrogate
            continue;
        }
        return chars[i];
    }
}

function rot13(str) {
    return string.replace(/[A-Za-z]/g, function (char) {
        const code = char.charCodeAt(0);
        if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) { // A-M or a-m
            return String.fromCharCode(code + 13);
        }
        if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) { // N-Z or n-z
            return String.fromCharCode(code - 13);
        }
        return code;
    });
}

function spongebob(str) {
    var flag = false;
    return string.replace(/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]/g, function (c) {
        var lc = c.toLowerCase();
        var uc = c.toUpperCase();
        if (lc === uc) {
            return c;
        }
        flag = !flag;
        return flag ? lc : uc;
    });
}

function reverseString(str) {
    var arr = splitUnicodeStrings(str);
    arr.reverse();
    return arr.join('');
}

if (typeof module !== 'undefined' && module != null) {
    module.exports = {
        toHex,
        toUnicodeHex,
        codepointFromSurrogatePair,
        toSurrogatePairCodepoints,
        toSurrogatePairString,
        splitUnicodeCodepoints,
        splitUnicodeStrings,
        randomFontText,
        randomChar,
        rot13,
        spongebob,
    };
}
