import { stringLength } from "./stringLength.js";

test('throws an error if the string is empty', () => {
  expect(() => stringLength('')).toThrow('String must be between 1 and 10 characters long')
});

test('throws an error if the string has more than 10 characters', () => {
  expect(() => stringLength('helicopters')).toThrow('String must be between 1 and 10 characters long')
});

test('the string length of javascript is 10', () => {
  expect(stringLength('javascript')).toBe(10);
});
