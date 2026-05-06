import { twoSum } from './solution';

describe('167. two-sum-ii-input-array-is-sorted', () => {
    test('Example 1', () => {
        // Arrange
        const input = [2,7,11,15]
        const target = 9
        const expected = [1,2]
        
        // Act
        const result = twoSum(input, target);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        // Arrange
        const input = [2,3,4]
        const target = 6
        const expected = [1,3]
        
        // Act
        const result = twoSum(input, target);
        
        // Assert
        expect(result).toEqual(expected);
    });

    test('Example 3', () => {
        // Arrange
        const input = [-1,0]
        const target = -1
        const expected = [1,2]
        
        // Act
        const result = twoSum(input, target);
        
        // Assert
        expect(result).toEqual(expected);
    });
});
