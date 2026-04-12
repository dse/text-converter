export default function upperLowerDigit(str, UPPER, LOWER, DIGIT) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => {
        const cp = char.codePointAt(0);
        if (UPPER != null && cp >= 65 && cp <= 90) {
            return UPPER[cp - 65];
        }
        if (LOWER != null && cp >= 97 && cp <= 122) {
            return LOWER[cp - 97];
        }
        if (DIGIT != null && cp >= 48 && cp <= 57) {
            return DIGIT[cp - 48];
        }
        return char;
    }).join("");
    str = str.normalize("NFC");
    return str;
}
