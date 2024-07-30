import { sum } from "../src/sum";

test('sum function works correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
  
  describe('sum function tests', () => {
    test('sum function works correctly with positive numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });
  
    test('sum function works correctly with negative numbers', () => {
      expect(sum(-1, 1)).toBe(0);
    });
  
    test('sum function works correctly with zeros', () => {
      expect(sum(0, 0)).toBe(0);
    });
  });

  describe.only('Focused tests for Settings component', () => {
    test('sum function works correctly with zeros', () => {
        expect(sum(0, 0)).toBe(0);
      });
  });
  describe.skip('Skipped tests for Settings component', () => {
    test('This test will be skipped', () => {
      // This test will not run
    });})