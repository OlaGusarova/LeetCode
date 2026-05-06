/**
 * @description Решение задачи 167. two-sum-ii-input-array-is-sorted
 * @link 🟡 MEDIUM - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

export function twoSum(numbers: number[], target: number): number[] {
    let l = 0
    let r = numbers.length - 1
    while (l < r) {
        const leftNumber = numbers[l]
        const rightNumber = numbers[r]
        const sum = leftNumber + rightNumber

        if (sum === target) {
            return [l + 1, r + 1]
        } else if (sum < target) {
            l++
        } else {
            r-- 
        }
    }
    return []
};
