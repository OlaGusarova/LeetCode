/**
 * @description Решение задачи 11. container-with-most-water
 * @link 🟡 MEDIUM - https://leetcode.com/problems/container-with-most-water/
 */

export function solution(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let result = 0

    while (left < right) {
        const leftNum = height[left]
        const rightNum = height[right]
        const num = Math.min(leftNum, rightNum)
        const preResult = num * (right - left)
        result = Math.max(preResult, result)
        if (leftNum < rightNum) {
            left++
        } else {
            right--
        }
    }
    return result
}
