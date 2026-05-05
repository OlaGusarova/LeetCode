const canPlaceFlowers = require('./solution');

describe('605. can-place-flowers', () => {
    test('Example 1', () => {
        const input1 = [1,0,0,0,1]
        const input2 = 1
        const expected = true

        const result = canPlaceFlowers(input1, input2);

        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        const input1 = [1,0,0,0,1]
        const input2 = 2
        const expected = false

        const result = canPlaceFlowers(input1, input2);

        expect(result).toEqual(expected);
    });

});
