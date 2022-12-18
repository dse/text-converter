'use strict';

const ROCK_DOTS_FROM = Array.from(
    'AEIOUaeiouyYHhWwXxt-'
);
const ROCK_DOTS_TO = Array.from(
    '\u00c4\u00cb\u00cf\u00d6\u00dc\u00e4\u00eb\u00ef\u00f6\u00fc\u00ff\u0178\u1e26\u1e27\u1e84\u1e85\u1e8c\u1e8d\u1e97\u2e1a'
);

const ROCK_DOTS = {
    name: 'Rock Dots',
    map: { [ROCK_DOTS_FROM]: ROCK_DOTS_TO },
};

if (typeof module !== 'undefined') {
    module.exports = { ROCK_DOTS };
}
