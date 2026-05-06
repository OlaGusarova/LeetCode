/**
 * @description Решение задачи 345. reverse-vowels-of-a-string
 * @link 🟢 EASY - https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

// export function solution(s: string): string {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     const sArr = s.split('')
//     const stack = []

//     for (let i = 0; i < sArr.length; i++) {
//         if (vowels.has(sArr[i])) {
//             stack.push(sArr[i])
//         }
//     }

//     for (let i = 0; i < sArr.length; i++) {
//         if (vowels.has(sArr[i])) {
//             sArr[i] = stack.pop()
//         }
//     }

//     return sArr.join('')
// }


export function solutionTwo(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArr = s.split('')
    let left = 0
    let right = sArr.length - 1

    while (left < right) {
        while (left < right && !vowels.has(sArr[left])) {
            left++
        }

        while (left < right && !vowels.has(sArr[right])) {
            right--
        }
        if (left < right) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
            left++
            right--
        }
    }

    return sArr.join('')
}