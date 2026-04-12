import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉");
const LOWER = Array.from("𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣");
const DIGIT = Array.from("𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿");

export default function monospace(str) {
    return upperLowerDigit(str, UPPER, LOWER, DIGIT);
}

monospace.name = "Monospace";
