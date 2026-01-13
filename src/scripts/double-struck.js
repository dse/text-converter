const UPPER = Array.from("𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ");
const LOWER = Array.from("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫");
const DIGIT = Array.from("𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡");

export default function doubleStruck(str) {
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

doubleStruck.name = "Double Struck";
