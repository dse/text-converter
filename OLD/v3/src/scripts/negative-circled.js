import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩");
const LOWER = Array.from("🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩");
const DIGIT = Array.from("⓿⓵⓶⓷⓸⓹⓺⓻⓼⓽"); // FIXME: find negative circled 1 to 9

export default function negativeCircled(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

negativeCircled.name = "Negative Circled";
