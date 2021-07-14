const Measurement = require('./measurement');
const Unit = require('./unit');

test('equals return true when 100 centimeter is equal to 1 meter', () => {
  const hundredCentimeters = new Measurement(100, Unit.CM);
  const oneMeter = new Measurement(1, Unit.M);

  expect(hundredCentimeters.equals(oneMeter)).toBeTruthy();
});

test("equals return false when 200 centimeter is not equal to 1 meter", () => {
  const hundredCentimeters = new Measurement(200, Unit.CM);
  const oneMeter = new Measurement(1, Unit.M);

  expect(hundredCentimeters.equals(oneMeter)).toBeFalsy();
});

test("equals return true when 1000 meter is equal to 1 kilometer", () => {
  const thousandMeters = new Measurement(1000, Unit.M);
  const oneKiloMeter = new Measurement(1, Unit.KM);

  expect(thousandMeters.equals(oneKiloMeter)).toBeTruthy();
});

test("equals return false when 2000 meter is not equal to 1 kilometer", () => {
  const twoThousandMeters = new Measurement(2000, Unit.M);
  const oneKiloMeter = new Measurement(1, Unit.KM);

  expect(twoThousandMeters.equals(oneKiloMeter)).toBeFalsy();
});

test("equals return true when 1000 gram is equal to 1 kilogram", () => {
  const thousandGrams = new Measurement(1000, Unit.G);
  const oneKiloGram = new Measurement(1, Unit.KG);

  expect(thousandGrams.equals(oneKiloGram)).toBeTruthy();
});

test("equals return false when compare 1 gram equal 1 centimeter", () => {
  const oneGram = new Measurement(1, Unit.G);
  const oneCentimeter = new Measurement(1, Unit.CM);

  expect(oneGram.equals(oneCentimeter)).toBeFalsy();
});

test("add return 200 centimeters when add 100 centimeters with 1 meter", () => {
  const hundredCentimeters = new Measurement(100, Unit.CM);
  const oneMeter = new Measurement(1, Unit.M);

  const twoHundredCentimeters = new Measurement(200, Unit.CM);
  const result = hundredCentimeters.add(oneMeter);

  expect(result.equals(twoHundredCentimeters)).toBeTruthy();
});




