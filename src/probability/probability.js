class Probability{
  constructor(ratio){
    this.ratio = ratio
  };

  equals(anotherProbability){
    if(anotherProbability instanceof Probability){
      return anotherProbability.ratio === this.ratio;
    }
    return false;
  };

  compare(anotherProbability){
    const ratioDifference = this.ratio - anotherProbability.ratio;
    return (ratioDifference/Math.abs(ratioDifference));
  }
};

module.exports = Probability;