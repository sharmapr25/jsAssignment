const Square = require('./square');

test("area should return 4 when given square size is 2", () => {
  const square = new Square(2);
  expect(square.area()).toBe(4);
});