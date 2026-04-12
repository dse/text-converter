import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉");
const LOWER = Array.from("🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉");

export default function negativeSquared(str) {
    return upperLowerDigit(str, UPPER, LOWER);
}

negativeSquared.name = "Negative Squared";
