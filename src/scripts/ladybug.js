export default function ladybug(str) {
    str = str.normalize("NFD");

    str = str.normalize("NFC");
}

ladybug.name = "Ladybug";
