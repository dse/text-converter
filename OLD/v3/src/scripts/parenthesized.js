import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩");
const LOWER = Array.from("⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵");
const DIGIT = Array.from("0⑴⑵⑶⑷⑸⑹⑺⑻⑼");

export default function parenthesized(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

parenthesized.name = "Parenthesized";
