const CarIsAlreadyParkedError = require("./error/carIsAlreadyParkedError");
const carIsNotParkedError = require("./error/carIsNotParkedError");

class ParkingLot{
  constructor(parkingSize){
    this.parkingSize = parkingSize;
    this.parkingSpace = [];
  };

  addOwner(owner){
    this.owner = owner;
  };

  park(car){
    if(this.isParked(car)){
      throw new CarIsAlreadyParkedError();
    }
    if(this._isSpaceAvailable()){
      this.parkingSpace.push(car);
    }
    if (!this._isSpaceAvailable()) {
      this.owner?.notifyWhenSpaceNotAvailable();
    }
  };

  unpark(carToUnpark){
    if(!this.isParked(carToUnpark)){
      throw new carIsNotParkedError();
    }
    if(!this._isSpaceAvailable()){
      this.owner?.notifyWhenSpaceIsAvailable();
    }
    this.parkingSpace = this.parkingSpace.filter(car => JSON.stringify(car) !== JSON.stringify(carToUnpark));
  }

  isParked(carToFind){
    return this.parkingSpace.find(car => {
      return JSON.stringify(car) === JSON.stringify(carToFind);
    });
  };

  _isSpaceAvailable(){
    return this.parkingSize > this.parkingSpace.length;
  }

};

module.exports = ParkingLot;