"use strict";
/**
 * @description Решение задачи 1071. greatest-common-divisor-of-strings
 * @link 🟢 EASY
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcdOfStrings = gcdOfStrings;
function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1)
        return '';
    function getNod(a, b) {
        while (b > 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    const nod = getNod(str1.length, str2.length);
    return str1.substring(0, nod);
}
;
//# sourceMappingURL=solution.js.map