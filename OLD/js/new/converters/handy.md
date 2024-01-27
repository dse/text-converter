# handy functions

UTF-16

-   "\ud83d\udca9" is the pile of poo or U+1F4A9
    -   .charCodeAt(0) === 0xd83d
    -   .charCodeAt(1) === 0xdca9
    -   .codePointAt(0) === 0x1f4a9
    -   .codePointAt(1) === 0xdca9
    -   '\u{1f4a9}' === '\ud83d\udca9'
-   /rx/g matches char codes
    -   low and high surrogates are separate
-   /rx/gu matches code points
    -   low and high surrogate pairs become single characters

Array.from()

-   splits strings by codepoint
    -   Array.from('\ud83d\udca9') => ['\u{1f4a9}']

`String.prototype.normalize("NFD")`

-   first argument is the string
-   second argument is one of the following:
    -   "NFC" (default)
        -   canonical decomposition then canonical composition
    -   "NFD"
        -   canonical decomposition
    -   "NFKC"
        -   compatibility decomposition then canonical composition
    -   "NFKD"
        -   compatibility decomposition
-   examples
    -   "\u00f1" is the composed form
    -   "\u006e\u0303" is the decomposed form

`Array.from()`

