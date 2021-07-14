class ParkingLot{
  constructor(parkingSize){
    this.parkingSpace = new Array(parkingSize);
  }
  park(vehicle){
    this.parkingSpace.push(vehicle);
  };

  isParked(vehicleToFind){
    return this.parkingSpace.find(vehicle => {
      return JSON.stringify(vehicle) === JSON.stringify(vehicleToFind);
    });
  };

};

module.exports = ParkingLot;