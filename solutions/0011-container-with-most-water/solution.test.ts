import { solution } from './solution';

describe('11. container-with-most-water', () => {
    test('Example 1', () => {
        // Arrange
        const input = [1,8,6,2,5,4,8,3,7]
        const expected = 49
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        const input = [1,1]
        const expected = 1
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
