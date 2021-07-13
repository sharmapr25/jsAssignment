class Measurement{
  constructor(value, unit){
    this.value = value;
    this.unit = unit;
  };

  equals(anotherMeasurement){
    return anotherMeasurement.value === ((anotherMeasurement.unit * this.value)/this.unit);
  };
};

module.exports = Measurement;
