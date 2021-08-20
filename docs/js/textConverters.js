var TextConverterArray = [];
var TextConverterHash = {};

function addTextConverter(tc) {
    TextConverterArray.push(tc);
    TextConverterHash[tc.name] = tc;
}

function toUpperCase(s) {
    return s.toUpperCase();
}

addTextConverter(new TextConverter({
    name: 'Fullwidth',
    mappings: [
        {
            from: [32, 126],
            to: '　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～'
        }
    ]
}));
addTextConverter(new TextConverter({
    name: 'Math Fraktur',
    mappings: [
        { uc: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ' },
        { lc: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷' }
    ]
}));
addTextConverter(new TextConverter({
    name: 'Math Bold Fraktur',
    mappings: [
        { uc: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅' },
        { lc: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟' }
    ]
}));
addTextConverter(new TextConverter({
    name: 'Math Serif',
    mappings: [ { uc: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }, { lc: 'abcdefghijklmnopqrstuvwxyz' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Serif',
    mappings: [ { uc: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }, { lc: 'abcdefghijklmnopqrstuvwxyz' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Italic',
    mappings: [ { uc: '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍' }, { lc: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Bold',
    mappings: [ { num: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗' }, { uc: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙' }, { lc: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Bold Italic',
    mappings: [ { uc: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁' }, { lc: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Sans',
    mappings: [ { uc: '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹' }, { lc: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓' }, { num: '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Sans Bold',
    mappings: [ { uc: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭' }, { lc: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇' }, { num: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Sans Italic',
    mappings: [ { uc: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡' }, { lc: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Sans Bold Italic',
    mappings: [ { uc: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕' }, { lc: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Script',
    mappings: [ { uc: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵' }, { lc: '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Bold Script',
    mappings: [ { uc: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩' }, { lc: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Double-Struck',
    mappings: [ { uc: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ' }, { lc: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫' }, { num: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡' } ]
}));
addTextConverter(new TextConverter({
    name: 'Math Monospace',
    mappings: [ { uc: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉' }, { lc: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣' }, { num: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿' } ]
}));
addTextConverter(new TextConverter({
    name: 'Parenthesized',
    mappings: [ { uc: '🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩' }, { lc: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵' },
                { from: ['1', '9'], to: '⑴⑵⑶⑷⑸⑹⑺⑻⑼' } ]
}));
addTextConverter(new TextConverter({
    name: 'Circled',
    mappings: [ { uc: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ' }, { lc: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ' }, { num: '⓪①②③④⑤⑥⑦⑧⑨' },
                { from: '*+-./=|\\><', to: '⊛⊕⊖⊙⊘⊜⦶⦸⧀⧁' } ]
}));
addTextConverter(new TextConverter({
    name: 'Negative Circled',
    preMapping: toUpperCase,
    mappings: [ { num: '⓿❶❷❸❹❺❻❼❽❾' }, { uc: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩' } ]
}));
addTextConverter(new TextConverter({
    name: 'Squared', preMapping: toUpperCase,
    mappings: [ { from: '+-./\\*', to: '⊞⊟⊡⧄⧅⧆' }, { uc: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉' } ]
}));
addTextConverter(new TextConverter({
    name: 'Negative Squared', preMapping: toUpperCase,
    mappings: [ { uc: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉' } ]
}));
addTextConverter(new TextConverter({
    name: 'Comic', preMapping: toUpperCase, mappings: [ { uc: 'ᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ' } ]
}));
addTextConverter(new TextConverter({
    name: 'Manga', preMapping: toUpperCase, mappings: [ { uc: '卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙' } ]
}));
addTextConverter(new TextConverter({
    name: 'Ladybug', preMapping: toUpperCase, mappings: [ { uc: 'ꍏꌃꏳꀷꏂꎇꁅꀍꀤ꒻ꀘ꒒ꎭꈤꂦᖘꆰꋪꌚ꓄ꀎ꒦ꅐꉧꌩꁴ' } ]
}));
addTextConverter(new TextConverter({
    name: 'Tai', preMapping: toUpperCase, mappings: [ { uc: 'ꪖ᥇ᥴᦔꫀᠻᧁꫝ꠸꠹ᛕꪶꪑꪀꪮρꪇ᥅ᦓꪻꪊꪜ᭙᥊ꪗƺ' } ]
}));
addTextConverter(new TextConverter({
    name: 'Yi', preMapping: toUpperCase, mappings: [ { uc: 'ꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴ' } ]
}));
addTextConverter(new TextConverter({
    name: 'Fake Cyrillic', mappings: [ { uc: 'ДБҀↁЄFБНІЈЌLМИФРQЯЅГЦVЩЖЧZ' }, { lc: 'аъсↁэfБЂіјкlмиорqѓѕтцvшхЎz' } ]
}));
addTextConverter(new TextConverter({
    name: 'Inverted', mappings: [ { from: [33, 126],
                                    to: '¡"#$%⅋,()*+‘-./0123456789:;<=>¿@ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇn𐌡ʍxʎz[\\]^_`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz{|}~' } ]
}));
addTextConverter(new TextConverter({
    name: 'Reversed', mappings: [ { from: [33, 126],
                                    to: '!"#$%&\')(*+,-.\\0߁23456789:⁏>=<⸮@AdↃbƎꟻGHIJK⅃MᴎOꟼpᴙꙄTUVWXYZ]/[^_`AdↄbɘꟻgHijklmᴎoqpᴙꙅTUvwxYz}|{∽' } ]
}));
addTextConverter(new TextConverter({
    name: 'Small Capitals', mappings: [ { lc: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀꜱᴛᴜᴠᴡʏᴢ' } ]
}));
addTextConverter(new TextConverter({
    name: 'Rock Dots', mappings: [ { from: 'AEIOUaeiouyYHhWwXxt-', to: 'ÄËÏÖÜäëïöüÿŸḦḧẄẅẌẍẗ⸚' } ]
}));
