'use strict';

const TAI_UC = Array.from(
    '\uaa96\u1947\u1974\u1994\uaac0\u183b\u19c1\uaadd' +
        '\ua838\ua839\u16d5\uaab6\uaa91\uaa80\uaaae\u03c1' +
        '\uaa87\u1945\u1993\uaabb\uaa8a\uaa9c\u1b59\u194a\uaa97\u01ba'
);

const TAI = {
    name: 'Tai',
    case: 'upper',
    uc: TAI_UC,
};

if (typeof module !== 'undefined') {
    module.exports = {
        TAI,
    };
}
