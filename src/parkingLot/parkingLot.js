const CarIsAlreadyParkedError = require("./carIsAlreadyParkedError");

class ParkingLot{
  constructor(parkingSize){
    this.parkingSpace = new Array(parkingSize);
  }
  park(vehicle){
    if(this.isParked(vehicle)){
      throw new CarIsAlreadyParkedError();
    }
    this.parkingSpace.push(vehicle);
  };

  isParked(vehicleToFind){
    return this.parkingSpace.find(vehicle => {
      return JSON.stringify(vehicle) === JSON.stringify(vehicleToFind);
    });
  };

};

module.exports = ParkingLot;