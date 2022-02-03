const { expect } = require('@jest/globals');
const {
  engineer,
  toKWD,
  richestWallet,
  makeLiteralGrades,
} = require('./iterators');
jest.spyOn(console, 'log');
test(`Logs every element of the array with "eng" next to it`, () => {
  expect(console.log.mock.calls.length).toBe(0);
  engineer(['omar']);
  expect(console.log.mock.calls.length).toBe(1);
  expect(console.log.mock.calls[0][0]).toBe('eng.omar');
});

test(`Returns an array of wallets in KWD`, () => {
  expect(toKWD([3, 4])).toEqual([0.8999999999999999, 1.2]);
});

test(`Returns an array of wallets that exceed the maxAmount`, () => {
  expect(richestWallet([3, 4, 5], 3)).toEqual([4, 5]);
});

test(`converts evrey grade to its currosponding literal grade`, () => {
  expect(makeLiteralGrades([75, 40, 91], 3)).toEqual(['C', 'F', 'A']);
});
