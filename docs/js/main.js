/*jshint esversion: 2020 */
function toUpperCase(s) {
    return s.toUpperCase();
}
var TextConverter = {
    isMemberOf: function (member, club) {
        /*jshint -W088 */
        var key;
        for (key in club) {
            if (club[key] === member) {
                return true;
            }
        }
        return false;
    },
    sliceOne: function (string) {
        if (!string.length) {
            return undefined;
        }
        if (/^[\ud800-\udbff][\udc00-\udfff]/.test(string)) {
            return [string.slice(0, 2), string.slice(2)];
        }
        if (/^[^\ud800-\udfff]/.test(string)) {
            return [string.slice(0, 1), string.slice(1)];
        }
        return undefined;
    },
    converterHash: {},
    converters: [
        { name: 'None', label: 'Select a Converter...' },

        { name: 'Fullwidth',
          mappings: [ { from: [32, 126],
                        to: '　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～' } ] },

        { name: 'Math Fraktur',
          mappings: [ { uc: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ' }, { lc: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷' } ] },
        { name: 'Math Bold Fraktur',
          mappings: [ { uc: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅' }, { lc: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟' } ] },

        { name: 'Math Serif',
          mappings: [ { uc: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }, { lc: 'abcdefghijklmnopqrstuvwxyz' } ] },
        { name: 'Math Italic',
          mappings: [ { uc: '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍' }, { lc: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧' } ] },
        { name: 'Math Bold',
          mappings: [ { num: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗' }, { uc: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙' }, { lc: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳' } ] },
        { name: 'Math Bold Italic',
          mappings: [ { uc: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁' }, { lc: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛' } ] },

        { name: 'Math Sans',
          mappings: [ { uc: '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹' }, { lc: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓' }, { num: '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫' } ] },
        { name: 'Math Sans Bold',
          mappings: [ { uc: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭' }, { lc: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇' }, { num: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵' } ] },
        { name: 'Math Sans Italic',
          mappings: [ { uc: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡' }, { lc: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻' } ] },
        { name: 'Math Sans Bold Italic',
          mappings: [ { uc: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕' }, { lc: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯' } ] },

        { name: 'Math Script',
          mappings: [ { uc: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵' }, { lc: '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏' } ] },
        { name: 'Math Bold Script',
          mappings: [ { uc: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩' }, { lc: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃' } ] },

        { name: 'Math Double-Struck',
          mappings: [ { uc: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ' }, { lc: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫' }, { num: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡' } ] },
        { name: 'Math Monospace',
          mappings: [ { uc: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉' }, { lc: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣' }, { num: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿' } ] },

        { name: 'Parenthesized',
          mappings: [ { uc: '🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩' }, { lc: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵' },
                      { from: ['1', '9'], to: '⑴⑵⑶⑷⑸⑹⑺⑻⑼' } ] },

        { name: 'Circled',
          mappings: [ { uc: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ' }, { lc: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ' }, { num: '⓪①②③④⑤⑥⑦⑧⑨' },
                      { from: '*+-./=|\\><', to: '⊛⊕⊖⊙⊘⊜⦶⦸⧀⧁' } ] },

        { name: 'Negative Circled',
          preMapping: toUpperCase,
          mappings: [ { num: '⓿❶❷❸❹❺❻❼❽❾' }, { uc: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩' } ] },

        { name: 'Squared', preMapping: toUpperCase,
          mappings: [ { from: '+-./\\*', to: '⊞⊟⊡⧄⧅⧆' }, { uc: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉' } ] },
        { name: 'Negative Squared', preMapping: toUpperCase,
          mappings: [ { uc: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉' } ] },

        { name: 'Comic', preMapping: toUpperCase, mappings: [ { uc: 'ᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ' } ] },
        { name: 'Manga', preMapping: toUpperCase, mappings: [ { uc: '卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙' } ] },
        { name: 'Ladybug', preMapping: toUpperCase, mappings: [ { uc: 'ꍏꌃꏳꀷꏂꎇꁅꀍꀤ꒻ꀘ꒒ꎭꈤꂦᖘꆰꋪꌚ꓄ꀎ꒦ꅐꉧꌩꁴ' } ] },
        { name: 'Tai', preMapping: toUpperCase, mappings: [ { uc: 'ꪖ᥇ᥴᦔꫀᠻᧁꫝ꠸꠹ᛕꪶꪑꪀꪮρꪇ᥅ᦓꪻꪊꪜ᭙᥊ꪗƺ' } ] },
        { name: 'Yi', preMapping: toUpperCase, mappings: [ { uc: 'ꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴ' } ] },

        { name: 'Fake Cyrillic', mappings: [ { uc: 'ДБҀↁЄFБНІЈЌLМИФРQЯЅГЦVЩЖЧZ' }, { lc: 'аъсↁэfБЂіјкlмиорqѓѕтцvшхЎz' } ] },

        { name: 'Inverted', mappings: [ { from: [33, 126],
                                          to: '¡"#$%⅋,()*+‘-./0123456789:;<=>¿@ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇn𐌡ʍxʎz[\\]^_`ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz{|}~' } ] },
        { name: 'Reversed', mappings: [ { from: [33, 126],
                                          to: '!"#$%&\')(*+,-.\\0߁23456789:⁏>=<⸮@AdↃbƎꟻGHIJK⅃MᴎOꟼpᴙꙄTUVWXYZ]/[^_`AdↄbɘꟻgHijklmᴎoqpᴙꙅTUvwxYz}|{∽' } ] },

        { name: 'Small Capitals', mappings: [ { lc: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀꜱᴛᴜᴠᴡʏᴢ' } ] },
        { name: 'Rock Dots', mappings: [ { from: 'AEIOUaeiouyYHhWwXxt-', to: 'ÄËÏÖÜäëïöüÿŸḦḧẄẅẌẍẗ⸚' } ] },
        // Tʏᴘᴇ ᴏʀ ᴘᴀꜱᴛᴇ ʏᴏᴜʀ ᴄᴏɴᴛᴇɴᴛ ʜᴇʀᴇ
    ],
    mapRange: function (map, low, high, to) {
        var i;
        if (typeof low === 'string') {
            low = low.charCodeAt(0);
        }
        if (typeof high === 'string') {
            high = high.charCodeAt(0);
        }
        var pair;
        for (i = low; i <= high; i += 1) {
            pair = this.sliceOne(to);
            if (!pair) { break; }
            map[String.fromCharCode(i)] = pair[0];
            to = pair[1];
        }
    },
    mapStrings: function (map, from, to) {
        var pairFrom;
        var pairTo;
        while (from.length && to.length) {
            pairFrom = this.sliceOne(from);
            pairTo = this.sliceOne(to);
            if (!pairFrom || !pairTo) { break; }
            map[pairFrom[0]] = pairTo[0];
            from = pairFrom[1];
            to = pairTo[1];
        }
    },
    convert: function (value, converter, flags) {
        if (flags && flags.rot13) {
            value = this.transformRot13(value);
        }
        if (flags && flags.backwards) {
            value = this.transformBackwards(value);
        }
        var transform = flags && flags.transform;
        if (transform === 'spongebob') {
            value = this.transformSpongebob(value);
        } else if (transform === 'lowercase') {
            value = value.toLowerCase();
        } else if (transform === 'uppercase') {
            value = value.toUpperCase();
        }
        value = this.convertConverter(value, converter);
        if (flags && flags.zalgo) {
            value = this.transformZalgo(value);
        }
        return value;
    },
    convertConverter: function (string, converter) {
        var pair;
        if (!converter) {
            converter = this.converter;
        }
        if (converter.preMapping) {
            if (converter.preMapping instanceof Function) {
                string = converter.preMapping.call(null, string);
            }
        }
        var result;
        if (converter.map) {
            result = '';
            while (string.length) {
                pair = this.sliceOne(string);
                if (!pair) { break; }
                if (pair[0] in converter.map) {
                    result += converter.map[pair[0]];
                } else {
                    result += pair[0];
                }
                string = pair[1];
            }
            string = result;
        }
        return string;
    },
    readyConverter: function (converter) {
        var map = {};
        if (!converter.mappings) {
            return;
        }
        converter.mappings.forEach(function (mapping) {
            if (typeof mapping.uc === 'string') {
                this.mapRange(map, 'A', 'Z', mapping.uc);
            }
            if (typeof mapping.lc === 'string') {
                this.mapRange(map, 'a', 'z', mapping.lc);
            }
            if (typeof mapping.num === 'string') {
                this.mapRange(map, '0', '9', mapping.num);
            }
            if (mapping.from instanceof Array && typeof mapping.to === 'string') {
                this.mapRange(map, mapping.from[0], mapping.from[1], mapping.to);
            }
            if (typeof mapping.from === 'string' && typeof mapping.to === 'string') {
                this.mapStrings(map, mapping.from, mapping.to);
            }
        }.bind(this));
        converter.map = map;
    },
    init: function () {
        var convert;

        this.elements = {};
        this.elements.input = document.getElementById('input');
        this.elements.output = document.getElementById('output');
        this.elements.converter = document.getElementById('converter');
        this.elements.copyButton = document.getElementById('copyButton');
        this.elements.copiedIndicator = document.getElementById('copiedIndicator');
        this.elements.zalgo = document.getElementById('zalgo');
        this.elements.backwards = document.getElementById('backwards');
        this.elements.rot13 = document.getElementById('rot13');
        this.elements.transform = document.getElementById('transform');
        this.elements.zalgoLevel = document.getElementById('zalgoLevel');

        this.converters.forEach(function (converter) {
            this.converterHash[converter.name] = converter;
            this.readyConverter(converter);
            var option = document.createElement('option');
            option.value = converter.name;
            if (converter.label) {
                option.text = converter.label;
            } else {
                option.text = converter.name + ' - ' + this.convert(converter.name, converter);
            }
            this.elements.converter.appendChild(option);
        }.bind(this));

        this.elements.converter.addEventListener('change', this.update.bind(this));
        this.elements.converter.addEventListener('change', this.onChangeConverter.bind(this));
        this.elements.input.addEventListener('keydown', this.update.bind(this));
        this.elements.input.addEventListener('keypress', this.update.bind(this));
        this.elements.input.addEventListener('keyup', this.update.bind(this));
        this.elements.input.addEventListener('change', this.update.bind(this));

        this.elements.zalgo.addEventListener('change', this.update.bind(this));
        this.elements.backwards.addEventListener('change', this.update.bind(this));
        this.elements.rot13.addEventListener('change', this.update.bind(this));
        this.elements.transform.addEventListener('change', this.update.bind(this));
        this.elements.zalgoLevel.addEventListener('change', this.update.bind(this));

        this.elements.zalgo.addEventListener('change', this.onChangeConverter.bind(this));
        this.elements.backwards.addEventListener('change', this.onChangeConverter.bind(this));
        this.elements.rot13.addEventListener('change', this.onChangeConverter.bind(this));
        this.elements.transform.addEventListener('change', this.onChangeConverter.bind(this));
        this.elements.zalgoLevel.addEventListener('change', this.onChangeConverter.bind(this));

        this.elements.copyButton.addEventListener('click', function (event) {
            event.preventDefault();
            this.copy();
        }.bind(this));

        var value = JSON.parse(localStorage.getItem('textConverterInput'));
        if (value != null) {
            input.value = value;
        }

        this.update();
        this.onChangeConverter();
    },
    update: function (event) {
        if (event) {
            if (event.key === 'Shift' || event.key === 'Control' || event.key === 'Meta' ||
                event.key === 'Tab' ||
                event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
                event.key === 'ArrowUp' || event.key === 'ArrowDown' ||
                event.key === 'Home' || event.key === 'End' ||
                event.key === 'PageUp' || event.key === 'PageDown') {
                return;
            }
            // if (!(event.key && (event.key === 'Backspace' || event.key.length === 1))) {
            //     console.log(event);
            // }
        }

        var zalgo = this.elements.zalgo.checked;
        var backwards = this.elements.backwards.checked;
        var rot13 = this.elements.rot13.checked;

        this.elements.zalgoLevel.disabled = !zalgo;

        this.converter = this.converterHash[this.elements.converter.options[this.elements.converter.selectedIndex].value];

        var value = input.value;

        localStorage.setItem('textConverterInput', JSON.stringify(value));

        if (rot13) {
            value = this.transformRot13(value);
        }
        if (backwards) {
            value = this.transformBackwards(value);
        }
        var transform = this.elements.transform.options[this.elements.transform.selectedIndex].value;
        if (transform === 'spongebob') {
            value = this.transformSpongebob(value);
        } else if (transform === 'lowercase') {
            value = value.toLowerCase();
        } else if (transform === 'uppercase') {
            value = value.toUpperCase();
        }
        value = this.convert(value, null);
        if (zalgo) {
            value = this.transformZalgo(value);
        }

        this.elements.output.value = value;
    },
    onChangeConverter: function () {
        var flags = {
            zalgo: this.elements.zalgo.checked,
            backwards: this.elements.backwards.checked,
            rot13: this.elements.rot13.checked,
            transform: this.elements.transform.options[this.elements.transform.selectedIndex].value,
        };
        var placeholder = this.elements.input.getAttribute('placeholder');
        this.elements.output.setAttribute('placeholder', (placeholder != null) ? this.convert(placeholder, null, flags) : '');
    },
    copy: function () {
        navigator.clipboard.writeText(this.elements.output.value).then(function () {
            this.elements.copiedIndicator.classList.add('flash');
            requestAnimationFrame(function () {
                this.elements.copiedIndicator.classList.remove('flash');
            }.bind(this));
        }.bind(this));
    },
    transformZalgo: function (string) {
        if (!this.zalgo) {
            this.zalgo = new Zalgo();
        }
        this.zalgo.max = this.zalgo.min = Number(this.elements.zalgoLevel.value);
        return this.zalgo.convert(string);
    },
    transformBackwards: function (string) {
        var result = '';
        var pair;
        while (string.length) {
            pair = this.sliceOne(string);
            result = pair[0] + result;
            string = pair[1];
        }
        return result;
    },
    transformRot13: function (string) {
        return string.replace(/[A-Za-z]/g, function (char) {
            const code = char.charCodeAt(0);
            if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) { // A-M or a-m
                return String.fromCharCode(code + 13);
            }
            if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) { // N-Z or n-z
                return String.fromCharCode(code - 13);
            }
            return code;
        });
    },
    transformSpongebob: function (string) {
        var flag = false;
        return string.replace(/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]/g, function (c) {
            var lc = c.toLowerCase();
            var uc = c.toUpperCase();
            if (lc === uc) {
                return c;
            }
            flag = !flag;
            return flag ? lc : uc;
        });
    },
};

window.addEventListener('load', TextConverter.init.bind(TextConverter));
