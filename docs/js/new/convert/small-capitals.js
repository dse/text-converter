'use strict';

const SMALL_CAPITALS_LC = Array.from(
    '\u1d00\u0299\u1d04\u1d05\u1d07\ua730\u0262\u029c\u026a\u1d0a\u1d0b\u029f\u1d0d\u0274\u1d0f\u1d18\ua7af\u0280\ua731\u1d1b\u1d1c\u1d20\u1d21x\u028f\u1d22'
);

const SMALL_CAPITALS = {
    name: 'Small Capitals',
    lc: SMALL_CAPITALS_LC,
};

if (typeof module !== 'undefined') {
    module.exports = { SMALL_CAPITALS };
}
