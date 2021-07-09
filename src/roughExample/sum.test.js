const sum = require('./sum');
test('sum should return 3 when given numbers are 1 and 2', () => {
  expect(sum(1,2)).toBe(3);
});