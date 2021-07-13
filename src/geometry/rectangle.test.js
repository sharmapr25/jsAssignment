const Rectangle = require('./rectangle');

test('area return 6 when given rectangle width is 3 and length is 2', () => {
  const rectangle = new Rectangle(3, 2);
  expect(rectangle.area()).toBe(6);
});

test("area return 4 when given square size is 2", () => {
  const square = Rectangle.createSquare(2);
  expect(square.area()).toBe(4);
});

test("perimeter return 10 when given rectangle width is 3 and length is 2", () => {
  const rectangle = new Rectangle(3, 2);
  expect(rectangle.perimeter()).toBe(10);
});

test("perimeter return 8 when given square size is 2", () => {
  const square = Rectangle.createSquare(2);
  expect(square.perimeter()).toBe(8);
});

