import { capitalize } from './capitalize.js'

test('Strings only error', () => {
  expect(() => capitalize(10)).toThrow('strings only')
})

test('Capitalize string', () => {
  expect(capitalize('book')).toBe('Book')
})