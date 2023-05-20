import Calculator from "./calculator.js";

let testCalculator;
beforeEach(() => {
  testCalculator = new Calculator();
});

describe('add', () => {
  test('adds two numbers', () => {
    expect(testCalculator.add(1, 2)).toBe(3);
  });

  test('adds negative numbers', () => {
    expect(testCalculator.add(-1, -2)).toBe(-3);
  });

  test('adds decimal numbers', () => {
    expect(testCalculator.add(1.5, 2.5)).toBe(4);
  });
});

describe('subtract', () => {
  test('subtracts two numbers', () => {
    expect(testCalculator.subtract(5, 2)).toBe(3);
  });

  test('subtracts negative numbers', () => {
    expect(testCalculator.subtract(-1, -2)).toBe(1);
  });

  test('subtracts decimal numbers', () => {
    expect(testCalculator.subtract(5.5, 2.5)).toBe(3);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(testCalculator.multiply(2, 3)).toBe(6);
  });

  test('multiplies negative numbers', () => {
    expect(testCalculator.multiply(-2, -3)).toBe(6);
  });

  test('multiplies decimal numbers', () => {
    expect(testCalculator.multiply(2.5, 2)).toBe(5);
  });
});

describe('divide', () => {
  test('divides two numbers', () => {
    expect(testCalculator.divide(6, 2)).toBe(3);
  });

  test('divides negative numbers', () => {
    expect(testCalculator.divide(-6, -2)).toBe(3);
  });

  test('divides decimal numbers', () => {
    expect(testCalculator.divide(5, 2.5)).toBe(2);
  });
});