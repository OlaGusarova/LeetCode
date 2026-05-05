"use strict";
/**
 * @description Решение задачи 1768. merge-strings-alternately
 * @link 🟢 EASY
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAlternately = mergeAlternately;
function mergeAlternately(word1, word2) {
    let result = [];
    const word1Arr = word1.split('');
    const word2Arr = word2.split('');
    while (word1Arr.length > 0 || word2Arr.length > 0) {
        result.push(word1Arr.shift());
        result.push(word2Arr.shift());
    }
    if (word1Arr.length === 0) {
        result.push(word2Arr);
    }
    if (word2Arr.length === 0) {
        result.push(word1Arr);
    }
    return result.join('');
}
;
//# sourceMappingURL=solution.js.map