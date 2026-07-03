/**
 * @description Решение задачи 238. product-of-array-except-self
 * @link 🟡 MEDIUM - https://leetcode.com/problems/product-of-array-except-self/
 */

export function solution(nums: number[]): number[] {
    const n = nums.length
    const answer = new Array(n).fill(1)

    let prefix = 1
    for (let i = 0; i < n; i++) {
        answer[i] = prefix
        prefix *= nums[i]
    }

    let suffix = 1
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix
        suffix *= nums[i]
    }
    return answer
};

