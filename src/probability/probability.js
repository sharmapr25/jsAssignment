class Probability {
  constructor(ratio) {
    this.ratio = ratio;
  }

  equals(anotherProbability) {
    if (anotherProbability instanceof Probability) {
      return anotherProbability.ratio === this.ratio;
    }
    return false;
  }

  compare(anotherProbability) {
    const ratioDifference = this.ratio - anotherProbability.ratio;
    if (ratioDifference == 0) {
      return 0;
    }
    return ratioDifference / Math.abs(ratioDifference);
  }

  and(anotherProbability) {
    return new Probability(this.ratio * anotherProbability.ratio);
  }

  not(){
    return new Probability(1 - this.ratio);
  }

  or(anotherProbability){
    return new Probability(this.ratio + anotherProbability.ratio);
  }
};

module.exports = Probability;