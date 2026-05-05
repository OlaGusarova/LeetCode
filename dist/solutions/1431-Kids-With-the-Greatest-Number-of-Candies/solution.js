"use strict";
/**
 * @description Решение задачи 1431. Kids-With-the-Greatest-Number-of-Candies
 * @link 🟢 EASY
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kidsWithCandies = kidsWithCandies;
function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    return candies.map(candyI => (candyI + extraCandies) >= maxCandies);
}
;
//# sourceMappingURL=solution.js.map