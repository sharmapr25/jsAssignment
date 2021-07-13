class Measurement{
  constructor(value, unit){
    this.value = value;
    this.unit = unit;
  };

  equals(anotherMeasurement){
    if(this.unit.isSameUnitType(anotherMeasurement.unit)){
    return anotherMeasurement.value === ((anotherMeasurement.unit.value * this.value)/this.unit.value);
    }
    return false;
  };
};

module.exports = Measurement;
