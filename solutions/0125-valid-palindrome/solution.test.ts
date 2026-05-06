import { solution } from './solution';

describe('125. valid-palindrome', () => {
    test('Example 1', () => {
        // Arrange
        const input = "A man, a plan, a canal: Panama"
        const expected = true
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        // Arrange
        const input = "race a car"
        const expected = false
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 3', () => {
        // Arrange
        const input = " "
        const expected = true
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
});
