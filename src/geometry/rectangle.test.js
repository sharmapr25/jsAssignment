const Rectangle = require('./rectangle');

test('area should return 6 when given rectangle width is 3 and length is 2', () => {
  const rectangle = new Rectangle(3, 2);
  expect(rectangle.area()).toBe(6);
});

test("perimeter should return 10 when given rectangle width is 3 and length is 2", () => {
  const rectangle = new Rectangle(3, 2);
  expect(rectangle.perimeter()).toBe(10);
});

