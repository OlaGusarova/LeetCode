import { describe, test, expect } from '@jest/globals'
import { solution } from './solution';

describe('28. Needle-in-a-Haystack', () => {
    test('Example 1', () => {
        // Arrange
        const input1 = "abcde"
        const input2 = "ace"
        const expected = true
        
        // Act
        const result = solution(input1, input2);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        const input1 = "abcde"
        const input2 = "aec"
        const expected = false
        
        // Act
        const result = solution(input1, input2);
        
        // Assert
        expect(result).toEqual(expected);
    });

    test('Example 3', () => {
        const input1 = "leetcode"
        const input2 = "let"
        const expected = true
        
        // Act
        const result = solution(input1, input2);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
