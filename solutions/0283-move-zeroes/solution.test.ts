import { solution } from './solution';

describe('283. move-zeroes', () => {
    test('Example 1', () => {
        // Arrange
        const input = [0,1,0,3,12]
        const expected = [1,3,12,0,0]
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        // Arrange
        const input = [0]
        const expected = [0]
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
