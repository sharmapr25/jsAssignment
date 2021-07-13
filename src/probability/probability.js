class Probability{
  constructor(ratio){
    this.ratio = ratio
  };

  equals(anotherProbability){
    if(anotherProbability instanceof Probability){
      return anotherProbability.ratio === this.ratio;
    }
    return false;
  }
};

module.exports = Probability;