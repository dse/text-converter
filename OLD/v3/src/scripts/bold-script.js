export default function boldScript(str) {
    str = str.normalize("NFD");
    str = Array.from(str).map(char => char.codePointAt(0))
               .map(cp => cp >= 65 && cp <= 90 ? cp - 65 + 0x1d4d0 :
                          cp >= 97 && cp <= 122 ? cp - 97 + 0x1d4ea : cp)
               .map(cp => String.fromCodePoint(cp))
               .join("");
    str = str.normalize("NFC");
    return str;
}

boldScript.name = "Bold Script";
