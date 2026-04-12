import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ");
const LOWER = Array.from("ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ");
const DIGIT = Array.from("⓪①②③④⑤⑥⑦⑧⑨");

export default function circled(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

circled.name = "Circled";
