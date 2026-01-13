import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉");
const LOWER = Array.from("🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉");

export default function squared(str) {
    return upperLowerDigit(str, UPPER, LOWER);
}

squared.name = "Squared";
