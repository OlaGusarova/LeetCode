import { describe, test, expect } from '@jest/globals'
import { kidsWithCandies } from './solution';

describe('1431. Kids With Candies', () => {
  test('Example 1', () => {
    const candies = [2,3,5,1,3];
    const extraCandies = 3;
    const result = kidsWithCandies(candies, extraCandies);
    expect(result).toEqual([true, true, true, false, true]);
  });

  test('Example 2', () => {
    expect(kidsWithCandies([4,2,1,1,2], 1)).toEqual([true,false,false,false,false])
  });
  
  test('Example 3', () => {
    expect(kidsWithCandies([12,1,12], 10)).toEqual([true,false,true])
  });
});