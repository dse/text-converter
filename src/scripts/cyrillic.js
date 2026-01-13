import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("ДБҀↁЄFБНІЈЌLМИФРQЯЅГЦVЩЖУZ");
const LOWER = Array.from("аъсↁэfБЂіјкlмиорqѓѕтцvшхЎz");
const DIGIT = Array.from("0І2З456789");

export default function cyrillic(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

cyrillic.name = "Cyrillic";
