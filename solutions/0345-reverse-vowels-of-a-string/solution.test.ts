import { describe, test, expect } from '@jest/globals'
import { solutionTwo } from './solution';

describe('345. reverse-vowels-of-a-string', () => {
    test('Example 1', () => {
        // Arrange
        const input = "IceCreAm"
        const expected = "AceCreIm"
        
        // Act
        const result = solutionTwo(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        // Arrange
        const input = "leetcode"
        const expected = "leotcede"
        
        // Act
        const result = solutionTwo(input);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
