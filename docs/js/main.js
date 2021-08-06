/*jshint esversion: 2020 */
var TextConverter = {
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
        {
            name: 'None',
        },
        {
            name: 'Fullwidth',
            mappings: [
                { from: [32, 126],
                  to: '　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～' }
            ]
        },
        {
            name: 'Math Bold',
            mappings: [
                { num: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗' },
                { uc: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙' },
                { lc: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳' },
            ]
        },
        {
            name: 'Math Bold Fraktur',
            mappings: [
                { uc: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅' },
                { lc: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟' }
            ]
        },
        {
            name: 'Math Bold Italic',
            mappings: [
                { uc: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁' },
                { lc: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛' }
            ]
        },
        {
            name: 'Math Bold Script',
            mappings: [
                { uc: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩' },
                { lc: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃' }
            ]
        }
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
    convert: function (string, converter) {
        if (!converter.map) {
            return string;
        }
        var result = '';
        var pair;
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
        return result;
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
        this.converters.forEach(function (converter) {
            this.converterHash[converter.name] = converter;
            this.readyConverter(converter);
            var option = document.createElement('option');
            option.value = converter.name;
            option.text = converter.name + ' - ' + this.convert(converter.name, converter);
            this.elements.converter.appendChild(option);
        }.bind(this));
        converter.addEventListener('change', this.update.bind(this));
        input.addEventListener('keydown', this.update.bind(this));
        input.addEventListener('keypress', this.update.bind(this));
        input.addEventListener('keyup', this.update.bind(this));
        input.addEventListener('change', this.update.bind(this));
        var value = JSON.parse(localStorage.getItem('textConverterInput'));
        if (value != null) {
            input.value = value;
        }
        this.update();
        this.elements.copyButton.addEventListener('click', function (event) {
            event.preventDefault();
            this.copy();
        }.bind(this));
    },
    update: function (event) {
        this.converter = this.converterHash[this.elements.converter.options[this.elements.converter.selectedIndex].value];
        var value = input.value;
        localStorage.setItem('textConverterInput', JSON.stringify(value));
        this.elements.output.value = this.convert(value, this.converter);
    },
    copy: function () {
        navigator.clipboard.writeText(this.elements.output.value).then(function () {
            this.elements.copiedIndicator.classList.add('flash');
            requestAnimationFrame(function () {
                this.elements.copiedIndicator.classList.remove('flash');
            }.bind(this));
        }.bind(this));
    },
};

window.addEventListener('load', TextConverter.init.bind(TextConverter));
