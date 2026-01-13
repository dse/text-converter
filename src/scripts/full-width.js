export default function fullWidth(str) {
    str = str.normalize("NFD");
    str = Array.from(str)
               .map(char => char.codePointAt(0))
               .map(cp => (cp >= 33 && cp <= 126 ? cp - 33 + 0xff01 :
                           cp === 32 ? 0x3000 : cp))
               .map(cp => String.fromCodePoint(cp))
               .join("");
    str = str.normalize("NFC");
    return str;
}

fullWidth.name = "Full Width Characters";
