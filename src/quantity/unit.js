const InvalidUnitConversionError = require('./invalidUnitConversionError');

class Unit{
  constructor(value, unitType){
    this.value = value;
    this.unitType = unitType;
  };
  
  convertTo(value, anotherUnit){
    if(this.unitType !== anotherUnit.unitType){
      throw new InvalidUnitConversionError();
    }
    return Math.round((anotherUnit.value * value)/this.value);
  };

};

const unitType = {
  WEIGHT: 'weight',
  DISTANCE: 'distance'
};
Object.freeze(unitType);

const units = {
  CM: new Unit(1, unitType.DISTANCE),
  M: new Unit(0.01, unitType.DISTANCE),
  KM: new Unit(0.00001, unitType.DISTANCE),
  KG: new Unit(0.001, unitType.WEIGHT),
  G: new Unit(1, unitType.WEIGHT),
};

Object.freeze(units);
module.exports = units;