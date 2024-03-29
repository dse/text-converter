/*jshint esversion: 11 */

const converters = {
    'Full Width': {
        asciiPrint: '\u3000\uff01\uff02\uff03\uff04\uff05\uff06\uff07\uff08\uff09\uff0a\uff0b\uff0c\uff0d\uff0e\uff0f\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff1a\uff1b\uff1c\uff1d\uff1e\uff1f\uff20\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a\uff3b\uff3c\uff3d\uff3e\uff3f\uff40\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff5b\uff5c\uff5d\uff5e',
    },
    'Math Fraktur': {
        uc: '\ud835\udd04\ud835\udd05\u212d\ud835\udd07\ud835\udd08\ud835\udd09\ud835\udd0a\u210c\u2111\ud835\udd0d\ud835\udd0e\ud835\udd0f\ud835\udd10\ud835\udd11\ud835\udd12\ud835\udd13\ud835\udd14\u211c\ud835\udd16\ud835\udd17\ud835\udd18\ud835\udd19\ud835\udd1a\ud835\udd1b\ud835\udd1c\u2128',
        lc: '\ud835\udd1e\ud835\udd1f\ud835\udd20\ud835\udd21\ud835\udd22\ud835\udd23\ud835\udd24\ud835\udd25\ud835\udd26\ud835\udd27\ud835\udd28\ud835\udd29\ud835\udd2a\ud835\udd2b\ud835\udd2c\ud835\udd2d\ud835\udd2e\ud835\udd2f\ud835\udd30\ud835\udd31\ud835\udd32\ud835\udd33\ud835\udd34\ud835\udd35\ud835\udd36\ud835\udd37',
    },
    'Math Bold Fraktur': {
        uc: '\ud835\udd6c\ud835\udd6d\ud835\udd6e\ud835\udd6f\ud835\udd70\ud835\udd71\ud835\udd72\ud835\udd73\ud835\udd74\ud835\udd75\ud835\udd76\ud835\udd77\ud835\udd78\ud835\udd79\ud835\udd7a\ud835\udd7b\ud835\udd7c\ud835\udd7d\ud835\udd7e\ud835\udd7f\ud835\udd80\ud835\udd81\ud835\udd82\ud835\udd83\ud835\udd84\ud835\udd85',
        lc: '\ud835\udd86\ud835\udd87\ud835\udd88\ud835\udd89\ud835\udd8a\ud835\udd8b\ud835\udd8c\ud835\udd8d\ud835\udd8e\ud835\udd8f\ud835\udd90\ud835\udd91\ud835\udd92\ud835\udd93\ud835\udd94\ud835\udd95\ud835\udd96\ud835\udd97\ud835\udd98\ud835\udd99\ud835\udd9a\ud835\udd9b\ud835\udd9c\ud835\udd9d\ud835\udd9e\ud835\udd9f',
    },
    'Math Italic': {
        uc: '\ud835\udc34\ud835\udc35\ud835\udc36\ud835\udc37\ud835\udc38\ud835\udc39\ud835\udc3a\ud835\udc3b\ud835\udc3c\ud835\udc3d\ud835\udc3e\ud835\udc3f\ud835\udc40\ud835\udc41\ud835\udc42\ud835\udc43\ud835\udc44\ud835\udc45\ud835\udc46\ud835\udc47\ud835\udc48\ud835\udc49\ud835\udc4a\ud835\udc4b\ud835\udc4c\ud835\udc4d',
        lc: '\ud835\udc4e\ud835\udc4f\ud835\udc50\ud835\udc51\ud835\udc52\ud835\udc53\ud835\udc54\u210e\ud835\udc56\ud835\udc57\ud835\udc58\ud835\udc59\ud835\udc5a\ud835\udc5b\ud835\udc5c\ud835\udc5d\ud835\udc5e\ud835\udc5f\ud835\udc60\ud835\udc61\ud835\udc62\ud835\udc63\ud835\udc64\ud835\udc65\ud835\udc66\ud835\udc67',
    },
    'Math Bold': {
        num: '\ud835\udfce\ud835\udfcf\ud835\udfd0\ud835\udfd1\ud835\udfd2\ud835\udfd3\ud835\udfd4\ud835\udfd5\ud835\udfd6\ud835\udfd7',
        uc: '\ud835\udc00\ud835\udc01\ud835\udc02\ud835\udc03\ud835\udc04\ud835\udc05\ud835\udc06\ud835\udc07\ud835\udc08\ud835\udc09\ud835\udc0a\ud835\udc0b\ud835\udc0c\ud835\udc0d\ud835\udc0e\ud835\udc0f\ud835\udc10\ud835\udc11\ud835\udc12\ud835\udc13\ud835\udc14\ud835\udc15\ud835\udc16\ud835\udc17\ud835\udc18\ud835\udc19',
        lc: '\ud835\udc1a\ud835\udc1b\ud835\udc1c\ud835\udc1d\ud835\udc1e\ud835\udc1f\ud835\udc20\ud835\udc21\ud835\udc22\ud835\udc23\ud835\udc24\ud835\udc25\ud835\udc26\ud835\udc27\ud835\udc28\ud835\udc29\ud835\udc2a\ud835\udc2b\ud835\udc2c\ud835\udc2d\ud835\udc2e\ud835\udc2f\ud835\udc30\ud835\udc31\ud835\udc32\ud835\udc33',
    },
    'Math Bold Italic': {
        uc: '\ud835\udc68\ud835\udc69\ud835\udc6a\ud835\udc6b\ud835\udc6c\ud835\udc6d\ud835\udc6e\ud835\udc6f\ud835\udc70\ud835\udc71\ud835\udc72\ud835\udc73\ud835\udc74\ud835\udc75\ud835\udc76\ud835\udc77\ud835\udc78\ud835\udc79\ud835\udc7a\ud835\udc7b\ud835\udc7c\ud835\udc7d\ud835\udc7e\ud835\udc7f\ud835\udc80\ud835\udc81',
        lc: '\ud835\udc82\ud835\udc83\ud835\udc84\ud835\udc85\ud835\udc86\ud835\udc87\ud835\udc88\ud835\udc89\ud835\udc8a\ud835\udc8b\ud835\udc8c\ud835\udc8d\ud835\udc8e\ud835\udc8f\ud835\udc90\ud835\udc91\ud835\udc92\ud835\udc93\ud835\udc94\ud835\udc95\ud835\udc96\ud835\udc97\ud835\udc98\ud835\udc99\ud835\udc9a\ud835\udc9b',
    },
    'Math Sans': {
        num: '\ud835\udfe2\ud835\udfe3\ud835\udfe4\ud835\udfe5\ud835\udfe6\ud835\udfe7\ud835\udfe8\ud835\udfe9\ud835\udfea\ud835\udfeb',
        uc: '\ud835\udda0\ud835\udda1\ud835\udda2\ud835\udda3\ud835\udda4\ud835\udda5\ud835\udda6\ud835\udda7\ud835\udda8\ud835\udda9\ud835\uddaa\ud835\uddab\ud835\uddac\ud835\uddad\ud835\uddae\ud835\uddaf\ud835\uddb0\ud835\uddb1\ud835\uddb2\ud835\uddb3\ud835\uddb4\ud835\uddb5\ud835\uddb6\ud835\uddb7\ud835\uddb8\ud835\uddb9',
        lc: '\ud835\uddba\ud835\uddbb\ud835\uddbc\ud835\uddbd\ud835\uddbe\ud835\uddbf\ud835\uddc0\ud835\uddc1\ud835\uddc2\ud835\uddc3\ud835\uddc4\ud835\uddc5\ud835\uddc6\ud835\uddc7\ud835\uddc8\ud835\uddc9\ud835\uddca\ud835\uddcb\ud835\uddcc\ud835\uddcd\ud835\uddce\ud835\uddcf\ud835\uddd0\ud835\uddd1\ud835\uddd2\ud835\uddd3',
    },
    'Math Sans Bold': {
        num: '\ud835\udfec\ud835\udfed\ud835\udfee\ud835\udfef\ud835\udff0\ud835\udff1\ud835\udff2\ud835\udff3\ud835\udff4\ud835\udff5',
        uc: '\ud835\uddd4\ud835\uddd5\ud835\uddd6\ud835\uddd7\ud835\uddd8\ud835\uddd9\ud835\uddda\ud835\udddb\ud835\udddc\ud835\udddd\ud835\uddde\ud835\udddf\ud835\udde0\ud835\udde1\ud835\udde2\ud835\udde3\ud835\udde4\ud835\udde5\ud835\udde6\ud835\udde7\ud835\udde8\ud835\udde9\ud835\uddea\ud835\uddeb\ud835\uddec\ud835\udded',
        lc: '\ud835\uddee\ud835\uddef\ud835\uddf0\ud835\uddf1\ud835\uddf2\ud835\uddf3\ud835\uddf4\ud835\uddf5\ud835\uddf6\ud835\uddf7\ud835\uddf8\ud835\uddf9\ud835\uddfa\ud835\uddfb\ud835\uddfc\ud835\uddfd\ud835\uddfe\ud835\uddff\ud835\ude00\ud835\ude01\ud835\ude02\ud835\ude03\ud835\ude04\ud835\ude05\ud835\ude06\ud835\ude07',
    },
    'Math Sans Italic': {
        uc: '\ud835\ude08\ud835\ude09\ud835\ude0a\ud835\ude0b\ud835\ude0c\ud835\ude0d\ud835\ude0e\ud835\ude0f\ud835\ude10\ud835\ude11\ud835\ude12\ud835\ude13\ud835\ude14\ud835\ude15\ud835\ude16\ud835\ude17\ud835\ude18\ud835\ude19\ud835\ude1a\ud835\ude1b\ud835\ude1c\ud835\ude1d\ud835\ude1e\ud835\ude1f\ud835\ude20\ud835\ude21',
        lc: '\ud835\ude22\ud835\ude23\ud835\ude24\ud835\ude25\ud835\ude26\ud835\ude27\ud835\ude28\ud835\ude29\ud835\ude2a\ud835\ude2b\ud835\ude2c\ud835\ude2d\ud835\ude2e\ud835\ude2f\ud835\ude30\ud835\ude31\ud835\ude32\ud835\ude33\ud835\ude34\ud835\ude35\ud835\ude36\ud835\ude37\ud835\ude38\ud835\ude39\ud835\ude3a\ud835\ude3b',
    },
    'Math Sans Bold Italic': {
        uc: '\ud835\ude3c\ud835\ude3d\ud835\ude3e\ud835\ude3f\ud835\ude40\ud835\ude41\ud835\ude42\ud835\ude43\ud835\ude44\ud835\ude45\ud835\ude46\ud835\ude47\ud835\ude48\ud835\ude49\ud835\ude4a\ud835\ude4b\ud835\ude4c\ud835\ude4d\ud835\ude4e\ud835\ude4f\ud835\ude50\ud835\ude51\ud835\ude52\ud835\ude53\ud835\ude54\ud835\ude55',
        lc: '\ud835\ude56\ud835\ude57\ud835\ude58\ud835\ude59\ud835\ude5a\ud835\ude5b\ud835\ude5c\ud835\ude5d\ud835\ude5e\ud835\ude5f\ud835\ude60\ud835\ude61\ud835\ude62\ud835\ude63\ud835\ude64\ud835\ude65\ud835\ude66\ud835\ude67\ud835\ude68\ud835\ude69\ud835\ude6a\ud835\ude6b\ud835\ude6c\ud835\ude6d\ud835\ude6e\ud835\ude6f',
    },
    'Math Script': {
        uc: '\ud835\udc9c\u212c\ud835\udc9e\ud835\udc9f\u2130\u2131\ud835\udca2\u210b\u2110\ud835\udca5\ud835\udca6\u2112\u2133\ud835\udca9\ud835\udcaa\ud835\udcab\ud835\udcac\u211b\ud835\udcae\ud835\udcaf\ud835\udcb0\ud835\udcb1\ud835\udcb2\ud835\udcb3\ud835\udcb4\ud835\udcb5',
        lc: '\ud835\udcb6\ud835\udcb7\ud835\udcb8\ud835\udcb9\u212f\ud835\udcbb\u210a\ud835\udcbd\ud835\udcbe\ud835\udcbf\ud835\udcc0\ud835\udcc1\ud835\udcc2\ud835\udcc3\u2134\ud835\udcc5\ud835\udcc6\ud835\udcc7\ud835\udcc8\ud835\udcc9\ud835\udcca\ud835\udccb\ud835\udccc\ud835\udccd\ud835\udcce\ud835\udccf',
    },
    'Math Bold Script': {
        uc: '\ud835\udcd0\ud835\udcd1\ud835\udcd2\ud835\udcd3\ud835\udcd4\ud835\udcd5\ud835\udcd6\ud835\udcd7\ud835\udcd8\ud835\udcd9\ud835\udcda\ud835\udcdb\ud835\udcdc\ud835\udcdd\ud835\udcde\ud835\udcdf\ud835\udce0\ud835\udce1\ud835\udce2\ud835\udce3\ud835\udce4\ud835\udce5\ud835\udce6\ud835\udce7\ud835\udce8\ud835\udce9',
        lc: '\ud835\udcea\ud835\udceb\ud835\udcec\ud835\udced\ud835\udcee\ud835\udcef\ud835\udcf0\ud835\udcf1\ud835\udcf2\ud835\udcf3\ud835\udcf4\ud835\udcf5\ud835\udcf6\ud835\udcf7\ud835\udcf8\ud835\udcf9\ud835\udcfa\ud835\udcfb\ud835\udcfc\ud835\udcfd\ud835\udcfe\ud835\udcff\ud835\udd00\ud835\udd01\ud835\udd02\ud835\udd03',
    },
    'Math Double-Struck': {
        uc: '\ud835\udd38\ud835\udd39\u2102\ud835\udd3b\ud835\udd3c\ud835\udd3d\ud835\udd3e\u210d\ud835\udd40\ud835\udd41\ud835\udd42\ud835\udd43\ud835\udd44\u2115\ud835\udd46\u2119\u211a\u211d\ud835\udd4a\ud835\udd4b\ud835\udd4c\ud835\udd4d\ud835\udd4e\ud835\udd4f\ud835\udd50\u2124',
        lc: '\ud835\udd52\ud835\udd53\ud835\udd54\ud835\udd55\ud835\udd56\ud835\udd57\ud835\udd58\ud835\udd59\ud835\udd5a\ud835\udd5b\ud835\udd5c\ud835\udd5d\ud835\udd5e\ud835\udd5f\ud835\udd60\ud835\udd61\ud835\udd62\ud835\udd63\ud835\udd64\ud835\udd65\ud835\udd66\ud835\udd67\ud835\udd68\ud835\udd69\ud835\udd6a\ud835\udd6b',
        num: '\ud835\udfd8\ud835\udfd9\ud835\udfda\ud835\udfdb\ud835\udfdc\ud835\udfdd\ud835\udfde\ud835\udfdf\ud835\udfe0\ud835\udfe1',
    },
    'Math Monospace': {
        uc: '\ud835\ude70\ud835\ude71\ud835\ude72\ud835\ude73\ud835\ude74\ud835\ude75\ud835\ude76\ud835\ude77\ud835\ude78\ud835\ude79\ud835\ude7a\ud835\ude7b\ud835\ude7c\ud835\ude7d\ud835\ude7e\ud835\ude7f\ud835\ude80\ud835\ude81\ud835\ude82\ud835\ude83\ud835\ude84\ud835\ude85\ud835\ude86\ud835\ude87\ud835\ude88\ud835\ude89',
        lc: '\ud835\ude8a\ud835\ude8b\ud835\ude8c\ud835\ude8d\ud835\ude8e\ud835\ude8f\ud835\ude90\ud835\ude91\ud835\ude92\ud835\ude93\ud835\ude94\ud835\ude95\ud835\ude96\ud835\ude97\ud835\ude98\ud835\ude99\ud835\ude9a\ud835\ude9b\ud835\ude9c\ud835\ude9d\ud835\ude9e\ud835\ude9f\ud835\udea0\ud835\udea1\ud835\udea2\ud835\udea3',
        num: '\ud835\udff6\ud835\udff7\ud835\udff8\ud835\udff9\ud835\udffa\ud835\udffb\ud835\udffc\ud835\udffd\ud835\udffe\ud835\udfff',
    },
    'Parenthesized': {
        uc: '\ud83c\udd10\ud83c\udd11\ud83c\udd12\ud83c\udd13\ud83c\udd14\ud83c\udd15\ud83c\udd16\ud83c\udd17\ud83c\udd18\ud83c\udd19\ud83c\udd1a\ud83c\udd1b\ud83c\udd1c\ud83c\udd1d\ud83c\udd1e\ud83c\udd1f\ud83c\udd20\ud83c\udd21\ud83c\udd22\ud83c\udd23\ud83c\udd24\ud83c\udd25\ud83c\udd26\ud83c\udd27\ud83c\udd28\ud83c\udd29',
        lc: '\u249c\u249d\u249e\u249f\u24a0\u24a1\u24a2\u24a3\u24a4\u24a5\u24a6\u24a7\u24a8\u24a9\u24aa\u24ab\u24ac\u24ad\u24ae\u24af\u24b0\u24b1\u24b2\u24b3\u24b4\u24b5',
        other: [
            { from: '123456789', to: '\u2474\u2475\u2476\u2477\u2478\u2479\u247a\u247b\u247c' },
        ],
    },
    'Circled': {
        num: '\u24ea\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468',
        uc: '\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf',
        lc: '\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7\u24e8\u24e9',
        other: [
            { from: '*+-./=|\\><', to: '\u229b\u2295\u2296\u2299\u2298\u229c\u29b6\u29b8\u29c0\u29c1' },
        ],
    },
    'Negative Circled': {
        num: '\u24ff\u2776\u2777\u2778\u2779\u277a\u277b\u277c\u277d\u277e',
        uc: '\ud83c\udd50\ud83c\udd51\ud83c\udd52\ud83c\udd53\ud83c\udd54\ud83c\udd55\ud83c\udd56\ud83c\udd57\ud83c\udd58\ud83c\udd59\ud83c\udd5a\ud83c\udd5b\ud83c\udd5c\ud83c\udd5d\ud83c\udd5e\ud83c\udd5f\ud83c\udd60\ud83c\udd61\ud83c\udd62\ud83c\udd63\ud83c\udd64\ud83c\udd65\ud83c\udd66\ud83c\udd67\ud83c\udd68\ud83c\udd69',
    },
    'Squared': {
        uc: '\ud83c\udd30\ud83c\udd31\ud83c\udd32\ud83c\udd33\ud83c\udd34\ud83c\udd35\ud83c\udd36\ud83c\udd37\ud83c\udd38\ud83c\udd39\ud83c\udd3a\ud83c\udd3b\ud83c\udd3c\ud83c\udd3d\ud83c\udd3e\ud83c\udd3f\ud83c\udd40\ud83c\udd41\ud83c\udd42\ud83c\udd43\ud83c\udd44\ud83c\udd45\ud83c\udd46\ud83c\udd47\ud83c\udd48\ud83c\udd49',
        other: [
            { from: '+-./\\*', to: '\u229e\u229f\u22a1\u29c4\u29c5\u29c6' },
        ],
    },
    'Negative Squared': {
        uc: '\ud83c\udd70\ud83c\udd71\ud83c\udd72\ud83c\udd73\ud83c\udd74\ud83c\udd75\ud83c\udd76\ud83c\udd77\ud83c\udd78\ud83c\udd79\ud83c\udd7a\ud83c\udd7b\ud83c\udd7c\ud83c\udd7d\ud83c\udd7e\ud83c\udd7f\ud83c\udd80\ud83c\udd81\ud83c\udd82\ud83c\udd83\ud83c\udd84\ud83c\udd85\ud83c\udd86\ud83c\udd87\ud83c\udd88\ud83c\udd89',
    },
    'Comic': {
        toLocaleUpperCase: true,
        uc: '\u15e9\u15f7\u1455\u15ea\u15f4\u15b4\u161c\u157cI\u148dK\u14aa\u15f0\u144eO\u146d\u146b\u1587\u1515T\u144c\u142f\u15ef\u166dY\u1614',
    },
    'Manga': {
        toLocaleUpperCase: true,
        uc: '\u5342\u4e43\u531a\u15ea\u4e47\u5343\u161c\u5344|\uff8c\u049c\u3125\u722a\u51e0\u3116\u5369\u04a8\u5c3a\u4e02\u3112\u3129\u142f\u5c71\u4e42\u311a\u4e59',
    },
    'Ladybug': {
        toLocaleUpperCase: true,
        uc: '\ua34f\ua303\ua3f3\ua037\ua3c2\ua387\ua045\ua00d\ua024\ua4bb\ua018\ua492\ua3ad\ua224\ua0a6\u1598\ua1b0\ua2ea\ua31a\ua4c4\ua00e\ua4a6\ua150\ua267\ua329\ua074',
    },
    'Tai': {
        toLocaleUpperCase: true,
        uc: '\uaa96\u1947\u1974\u1994\uaac0\u183b\u19c1\uaadd\ua838\ua839\u16d5\uaab6\uaa91\uaa80\uaaae\u03c1\uaa87\u1945\u1993\uaabb\uaa8a\uaa9c\u1b59\u194a\uaa97\u01ba',
    },
    'Yi': {
        toLocaleUpperCase: true,
        uc: '\ua2ec\ua0f3\ua254\ua4af\ua3c2\ua2b0\ua34c\ua05d\ua490\ua4bb\ua018\ua492\ua0b5\ua2ca\ua132\ua263\ua1b0\ua2ea\ua1d9\ua4c4\ua4a4\ua4a6\ua150\ua267\ua326\ua074',
    },
    'Fake Cyrillic': {
        uc: '\u0414\u0411\u0480\u2181\u0404F\u0411\u041d\u0406\u0408\u040cL\u041c\u0418\u0424\u0420Q\u042f\u0405\u0413\u0426V\u0429\u0416\u0427Z',
        lc: '\u0430\u044a\u0441\u2181\u044df\u0411\u0402\u0456\u0458\u043al\u043c\u0438\u043e\u0440q\u0453\u0455\u0442\u0446v\u0448\u0445\u040ez',
    },
    'Inverted': {
        from: [33, 126],
        to: '\u00a1"#$%\u214b,()*+\u2018-./0123456789:;<=>\u00bf@\u0250q\u0254p\u01dd\u025f\u0183\u0265\u0131\u027e\u029e\u05df\u026fuodb\u0279s\u0287n\ud800\udf21\u028dx\u028ez[\\]^_`\u0250q\u0254p\u01dd\u025f\u0183\u0265\u0131\u027e\u029e\u05df\u026fuodb\u0279s\u0287n\u028c\u028dx\u028ez{|}~',
    },
    'Reversed': {
        from: [33, 126],
        to: '!"#$%&\')(*+,-.\\0\u07c123456789:\u204f>=<\u2e2e@Ad\u2183b\u018e\ua7fbGHIJK\u2143M\u1d0eO\ua7fcp\u1d19\ua644TUVWXYZ]/[^_`Ad\u2184b\u0258\ua7fbgHijklm\u1d0eoqp\u1d19\ua645TUvwxYz}|{\u223d',
    },
    'Small Capitals': {
        lc: '\u1d00\u0299\u1d04\u1d05\u1d07\ua730\u0262\u029c\u026a\u1d0a\u1d0b\u029f\u1d0d\u0274\u1d0f\u1d18\ua7af\u0280\ua731\u1d1b\u1d1c\u1d20\u1d21x\u028f\u1d22',
    },
    'Thingy': {
        toLocaleUpperCase: true,
        uc: 'ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ',
    },
    'Rock Dots': rockDots,
    'Strikethrough': strikethrough,
    'Strike': slash,
    'Backslash': backslash,
    'Double Vertical Stroke': doublePipe,
    'Uppercase': uppercase,
    'Lowercase': lowercase,
    'ROT13': rot13,
    'Spongebob': spongebob,
    'Reverse': reverseString,
};

function reverseString(str) {
    // str = str.normalize('NFD');
    const graphemes = GraphemeSplitter().splitGraphemes(str);
    graphemes.reverse();
    return graphemes.join('').normalize('NFC');
}

function rockDots(str) {
    return combine(str, '\u0308'); // U+0308 COMBINING DIAERESIS
}

function strikethrough(str) {
    return combine(str, '\u0336'); // U+0336 COMBINING LONG STROKE OVERLAY
}

function slash(str) {
    return combine(str, '\u0338'); // U+0338 COMBINING SOLIDUS OVERLAY
}

function backslash(str) {
    return combine(str, '\u20e5'); // U+20E5 COMBINING REVERSE SOLIDUS OVERLAY
}

function doublePipe(str) {
    return combine(str, '\u20e6'); // U+20E5 COMBINING DOUBLE VERTICAL STROKE OVERLAY
}

function spongebob(str) {
    let lowercase = false;
    return Array.from(str.normalize('NFD')).map(char => {
        const lc = char.toLocaleLowerCase();
        const uc = char.toLocaleUpperCase();
        if (lc === uc) { return char; }
        lowercase = !lowercase;
        return lowercase ? lc : uc;
    }).join('').normalize('NFC');
}

function rot13(str) {
    return Array.from(str.normalize('NFD')).map(char => {
        const cp = char.codePointAt(0);
        if ((cp >= 65 && cp <= 77) || (cp >= 97 && cp <= 109)) {
            return String.fromCodePoint(cp + 13);
        }
        if ((cp >= 78 && cp <= 90) || (cp >= 110 && cp <= 122)) {
            return String.fromCodePoint(cp - 13);
        }
        return char;
    }).join('').normalize('NFC');
}

function uppercase(str) {
    return str.toLocaleUpperCase();
}

function lowercase(str) {
    return str.toLocaleLowerCase();
}

function combine(str, combiningMark) {
    return str.normalize('NFD')
        .replace(new RegExp(combiningMark, 'gu'), '')
        .replace(/\p{Letter}|\p{Number}/ug, function (char) {
            return char + combiningMark;
        })
        .normalize('NFC');
}

function finalize(converter) {
    ['uc', 'lc', 'num', 'asciiPrint', 'from', 'to'].forEach((key) => {
        if (converter[key] == null) {
            return;
        }
        if (converter[key].length == 2 &&
            typeof converter[key][0] === 'number' &&
            typeof converter[key][1] === 'number') {
            converter[key] = Array.from(range(...converter[key]))
                .map(x => String.fromCodePoint(x));
            return;
        }
        converter[key] = Array.from(converter[key]);
    });
    if (converter.other != null) {
        converter.other.forEach(finalize);
    }
}

function* range(from, to) {
    for (let i = from; i <= to; i += 1) {
        yield i;
    }
}

const converterNames = Object.keys(converters).filter(x => typeof converters[x] !== 'function');
const filterNames    = Object.keys(converters).filter(x => typeof converters[x] === 'function');

Object.values(converters).forEach(finalize);

module.exports = {
    converters,
    converterNames,
    filterNames,
};
