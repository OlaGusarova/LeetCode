/**
 * @description Решение задачи 28. Needle-in-a-Haystack
 * @link 🟢 EASY - https://leetcode.com/problems/Needle-in-a-Haystack/
 */

export function solution(haystack: string, needle: string): boolean {
    if (needle.length === 0) return true
    if(needle.length > haystack.length) return false

    let i = 0
    let j = 0

    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            j++
        }
        i++
    }
    return j === needle.length
}
