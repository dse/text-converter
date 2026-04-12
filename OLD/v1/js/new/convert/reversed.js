'use strict';

const REVERSED_33_126 = '!"#$%&\'' +
      ')(*+,-.\\' +
      '0\u07c1234567' +
      '89:\u204f>=<\u2e2e' +
      '@Ad\u2183b\u018e\ua7fbG' +
      'HIJK\u2143M\u1d0eO' +
      '\ua7fcp\u1d19\ua644TUVW' +
      'XYZ]/[^_' +
      '`Ad\u2184b\u0258\ua7fbg' +
      'Hijklm\u1d0eo' +
      'qp\u1d19\ua645TUvw' +
      'xYz}|{\u223d';

const REVERSED = {
    name: 'Reversed',
    from: [33, 126],
    to: REVERSED_33_126,
};

if (typeof module !== 'undefined') {
    module.exports = { REVERSED };
}
