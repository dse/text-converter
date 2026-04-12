import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ");
const LOWER = Array.from("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫");
const DIGIT = Array.from("𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡");

export default function doubleStruck(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

doubleStruck.name = "Double Struck";
