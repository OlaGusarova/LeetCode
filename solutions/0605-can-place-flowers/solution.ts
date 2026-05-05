/**
 * @description Решение задачи 605. can-place-flowers
 * @link 🟢 EASY - https://leetcode.com/problems/can-place-flowers/
 */

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0
    let i = 0

    while (i < flowerbed.length && count < n) {
        if (flowerbed[i] === 0) {
            const isPrevEmpty = (i === 0) || (flowerbed[i-1] === 0);
            const isNextEmpty = (i === flowerbed.length - 1) || (flowerbed[i+1] === 0);

            if (isPrevEmpty && isNextEmpty) {
                count++
                i +=2
                continue
            }
        }
        i++
    }
    return count >= n
};

