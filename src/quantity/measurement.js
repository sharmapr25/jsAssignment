class Measurement{
  constructor(value, unit){
    this.value = value;
    this.unit = unit;
  };

  equals(){
    return true;
  }
};

module.exports = Measurement;
