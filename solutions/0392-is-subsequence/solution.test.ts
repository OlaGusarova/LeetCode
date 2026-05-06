import { solution } from './solution';

describe('392. is-subsequence', () => {
    test('Example 1', () => {
        // Arrange
        const s = "abc"
        const t = "ahbgdc"
        const expected = true
        
        // Act
        const result = solution(s, t);
        
        // Assert
        expect(result).toEqual(expected);
    });

});
