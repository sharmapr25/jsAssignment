const Observer = require('./observer');

class Attendant extends Observer {
  constructor(parkingLots) {
    this.parkingLots = parkingLots;
    this.availableLots = parkingLots;
  }

  park(car) {
    this.availableLots[0].park(car);
  }

  unpark(car) {
    this.parkingLots.find((parkingLot) => parkingLot.isParked(car)).unpark(car);
  }

  notifyWhenSpaceNotAvailable(parkingLotIndex) {
    this.availableLots.splice(parkingLotIndex, 1);
  }

  notifyWhenSpaceIsAvailable(parkingLot) {
    this.availableLots.push(parkingLot)
  }
}

module.exports = Attendant;