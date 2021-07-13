const Probability = require('./probability');

test('equals return true when two probabilities are equal', () => {
  const probabilityA = new Probability(0.5);
  const probabilityB = new Probability(0.5);
  expect(probabilityA.equals(probabilityB)).toBeTruthy();
});

test("equals return false when two probabilities are not equal", () => {
  const probabilityA = new Probability(0.5);
  const probabilityB = new Probability(0.7);
  expect(probabilityA.equals(probabilityB)).toBeFalsy();
});

test("compare return 1 when given probablityA is greater than another probabilityB", () => {
  const probabilityA = new Probability(0.5);
  const probabilityB = new Probability(0.3);
  expect(probabilityA.compare(probabilityB)).toBe(1);
});

test("compare return 0 when both probabilities are equals", () => {
  const probabilityA = new Probability(0.5);
  const probabilityB = new Probability(0.5);
  expect(probabilityA.compare(probabilityB)).toBe(0);
});

test("compare return -1 when given probabilityA is less than another probabilityB", () => {
  const probabilityA = new Probability(0.3);
  const probabilityB = new Probability(0.5);
  expect(probabilityA.compare(probabilityB)).toBe(-1);
});

test("and return 0.25 when probabilityA and probabilityB are 0.5", () => {
  const probabilityA = new Probability(0.5);
  const probabilityB = new Probability(0.5);
  const probabilityExpected = new Probability(0.25);
  const probabilityResult = probabilityA.and(probabilityB);
  expect(probabilityResult.equals(probabilityExpected)).toBeTruthy();
});

test("not return 0.4 when probabilityA is 0.6", () => {
  const probabilityA = new Probability(0.6);
  const probabilityExpected = new Probability(0.4);
  const probabilityResult = probabilityA.not();
  expect(probabilityResult.equals(probabilityExpected)).toBeTruthy();
});

test("or return 0.9 when probabilityA is 0.4 and probabilityB are 0.5", () => {
  const probabilityA = new Probability(0.4);
  const probabilityB = new Probability(0.5);
  const probabilityExpected = new Probability(0.9);
  const probabilityResult = probabilityA.or(probabilityB);
  expect(probabilityResult.equals(probabilityExpected)).toBeTruthy();
});
