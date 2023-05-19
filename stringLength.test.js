import { stringLength } from "./stringLength";

test('the string length of javascript is 10', () => {
  expect(stringLength('javascript')).toBe(5);
});