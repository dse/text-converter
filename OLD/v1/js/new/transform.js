'use strict';
function transform(value, transformName, flags) {
    if (flags.rot13) {
        value = rot13(value);
    }
    if (flags.backwards) {
        value = backwards(value);
    }
    if (transform === 'spongebob') {
        value = spongebob(value);
    } else if (transform === 'lowercase') {
        value = value.toLowerCase();
    } else if (transform === 'uppercase') {
        value = value.toUpperCase();
    }
}
