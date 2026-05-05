/**
 * @description Решение задачи 1071. greatest-common-divisor-of-strings
 * @link 🟢 EASY
 */

export function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return ''
    function getNod(a: number, b: number) {
        while (b > 0) {
            let temp = b
            b = a % b 
            a = temp
        }
        return a
    }
    const nod = getNod(str1.length, str2.length)
    return str1.substring(0, nod)
};