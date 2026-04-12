export default function boldFraktur(str) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => char.codePointAt(0))
               .map(cp => {
                   return (cp >= 65 && cp <= 90 ? cp - 65 + 0x1d56c :
                           cp >= 97 && cp <= 122 ? cp - 97 + 0x1d586 : cp);
               })
               .map(cp => String.fromCodePoint(cp))
               .join("");
    str = str.normalize("NFC");
    return str;
}

boldFraktur.name = "Bold Fraktur";
