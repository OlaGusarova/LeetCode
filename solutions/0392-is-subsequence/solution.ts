/**
 * @description Решение задачи 392. is-subsequence
 * @link 🟢 EASY - https://leetcode.com/problems/is-subsequence/
 */

export function solution(s: string, t: string): boolean {
    if (s.length === 0) return true
    let sIndex = 0
    let tIndex = 0
    
    while (tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++
            if (sIndex === s.length) return true
        }
        tIndex++
    }

    return false
};
