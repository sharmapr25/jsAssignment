const Measurement = require('./measurement');
const Unit = require('./unit');

test('equals return true when 100 centimeter is equal to 1 meter', () => {
  const hundredCentimeter = new Measurement(100, Unit.CM);
  const oneMeter = new Measurement(1, Unit.M);

  expect(hundredCentimeter.equals(oneMeter)).toBeTruthy();
});

test("equals return false when 200 centimeter is not equal to 1 meter", () => {
  const hundredCentimeter = new Measurement(200, Unit.CM);
  const oneMeter = new Measurement(1, Unit.M);

  expect(hundredCentimeter.equals(oneMeter)).toBeFalsy();
});

