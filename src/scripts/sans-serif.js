import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹");
const LOWER = Array.from("𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓");
const DIGIT = Array.from("𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫");

export default function sansSerif(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

sansSerif.name = "Sans Serif";
