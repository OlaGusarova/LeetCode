import { describe, test, expect } from '@jest/globals'
import { mergeAlternately } from './solution';

describe('1768 mergeAlternately', () => {
  test('Example 1', () => {
    expect(mergeAlternately('abc', 'pqr')).toEqual('apbqcr');
  });

  test('Example 2', () => {
    expect(mergeAlternately('ab', 'pqrs')).toEqual('apbqrs');
  });

  test('Example 3', () => {
    expect(mergeAlternately('abcd', 'pq')).toEqual('apbqcd');
  });
});