import upperLowerDigit from "./common/upper-lower-digit.js";

const UPPER = Array.from("🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿");
const LOWER = Array.from("🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿");

export default function tags(str) {
    return upperLowerDigit(str, UPPER, LOWER);
}

tags.name = "Tags";
