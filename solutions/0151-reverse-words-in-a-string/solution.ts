/**
 * @description Решение задачи 151. reverse-words-in-a-string
 * @link 🟡 MEDIUM - https://leetcode.com/problems/reverse-words-in-a-string/
 */

export function solution(s: string): string {
    const sArr = s.split(' ')
    const filtered = sArr.filter((el) => !!el)
    return filtered.reverse().join(' ')
}

