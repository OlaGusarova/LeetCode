/**
 * @description Решение задачи 1431. Kids-With-the-Greatest-Number-of-Candies
 * @link 🟢 EASY
 */

export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  
  return candies.map(candyI => (candyI + extraCandies) >= maxCandies)
};
