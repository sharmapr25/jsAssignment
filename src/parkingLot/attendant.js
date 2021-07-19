const Observer = require('./observer');

class Attendant extends Observer{
  constructor(parkingLot){
    this.parkingLot = parkingLot;
  }

  park(car){
    this.parkingLot.park(car);
  }

  unpark(car){
    this.parkingLot.unpark(car);
  }
}

module.exports = Attendant;