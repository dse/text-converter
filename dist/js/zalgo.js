'use strict';

const ZALGO_DOWNWARD = Array.from('\u0316\u0317\u0318\u0319\u031c\u031d\u031e\u031f\u0320\u0324\u0325\u0326\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0339\u033a\u033b\u033c\u0345\u0347\u0348\u0349\u034d\u034e\u0353\u0354\u0355\u0356\u0359\u035a');
const ZALGO_UPWARD = Array.from('\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311\u031a\u033d\u033e\u033f\u0342\u0343\u0344\u0346\u034a\u034b\u034c\u0350\u0351\u0352\u0357\u035b\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f');
const ZALGO_MIDDLE = Array.from('\u0315\u031b\u0321\u0322\u0327\u0328\u0334\u0335\u0336\u0337\u0338\u0340\u0341\u0358\u035c\u035d\u035e\u035f\u0360\u0361\u0362');
const ZALGO_FULL = ZALGO_DOWNWARD.concat(ZALGO_MIDDLE).concat(ZALGO_UPWARD);

function zalgo(text, amount) {
    text = text.normalize("NFC");
    let chars = Array.from(text);
    chars = chars.filter(char => !ZALGO_FULL.includes(char));
    chars = chars.map(function (char) {
        if (/[\s\x00-\x1f\x7f-\x9f\ufeff]/.test(char)) {
            return char;
        }
        let result = char;
        for (let i = 0; i < amount; i += 1) {
            result += ZALGO_FULL[Math.floor(Math.random() * ZALGO_FULL.length)];
        }
        return result;
    });
    return chars.join('');
}
