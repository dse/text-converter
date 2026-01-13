import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡");
const LOWER = Array.from("𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻");
const DIGIT = Array.from("𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫");

export default function sansSerifItalic(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

sansSerifItalic.name = "Sans Serif Italic";
