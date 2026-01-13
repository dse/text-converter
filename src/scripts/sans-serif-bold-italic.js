import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕");
const LOWER = Array.from("𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯");
const DIGIT = Array.from("𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵");

export default function sansSerifBoldItalic(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

sansSerifBoldItalic.name = "Sans Serif Bold Italic";
