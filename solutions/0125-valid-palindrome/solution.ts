/**
 * @description Решение задачи 125. valid-palindrome
 * @link 🟢 EASY - https://leetcode.com/problems/valid-palindrome/
 */

export function solution(s: string): boolean {
    const sString = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    if (sString.length === 0) return true

    let left = 0
    let right = sString.length - 1

    while (left < right) {
        if (sString[left] !== sString[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

