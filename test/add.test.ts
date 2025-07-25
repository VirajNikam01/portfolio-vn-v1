import { expect, it, vi, describe } from 'vitest'


const addNumbers = (a: number, b: number): number => {
  return a + b;
}

describe('addNumbers', () => {
  it('should return the sum of two positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(addNumbers(5, -3)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  it('should return zero when adding zero to zero', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });

  it('should handle adding zero to a number', () => {
    expect(addNumbers(0, 5)).toBe(5);
    expect(addNumbers(5, 0)).toBe(5);
  });
});
export default addNumbers;