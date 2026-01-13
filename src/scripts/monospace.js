const UPPER = "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉";
const LOWER = "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣";
const DIGIT = "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿";

export default function monospace(str) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => {
        const cp = char.codePointAt(0);
        if (cp >= 65 && cp <= 90) {
            return UPPER[cp - 65];
        }
        if (cp >= 97 && cp <= 122) {
            return UPPER[cp - 97];
        }
        if (cp >= 48 && cp <= 57) {
            return DIGIT[cp - 48];
        }
        return char;
    }).join("");
    str = str.normalize("NFC");
    return str;
}

monospace.name = "Monospace";
