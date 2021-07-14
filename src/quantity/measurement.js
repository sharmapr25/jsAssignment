class Measurement{
  constructor(value, unit){
    this.value = value;
    this.unit = unit;
  };

  equals(anotherMeasurement){
    if(this.unit.isSameUnitType(anotherMeasurement.unit)){
      return this.value === anotherMeasurement.unit.convertTo(anotherMeasurement.value, this.unit);
    }
    return false;
  };

  add(anotherMeasurement){
    const total = this.value + anotherMeasurement.unit.convertTo(anotherMeasurement.value, this.unit);

    return new Measurement(total, this.unit);
  };
};

module.exports = Measurement;
