import { gcdOfStrings } from './solution';

describe('1071 Greatest Common Divisor', () => {
  test('Example 1', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toEqual('ABC')
  });

  test('Example 2', () => {
    expect(gcdOfStrings('ABABAB', 'ABAB')).toEqual('AB')
  });

  test('Example 3', () => {
    expect(gcdOfStrings('LEET', 'CODE')).toEqual('')
  });

  test('Example 4', () => {
    expect(gcdOfStrings('AAAAAB', 'AAA')).toEqual('')
  });
});