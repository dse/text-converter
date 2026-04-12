export default function fraktur(str) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => char.codePointAt(0))
               .map(cp => {
                   const char = String.fromCodePoint(cp);
                   return (char === "C" ? 0x212d : // MATHEMATICAL FRAKTUR CAPITAL C ℭ
                           char === "H" ? 0x210c : // MATHEMATICAL FRAKTUR CAPITAL H ℌ
                           char === "I" ? 0x2111 : // MATHEMATICAL FRAKTUR CAPITAL I ℑ
                           char === "R" ? 0x211c : // MATHEMATICAL FRAKTUR CAPITAL R ℜ
                           char === "Z" ? 0x2128 : // MATHEMATICAL FRAKTUR CAPITAL Z ℨ
                           cp >= 65 && cp <= 90 ? cp - 65 + 0x1d504 :
                           cp >= 97 && cp <= 122 ? cp - 97 + 0x1d51e : cp);
               })
               .map(cp => String.fromCodePoint(cp))
               .join("");
    str = str.normalize("NFC");
    return str;
}

fraktur.name = "Fraktur";
