'use strict';

const YI_UC = Array.from(
    '\ua2ec\ua0f3\ua254\ua4af\ua3c2\ua2b0\ua34c\ua05d' +
        '\ua490\ua4bb\ua018\ua492\ua0b5\ua2ca\ua132\ua263' +
        '\ua1b0\ua2ea\ua1d9\ua4c4\ua4a4\ua4a6\ua150\ua267\ua326\ua074'
);

const YI = {
    name: 'Yi',
    case: 'upper',
    uc: YI_UC,
};

if (typeof module !== 'undefined') {
    module.exports = {
        YI,
    };
}
