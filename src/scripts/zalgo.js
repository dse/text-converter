// Sets of characters from
// https://github.com/jivanyatra/zalgolib/blob/master/src/zalgolib/diacritics.py

const DOWN_MARKS = [
    '̖',' ̗',' ̘',' ̙',' ̜',' ̝',' ̞',' ̟',' ̠',' ̤',' ̥',' ̦',' ̩',' ̪',' ̫',' ̬',' ̭',' ̮',' ̯',' ̰',' ̱',' ̲',' ̳',' ̹',' ̺',' ̻',' ̼',' ͅ',' ͓',' ͚',
    ' ͇',' ͈',' ͉',' ͍',' ͎',' ͔',' ͕',' ͖',' ͙',
];

const UP_MARKS = [
    ' ̍',' ̎',' ̄',' ̅',' ̿',' ̑',' ̆',' ̐',' ͒',' ͗',' ͑',' ̇',' ̈',' ̊',' ͂',' ̓',' ̈́',' ̃',' ̂',' ̌',' ́',' ̋',' ̏',' ̽',' ̉',' ̾',' ͆',' ̚',
    ' ͊',' ͋',' ͌',' ͐',' ͣ',' ͤ',' ͥ',' ͦ',' ͧ',' ͨ',' ͩ',' ͪ',' ͫ',' ͬ',' ͭ',' ͮ',' ͯ',' ͛',
];

const MID_MARKS = [
    ' ̕',' ̛',' ̀',' ́',' ͘',' ̡',' ̢',' ̧',' ̨',' ̸',' ̷',
    ' ̴',' ̵',' ̶',' ͜',' ͝',' ͞',' ͟',' ͠',' ͢',' ͡',
];

export default function zalgo(str, options) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => {
        if (char === " " || char === "\t" || char === "\r" || char === "\n") {
            return char;
        }
        return char + genZalgo(options);
    }).join("");
    str = str.normalize("NFC");
    return str;
}

zalgo.name = "Zalgo";

function genZalgo(options) {
    options = Object.assign({}, options); // shallow copy
    options.downMarkCount = options.downMarkCount ?? options.markCount ?? [2,4];
    options.midMarkCount = options.midMarkCount ?? options.markCount ?? [2,4];
    options.upMarkCount = options.upMarkCount ?? options.markCount ?? [2,4];
    const downMarkCount = computeMarkCount(options.downMarkCount);
    const midMarkCount = computeMarkCount(options.midMarkCount);
    const upMarkCount = computeMarkCount(options.upMarkCount);
    let result = "";
    result += genRandomString(DOWN_MARKS, downMarkCount);
    result += genRandomString(MID_MARKS, midMarkCount);
    result += genRandomString(UP_MARKS, upMarkCount);
    return result;
}

function computeMarkCount(markCount) {
    if (Array.isArray(markCount) && markCount.length === 2) {
        return markCount[0] + Math.floor(Math.random() * (markCount[1] + 1));
    } else if (markCount?.constructor === Number) {
        return markCount;
    } else {
        return 0;
    }
}

function genRandomString(symbols, length) {
    let result = "";
    for (let i = 0; i < length; i += 1) {
        let item = symbols[Math.floor(Math.random() * symbols.length)];
        if (item.constructor === Number) {
            result += String.fromCodePoint(item);
        } else if (item.constructor === String) {
            const comb = item[1].codePointAt(0);
            if (item.length === 2 && item[0] === " " && comb >= 0x0300 && comb < 0x0370) {
                result += item[1];
            } else {
                result += item;
            }
        }
    }
    return result;
}
