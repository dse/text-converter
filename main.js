"use strict";

/**
 * printable ASCII:
 * !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
 *
 * used:
 *     https://qaz.wtf/u/
 *     https://textfancy.com/font-converter/
 *     https://convertcase.net/unicode-text-converter/
 *
 * not used:
 *     https://www.textconverter.net/
 *     https://www.babelstone.co.uk/Unicode/text.html
 *     http://unicodetextconverter.top/
 */

const FRAKTUR_UC = [..."𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ"];
const FRAKTUR_LC = [..."𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"];
function fraktur(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => FRAKTUR_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => FRAKTUR_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const FRAKTUR_BOLD_LC = [..."𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟"];
const FRAKTUR_BOLD_UC = [..."𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅"];
function frakturBold(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => FRAKTUR_BOLD_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => FRAKTUR_BOLD_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const SANS_SERIF_UC = [..."𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹"];
const SANS_SERIF_LC = [..."𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓"];
const SANS_SERIF_DIGITS = [..."𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫"];
function sansSerif(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SANS_SERIF_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SANS_SERIF_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => SANS_SERIF_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SANS_SERIF_ITALIC_UC = [..."𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡"];
const SANS_SERIF_ITALIC_LC = [..."𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"];
function sansSerifItalic(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SANS_SERIF_ITALIC_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SANS_SERIF_ITALIC_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const SANS_SERIF_BOLD_UC = [..."𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭"];
const SANS_SERIF_BOLD_LC = [..."𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇"];
const SANS_SERIF_BOLD_DIGITS = [..."𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"];
function sansSerifBold(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SANS_SERIF_BOLD_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SANS_SERIF_BOLD_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => SANS_SERIF_BOLD_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SANS_SERIF_BOLD_ITALIC_UC = [..."𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕"];
const SANS_SERIF_BOLD_ITALIC_LC = [..."𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯"];
function sansSerifBoldItalic(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SANS_SERIF_BOLD_ITALIC_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SANS_SERIF_BOLD_ITALIC_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const SERIF_BOLD_UC = [..."𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙"];
const SERIF_BOLD_LC = [..."𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"];
const SERIF_BOLD_DIGITS = [..."𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"];
function serifBold(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SERIF_BOLD_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SERIF_BOLD_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => SERIF_BOLD_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SERIF_ITALIC_UC = [..."𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍"];
const SERIF_ITALIC_LC = [..."𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧"];
function serifItalic(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SERIF_ITALIC_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SERIF_ITALIC_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const SERIF_BOLD_ITALIC_UC = [..."𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁"];
const SERIF_BOLD_ITALIC_LC = [..."𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛"];
function serifBoldItalic(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SERIF_BOLD_ITALIC_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SERIF_BOLD_ITALIC_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const FULL_WIDTH_ASCII = [...("　！＂＃＄％＆＇（）＊＋，－．／" +
                              "０１２３４５６７８９：；＜＝＞？" +
                              "＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯ" +
                              "ＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿" +
                              "｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏ" +
                              "ｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～")];
function fullWidth(text) {
    text = text.normalize("NFD");
    text = text.replace(/[ -~]/g, char => FULL_WIDTH_ASCII[char.codePointAt(0) - 32]);
    text = text.normalize("NFC");
    return text;
}

const MONOSPACE_UC = [..."𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉"];
const MONOSPACE_LC = [..."𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣"];
const MONOSPACE_DIGITS = [..."𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"];
function monospace(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => MONOSPACE_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => MONOSPACE_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => MONOSPACE_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SCRIPT_UC = [..."𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵"];
const SCRIPT_LC = [..."𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏"];
function script(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SCRIPT_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SCRIPT_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const SCRIPT_BOLD_UC = [..."𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩"];
const SCRIPT_BOLD_LC = [..."𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"];
function scriptBold(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SCRIPT_BOLD_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SCRIPT_BOLD_LC[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const DOUBLE_STRUCK_UC = [..."𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ"];
const DOUBLE_STRUCK_LC = [..."𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"];
const DOUBLE_STRUCK_DIGITS = [..."𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"];
function doubleStruck(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => DOUBLE_STRUCK_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => DOUBLE_STRUCK_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => DOUBLE_STRUCK_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SQUARED_UC = [..."🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉"];
function squared(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => SQUARED_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const SQUARED_NEGATIVE_UC = [..."🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"];
function squaredNegative(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => SQUARED_NEGATIVE_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const CIRCLED_LC = [..."ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ"];
const CIRCLED_UC = [..."ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ"];
const CIRCLED_DIGITS = [..."0①②③④⑤⑥⑦⑧⑨"];
function circled(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => CIRCLED_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => CIRCLED_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => CIRCLED_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const CIRCLED_NEGATIVE_LC = [..."🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩"];
const CIRCLED_NEGATIVE_UC = [..."🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩"];
const CIRCLED_NEGATIVE_DIGITS = [..."⓿123456789"];
function circledNegative(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => CIRCLED_NEGATIVE_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => CIRCLED_NEGATIVE_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => CIRCLED_NEGATIVE_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SUBSCRIPT_LC = [..."ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz"];
const SUBSCRIPT_UC = [..."ₐBCDₑFGₕᵢⱼₖₗₘₙₒₚQᵣₛₜᵤᵥWₓYZ"];
const SUBSCRIPT_DIGITS = [..."₀₁₂₃₄₅₆₇₈₉"];
function subscript(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SUBSCRIPT_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SUBSCRIPT_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => SUBSCRIPT_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const SUPERSCRIPT_LC = [..."ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ"];
const SUPERSCRIPT_UC = [..."ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ"];
const SUPERSCRIPT_DIGITS = [..."⁰¹²³⁴⁵⁶⁷⁸⁹"];
function superscript(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => SUPERSCRIPT_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => SUPERSCRIPT_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => SUPERSCRIPT_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

// const INVERTED_LC = [...""];
// const INVERTED_UC = [...""];
// const INVERTED_DIGITS = [...""];
function inverted(text) {
    text = text.normalize("NFD");
    text = text.normalize("NFC");
    return text;
}

// const REVERSED_LC = [...""];
// const REVERSED_UC = [...""];
// const REVERSED_DIGITS = [...""];
function reversed(text) {
    text = text.normalize("NFD");
    text = text.normalize("NFC");
    return text;
}

const PARENTHESIZED_LC = [..."⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵"];
const PARENTHESIZED_UC = [..."🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩"];
const PARENTHESIZED_DIGITS = [..."0⑴⑵⑶⑷⑸⑹⑺⑻⑼"];
function parenthesized(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Z]/g, char => PARENTHESIZED_UC[char.codePointAt(0) - 65]);
    text = text.replace(/[a-z]/g, char => PARENTHESIZED_LC[char.codePointAt(0) - 97]);
    text = text.replace(/[0-9]/g, char => PARENTHESIZED_DIGITS[char.codePointAt(0) - 48]);
    text = text.normalize("NFC");
    return text;
}

const COMIC_UC = [..."ᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ"];
function comic(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => COMIC_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const MANGA_UC = [..."卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙"];
function manga(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => MANGA_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const LADYBUG_UC = [..."ꍏꌃꏳꀷꏂꎇꁅꀍꀤ꒻ꀘ꒒ꎭꈤꂦᖘꆰꋪꌚ꓄ꀎ꒦ꅐꉧꌩꁴ"];
function ladybug(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => LADYBUG_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const YI_UC = [..."ꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴ"];
function yi(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => YI_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const TAI_UC = [..."ꪖ᥇ᥴᦔꫀᠻᧁꫝ꠸꠹ᛕꪶꪑꪀꪮρꪇ᥅ᦓꪻꪊꪜ᭙᥊ꪗƺ"];
function tai(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => TAI_UC[char.toUpperCase().codePointAt(0) - 65]);
    text = text.normalize("NFC");
    return text;
}

const SMALL_CAPS = [..."ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀꜱᴛᴜᴠᴡxʏᴢ"];
function lowerCaseToSmallCaps(text) {
    text = text.normalize("NFD");
    text = text.replace(/[a-z]/g, char => SMALL_CAPS[char.codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}
function smallCaps(text) {
    text = text.normalize("NFD");
    text = text.replace(/[A-Za-z]/g, char => SMALL_CAPS[char.toLowerCase().codePointAt(0) - 97]);
    text = text.normalize("NFC");
    return text;
}

const ROCK_DOTS_LOOKUP = {
    from: [..."AEIOUaeiouyYHhWwXxt-"],
    to:   [..."ÄËÏÖÜäëïöüÿŸḦḧẄẅẌẍẗ⸚"]
};
function rockDots(text) {
    text = text.normalize("NFD");
    text = text.replace(/(?:[\xd800-\xdbff][\xdc00-\xdfff]|[^\xd800-\xdfff])/g,
                        function (char) {
                            const idx = ROCK_DOTS_LOOKUP.from.indexOf(char);
                            return idx < 0 ? char : ROCK_DOTS_LOOKUP.to[idx];
                        });
    return text;
}

const conversionFunctions = {
    fraktur,
    frakturBold,
    sansSerif,
    sansSerifItalic,
    sansSerifBold,
    sansSerifBoldItalic,
    serifBold,
    serifItalic,
    serifBoldItalic,
    fullWidth,
    monospace,
    script,
    scriptBold,
    doubleStruck,
    squared,
    squaredNegative,
    circled,
    circledNegative,
    subscript,
    superscript,
    inverted,
    reversed,
    parenthesized,
    comic,
    manga,
    ladybug,
    yi,
    tai,
    lowerCaseToSmallCaps,
    smallCaps,
    rockDots,
};

const conversionList = [
    { "functionName": "fraktur",              name: "Fraktur", },
    { "functionName": "frakturBold",          name: "Fraktur Bold", },
    { "functionName": "sansSerif",            name: "Sans Serif", },
    { "functionName": "sansSerifItalic",      name: "Sans Serif Italic", },
    { "functionName": "sansSerifBold",        name: "Sans Serif Bold", },
    { "functionName": "sansSerifBoldItalic",  name: "Sans Serif Bold Italic", },
    { "functionName": "serifBold",            name: "Serif Bold", },
    { "functionName": "serifItalic",          name: "Serif Italic", },
    { "functionName": "serifBoldItalic",      name: "Serif Bold Italic", },
    { "functionName": "fullWidth",            name: "Full Width", },
    { "functionName": "monospace",            name: "Monospace", },
    { "functionName": "script",               name: "Script", },
    { "functionName": "scriptBold",           name: "Script Bold", },
    { "functionName": "doubleStruck",         name: "Double-Struck", },
    { "functionName": "squared",              name: "Squared", },
    { "functionName": "squaredNegative",      name: "Squared (negative)", },
    { "functionName": "circled",              name: "Circled", },
    { "functionName": "circledNegative",      name: "Circled (negative)", },
    { "functionName": "subscript",            name: "Subscript", },
    { "functionName": "superscript",          name: "Superscript", },
    { "functionName": "inverted",             name: "Inverted", },
    { "functionName": "reversed",             name: "Reversed", },
    { "functionName": "parenthesized",        name: "Parenthesized", },
    { "functionName": "comic",                name: "Comic", },
    { "functionName": "manga",                name: "Manga", },
    { "functionName": "ladybug",              name: "Ladybug", },
    { "functionName": "yi",                   name: "Yi", },
    { "functionName": "tai",                  name: "Tai", },
    { "functionName": "lowerCaseToSmallCaps", name: "Lower Case to Small Caps", },
    { "functionName": "smallCaps",            name: "Small Caps", },
    { "functionName": "rockDots",             name: "Rock Dots", },
];

const ZALGO_DOWN = [
    '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e',
    '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a',
    '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331',
    '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345',
    '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354',
    '\u0355', '\u0356', '\u0359', '\u035a',
];
const ZALGO_MIDDLE = [
    '\u0315', '\u031b', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334',
    '\u0335', '\u0336', '\u0337', '\u0338', '\u0340', '\u0341', '\u0358',
    '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0361', '\u0362',
];
const ZALGO_UP = [
    '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307',
    '\u0308', '\u0309', '\u030a', '\u030b', '\u030c', '\u030d', '\u030e',
    '\u030f', '\u0310', '\u0311', '\u031a', '\u033d', '\u033e', '\u033f',
    '\u0342', '\u0343', '\u0344', '\u0346', '\u034a', '\u034b', '\u034c',
    '\u0350', '\u0351', '\u0352', '\u0357', '\u035b', '\u0363', '\u0364',
    '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b',
    '\u036c', '\u036d', '\u036e', '\u036f',
];
const ZALGO = [...ZALGO_UP, ...ZALGO_DOWN, ...ZALGO_MIDDLE];

function zalgo(text, amount) {
    return text.replace(/\P{M}\p{M}*/gu, function (grapheme) {
        for (let i = 0; i < amount; i += 1) {
            grapheme += ZALGO[Math.floor(Math.random() * ZALGO.length)];
        }
        return grapheme;
    });
}

function backwards(text) {
    let result = "";
    text = text.replace(/\P{M}\p{M}*/gu, function (grapheme) {
        result = grapheme + result;
    });
    return result;
}

function spongebob(text) {
    let flag = false;
    text = text.replace(/\P{M}\p{M}*/gu, function (grapheme) {
        flag = !flag;
        return flag ? grapheme.toLowerCase() : grapheme.toUpperCase();
    });
    return text;
}

if (typeof window !== "undefined") {
    const form = document.getElementById("textConverterForm");
    populate(form);
}

function populate(form) {
    const select = form.filter;
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    select.appendChild(new Option("None", ""));
    for (const conversion of conversionList) {
        const { functionName, name } = conversion;
        const fn = conversionFunctions[functionName];
        const label = name + " — " + fn(name);
        const option = new Option(label, functionName);
        select.appendChild(option);
    }

    if (localStorage.getItem("textConverterFilter") != null) {
        const value = JSON.parse(localStorage.getItem("textConverterFilter"));
        form.filter.value = value;
    }
    if (localStorage.getItem("textConverterDirection") != null) {
        const value = JSON.parse(localStorage.getItem("textConverterDirection"));
        form.direction.value = value;
    }
    if (localStorage.getItem("textConverterZalgo") != null) {
        const value = JSON.parse(localStorage.getItem("textConverterZalgo"));
        form.zalgo.value = value;
    }
    if (localStorage.getItem("textConverterCase") != null) {
        const value = JSON.parse(localStorage.getItem("textConverterCase"));
        form.case.value = value;
    }
    if (localStorage.getItem("textConverterInput") != null) {
        const value = JSON.parse(localStorage.getItem("textConverterInput"));
        form.input.value = value;
    }

    form.addEventListener("change", () => update(form));
    form.addEventListener("keypress", () => update(form));
    form.addEventListener("keydown", () => update(form));
    form.addEventListener("keyup", () => update(form));

    form.copy.addEventListener("click", function (event) {
        event.preventDefault();
        navigator.clipboard.writeText(form.output.value).then(
            function () {
                const message = document.getElementById("copiedMessage");
                window.requestAnimationFrame(function () {
                    message.classList.add("visible");
                    window.requestAnimationFrame(function () {
                        message.classList.remove("visible");
                    });
                });
            }
        );
    });
    update(form);
}

function update(form) {
    localStorage.setItem("textConverterFilter",    JSON.stringify(form.filter.value));
    localStorage.setItem("textConverterDirection", JSON.stringify(form.direction.value));
    localStorage.setItem("textConverterZalgo",     JSON.stringify(form.zalgo.value));
    localStorage.setItem("textConverterCase",      JSON.stringify(form["case"].value));
    localStorage.setItem("textConverterInput",     JSON.stringify(form.input.value));
    const filterName = form.filter.value;
    const filterFn = filterName === "" ? null : conversionFunctions[filterName];
    let text = form.input.value;
    text = text.normalize("NFD");
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const letterCase = form["case"].value;
    switch (letterCase) {
    case "lower":
        text = text.toLowerCase();
        break;
    case "upper":
        text = text.toUpperCase();
        break;
    case "spongebob":
        text = spongebob(text);
        break;
    }

    if (filterFn) {
        text = filterFn(text);
    }

    const zalgoAmount = Number(form.zalgo.value);
    if (zalgoAmount) {
        text = zalgo(text, zalgoAmount);
    }

    const direction = form.direction.value;
    if (direction === "backward") {
        text = backwards(text);
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    text = text.normalize("NFC");
    form.output.value = text;
}
