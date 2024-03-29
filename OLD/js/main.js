/*jshint esversion: 2020 */

var converterArray = [
    CIRCLED,
    COMIC,
    FAKE_CYRILLIC,
    FULLWIDTH,
    INVERTED,
    LADYBUG,
    MANGA,
    MATH_BOLD_FRAKTUR,
    MATH_BOLD_ITALIC,
    MATH_BOLD,
    MATH_DOUBLE_STRUCK,
    MATH_FRAKTUR,
    MATH_ITALIC,
    MATH_MONOSPACE,
    MATH_SANS_BOLD_ITALIC,
    MATH_SANS,
    MATH_SCRIPT_BOLD,
    MATH_SCRIPT,
    NEGATIVE_CIRCLED,
    NEGATIVE_SQUARED,
    PARENTHESIZED,
    REVERSED,
    ROCK_DOTS,
    SMALL_CAPITALS,
    SQUARED,
    TAI,
    YI,
];
var converterObject = {};
var converterNames = [];
(function () {
    var i, converter;
    for (i = 0; i < converterArray.length; i += 1) {
        converter = converterArray[i];
        converterObject[converter.name] = converter;
        converterNames.push(converter.name);
    }
    console.log(converterNames);
}());

var TextConverterPage2 = {
    init: function () {
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
            // input.value = value; /* FIXME */
        }
        this.update();
        this.onChangeConverter();
        this.populateConverters();
    },
    populateConverters: function () {
        var i;
        for (i = 0; i < converterNames.length; i += 1) {
            var converterName = converterNames[i];
            var converter = converterObject[converterName];
            var sample = convert(converter.name, converter);
            var option = document.createElement('option');
            option.value = converterName;
            option.text = converterName + ' - ' + sample;
            this.elements.converter.appendChild(option);
        }
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
        }
        var useZalgo = this.elements.zalgo.checked;
        var useBackwards = this.elements.backwards.checked;
        var useRot13 = this.elements.rot13.checked;
        var flags = {
            zalgo: useZalgo,
            backwards: useBackwards,
            rot13: useRot13,
        };
        this.elements.zalgoLevel.disabled = !useZalgo;
        var converterName = this.elements.converter.options[this.elements.converter.selectedIndex].value;
        var transformName = this.elements.transform.options[this.elements.transform.selectedIndex].value;
        var value = input.value;
        value = convertTransform(value, converterName, transformName, flags);
        this.elements.output.value = value;
        localStorage.setItem('textConverterInput', JSON.stringify(value));
    },
    onChangeConverter: function () {
        var flags = {
            zalgo: this.elements.zalgo.checked,
            backwards: this.elements.backwards.checked,
            rot13: this.elements.rot13.checked,
        };
        var placeholder = this.elements.input.getAttribute('placeholder');
        var converterName = this.elements.converter.options[this.elements.converter.selectedIndex].value;
        var transformName = this.elements.transform.options[this.elements.transform.selectedIndex].value;
        if (placeholder != null) {
            placeholder = convertTransform(placeholder, converterName, transformName, flags);
            this.elements.output.setAttribute('placeholder', placeholder);
        }
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

function convertTransform(value, converterName, transformName, flags) {
    var converter = converterObject[converterName];
    if (converter != null) {
        value = convert(value, converter);
    }
    if (flags && flags.rot13) {
        value = rot13(value);
    }
    if (flags && flags.backwards) {
        value = backwards(value);
    }
    if (transformName === 'spongebob') {
        value = spongebob(value);
    } else if (transformName === 'lowercase') {
        value = value.toLowerCase();
    } else if (transformName === 'uppercase') {
        value = value.toUpperCase();
    }
    if (flags && flags.zalgo) {
        value = zalgo(value);
    }
    return value;
}

// var TextConverterPage = {
//     isMemberOf: function (member, club) {
//         /*jshint -W088 */
//         var key;
//         for (key in club) {
//             if (club[key] === member) {
//                 return true;
//             }
//         }
//         return false;
//     },
//     sliceOne: function (string) {
//         if (!string.length) {
//             return undefined;
//         }
//         if (/^[\ud800-\udbff][\udc00-\udfff]/.test(string)) {
//             return [string.slice(0, 2), string.slice(2)];
//         }
//         if (/^[^\ud800-\udfff]/.test(string)) {
//             return [string.slice(0, 1), string.slice(1)];
//         }
//         return undefined;
//     },
//     converterHash: TextConverterHash,
//     converters: TextConverterArray,
//     convert: function (value, converter, flags) {
//         if (!converter) {
//             converter = this.converter;
//         }
//         if (flags && flags.rot13) {
//             value = this.transformRot13(value);
//         }
//         if (flags && flags.backwards) {
//             value = this.transformBackwards(value);
//         }
//         var transform = flags && flags.transform;
//         if (transform === 'spongebob') {
//             value = this.transformSpongebob(value);
//         } else if (transform === 'lowercase') {
//             value = value.toLowerCase();
//         } else if (transform === 'uppercase') {
//             value = value.toUpperCase();
//         }
//         if (converter) {
//             value = converter.convert(value);
//         }
//         if (flags && flags.zalgo) {
//             value = this.transformZalgo(value);
//         }
//         return value;
//     },
//     init: function () {
//         var convert;

//         this.elements = {};
//         this.elements.input = document.getElementById('input');
//         this.elements.output = document.getElementById('output');
//         this.elements.converter = document.getElementById('converter');
//         this.elements.copyButton = document.getElementById('copyButton');
//         this.elements.copiedIndicator = document.getElementById('copiedIndicator');
//         this.elements.zalgo = document.getElementById('zalgo');
//         this.elements.backwards = document.getElementById('backwards');
//         this.elements.rot13 = document.getElementById('rot13');
//         this.elements.transform = document.getElementById('transform');
//         this.elements.zalgoLevel = document.getElementById('zalgoLevel');

//         this.converters.forEach(function (converter) {
//             var option = document.createElement('option');
//             var sample = converter.convert(converter.name);
//             if (converter.isUcOnly()) {
//                 sample = converter.convert(converter.name.toUpperCase());
//             }
//         }.bind(this));

//         this.elements.converter.addEventListener('change', this.update.bind(this));
//         this.elements.converter.addEventListener('change', this.onChangeConverter.bind(this));
//         this.elements.input.addEventListener('keydown', this.update.bind(this));
//         this.elements.input.addEventListener('keypress', this.update.bind(this));
//         this.elements.input.addEventListener('keyup', this.update.bind(this));
//         this.elements.input.addEventListener('change', this.update.bind(this));

//         this.elements.zalgo.addEventListener('change', this.update.bind(this));
//         this.elements.backwards.addEventListener('change', this.update.bind(this));
//         this.elements.rot13.addEventListener('change', this.update.bind(this));
//         this.elements.transform.addEventListener('change', this.update.bind(this));
//         this.elements.zalgoLevel.addEventListener('change', this.update.bind(this));

//         this.elements.zalgo.addEventListener('change', this.onChangeConverter.bind(this));
//         this.elements.backwards.addEventListener('change', this.onChangeConverter.bind(this));
//         this.elements.rot13.addEventListener('change', this.onChangeConverter.bind(this));
//         this.elements.transform.addEventListener('change', this.onChangeConverter.bind(this));
//         this.elements.zalgoLevel.addEventListener('change', this.onChangeConverter.bind(this));

//         this.elements.copyButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             this.copy();
//         }.bind(this));

//         var value = JSON.parse(localStorage.getItem('textConverterInput'));
//         if (value != null) {
//             input.value = value;
//         }

//         this.update();
//         this.onChangeConverter();
//     },
//     update: function (event) {
//         if (event) {
//             if (event.key === 'Shift' || event.key === 'Control' || event.key === 'Meta' ||
//                 event.key === 'Tab' ||
//                 event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
//                 event.key === 'ArrowUp' || event.key === 'ArrowDown' ||
//                 event.key === 'Home' || event.key === 'End' ||
//                 event.key === 'PageUp' || event.key === 'PageDown') {
//                 return;
//             }
//         }

//         var zalgo = this.elements.zalgo.checked;
//         var backwards = this.elements.backwards.checked;
//         var rot13 = this.elements.rot13.checked;

//         this.elements.zalgoLevel.disabled = !zalgo;

//         this.converter = this.converterHash[this.elements.converter.options[this.elements.converter.selectedIndex].value];

//         var value = input.value;

//         localStorage.setItem('textConverterInput', JSON.stringify(value));

//         if (rot13) {
//             value = this.transformRot13(value);
//         }
//         if (backwards) {
//             value = this.transformBackwards(value);
//         }
//         var transform = this.elements.transform.options[this.elements.transform.selectedIndex].value;
//         if (transform === 'spongebob') {
//             value = this.transformSpongebob(value);
//         } else if (transform === 'lowercase') {
//             value = value.toLowerCase();
//         } else if (transform === 'uppercase') {
//             value = value.toUpperCase();
//         }
//         value = this.convert(value, null);
//         if (zalgo) {
//             value = this.transformZalgo(value);
//         }

//         this.elements.output.value = value;
//     },
//     onChangeConverter: function () {
//         var flags = {
//             zalgo: this.elements.zalgo.checked,
//             backwards: this.elements.backwards.checked,
//             rot13: this.elements.rot13.checked,
//             transform: this.elements.transform.options[this.elements.transform.selectedIndex].value,
//         };
//         var placeholder = this.elements.input.getAttribute('placeholder');
//         this.elements.output.setAttribute('placeholder', (placeholder != null) ? this.convert(placeholder, null, flags) : '');
//     },
//     copy: function () {
//         navigator.clipboard.writeText(this.elements.output.value).then(function () {
//             this.elements.copiedIndicator.classList.add('flash');
//             requestAnimationFrame(function () {
//                 this.elements.copiedIndicator.classList.remove('flash');
//             }.bind(this));
//         }.bind(this));
//     },
//     transformZalgo: function (string) {
//         if (!this.zalgo) {
//             this.zalgo = new Zalgo();
//         }
//         this.zalgo.max = this.zalgo.min = Number(this.elements.zalgoLevel.value);
//         return this.zalgo.convert(string);
//     },
//     transformBackwards: function (string) {
//         var result = '';
//         var pair;
//         while (string.length) {
//             pair = this.sliceOne(string);
//             result = pair[0] + result;
//             string = pair[1];
//         }
//         return result;
//     },
//     transformRot13: function (string) {
//         return string.replace(/[A-Za-z]/g, function (char) {
//             const code = char.charCodeAt(0);
//             if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) { // A-M or a-m
//                 return String.fromCharCode(code + 13);
//             }
//             if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) { // N-Z or n-z
//                 return String.fromCharCode(code - 13);
//             }
//             return code;
//         });
//     },
//     transformSpongebob: function (string) {
//         var flag = false;
//         return string.replace(/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]/g, function (c) {
//             var lc = c.toLowerCase();
//             var uc = c.toUpperCase();
//             if (lc === uc) {
//                 return c;
//             }
//             flag = !flag;
//             return flag ? lc : uc;
//         });
//     },
// };

window.addEventListener('load', function () {
    TextConverterPage2.init();
});
