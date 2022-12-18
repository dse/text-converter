'use strict';

const MATH_BOLD_FRAKTUR_UC = Array.from(
    '\ud835\udd6c\ud835\udd6d\ud835\udd6e\ud835\udd6f\ud835\udd70\ud835\udd71\ud835\udd72\ud835\udd73' +
        '\ud835\udd74\ud835\udd75\ud835\udd76\ud835\udd77\ud835\udd78\ud835\udd79\ud835\udd7a\ud835\udd7b' +
        '\ud835\udd7c\ud835\udd7d\ud835\udd7e\ud835\udd7f\ud835\udd80\ud835\udd81\ud835\udd82\ud835\udd83' +
        '\ud835\udd84\ud835\udd85'
);
const MATH_BOLD_FRAKTUR_LC = Array.from(
    '\ud835\udd86\ud835\udd87\ud835\udd88\ud835\udd89\ud835\udd8a\ud835\udd8b\ud835\udd8c\ud835\udd8d' +
        '\ud835\udd8e\ud835\udd8f\ud835\udd90\ud835\udd91\ud835\udd92\ud835\udd93\ud835\udd94\ud835\udd95' +
        '\ud835\udd96\ud835\udd97\ud835\udd98\ud835\udd99\ud835\udd9a\ud835\udd9b\ud835\udd9c\ud835\udd9d' +
        '\ud835\udd9e\ud835\udd9f'
);

const MATH_BOLD_FRAKTUR = {
    name: 'Math Bold Fraktur',
    uc: MATH_BOLD_FRAKTUR_UC,
    lc: MATH_BOLD_FRAKTUR_LC,
};

if (typeof module !== 'undefined') {
    module.exports = {
        MATH_BOLD_FRAKTUR,
    };
}
