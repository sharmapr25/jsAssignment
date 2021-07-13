const Probability = require('./probability');

test('equals return true when two probabilities are equal', () => {
  const probability1 = new Probability(0.5);
  const probability2 = new Probability(0.5);
  expect(probability1.equals(probability2)).toBeTruthy();
});


