# Unicode

## Terminology

-   **ASCII** is the set of 7-bit coded characters from U+0000 to
    U+007F.
    
-   The **ASCII digits** or **European digits** are the characters
    U+0030 to U+0039.

-   The **BMP** or **Basic Multilingual Plane** or **Plane 0** is the
    first range of 65,536 code points, from U+0000 to U+FFFF.

-   A **Plane** is one of the seventeen sequences of 65,536 code
    points that constitute Unicode.  The planes are numbered from 0 to
    16.

-   A **grapheme cluster** is a grapheme base character followed by
    zero or more nonspacing marks.

-   A **high surrogate** is a code unit from U+D800 to U+DBFF.

-   A **low surrogate** is a code unit from U+DC00 to U+DFFF.

-   A **surrogate pair** is a high surrogate followed by a low
    surrogate.  It is used only in UTF-16, to represent a Unicode
    codepoint from U+10000 to U+10FFFF.

-   **UTF-16** is a multibyte encoding representing each Unicode
    character with two or four bytes.  The codepoints from U+0000 to
    U+D7FF and from U+E000 to U+FFFF are represented in two bytes, and
    the code points in Planes 1 through 16 are represented in four
    bytes, using a surrogate pair.

-   A **code unit** is a minimal bit combination representing a unit
    of encoded text.  In UTF-8, a code unit is 8 bits.  In UTF-16, a
    code unit is 16 bits; a high surrogate or low surrogate is a code
    unit.
