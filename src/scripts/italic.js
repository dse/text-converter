export default function italic(str) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => char.codePointAt(0))
               .map(cp => cp >= 65 && cp <= 90 ? cp - 65 + 0x1d434 :
                          cp >= 97 && cp <= 122 ? cp - 97 + 0x1d44e : cp)
               .map(cp => String.fromCodePoint(cp))
               .join("");
    str = str.normalize("NFC");
    return str;
}

italic.name = "Italic";
