import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭");
const LOWER = Array.from("𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇");
const DIGIT = Array.from("𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵");

export default function sansSerifBold(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

sansSerifBold.name = "Sans Serif Bold";
