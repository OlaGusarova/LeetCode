import { describe, test, expect } from '@jest/globals'
import { solution } from './solution'

describe('238. product-of-array-except-self', () => {
    test('Example 1', () => {
        // Arrange
        const input = [1,2,3,4]
        const expected = [24,12,8,6]
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
