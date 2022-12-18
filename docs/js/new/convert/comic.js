'use strict';

const COMIC_UC = Array.from(
    '\u15e9\u15f7\u1455\u15ea\u15f4\u15b4\u161c\u157c' +
        'I\u148dK\u14aa\u15f0\u144eO\u146d' +
        '\u146b\u1587\u1515T\u144c\u142f\u15ef\u166d' +
        'Y\u1614',
);

const COMIC = {
    name: 'Comic',
    case: 'upper',
    uc: COMIC_UC
};

if (typeof module !== 'undefined') {
    module.exports = {
        COMIC,
    };
}
