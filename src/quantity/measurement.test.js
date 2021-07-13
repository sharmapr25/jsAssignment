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

test("equals return true when 1000 meter is equal to 1 kilometer", () => {
  const thousandMeter = new Measurement(1000, Unit.M);
  const oneKiloMeter = new Measurement(1, Unit.KM);

  expect(thousandMeter.equals(oneKiloMeter)).toBeTruthy();
});

test("equals return false when 2000 meter is not equal to 1 kilometer", () => {
  const twoThousandMeter = new Measurement(2000, Unit.M);
  const oneKiloMeter = new Measurement(1, Unit.KM);

  expect(twoThousandMeter.equals(oneKiloMeter)).toBeFalsy();
});


