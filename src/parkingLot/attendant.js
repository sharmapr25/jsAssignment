const Observer = require('./observer');

class Attendant extends Observer {
  constructor(parkingLots) {
    this.parkingLots = parkingLots;
    this.availableLots = parkingLots;
  }

  park(car) {
    const availableLotWithMostFreeSpaces = this.availableLots.reduce((lots, anotherLots) => {
      if(lots.hasMoreFreeSpace(anotherLots)){
        return lots;
      }
      return anotherLots;
    })

    availableLotWithMostFreeSpaces.park(car);
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