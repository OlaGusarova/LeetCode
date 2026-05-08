import { solution } from './solution';

describe('151. reverse-words-in-a-string', () => {
    test('Example 1', () => {
        // Arrange
        const input = "the sky is blue"
        const expected = "blue is sky the"
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
         // Arrange
        const input = "  hello world  "
        const expected = "world hello"
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
