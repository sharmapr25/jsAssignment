const CarIsAlreadyParkedError = require("./error/carIsAlreadyParkedError");
const carIsNotParkedError = require("./error/carIsNotParkedError");

class ParkingLot{
  constructor(parkingSize){
    this.parkingSpace = new Array(parkingSize);
  }
  park(car){
    if(this.isParked(car)){
      throw new CarIsAlreadyParkedError();
    }
    this.parkingSpace.push(car);
  };

  unpark(carToUnpark){
    if(!this.isParked(carToUnpark)){
      throw new carIsNotParkedError();
    }
    this.parkingSpace = this.parkingSpace.filter(car => JSON.stringify(car) !== JSON.stringify(carToUnpark));
  }

  isParked(carToFind){
    return this.parkingSpace.find(car => {
      return JSON.stringify(car) === JSON.stringify(carToFind);
    });
  };

};

module.exports = ParkingLot;