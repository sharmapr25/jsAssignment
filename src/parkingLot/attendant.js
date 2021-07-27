const Observer = require('./observer');

class Attendant extends Observer {
  constructor(parkingLots, parkingOrderSelection) {
    super();
    this.parkingLots = parkingLots;
    this.availableLots = parkingLots;
    this.parkingOrderSelection = parkingOrderSelection;
  }

  park(car) {
    const selectedParkingLot = this.parkingOrderSelection.selectedParkingLot(this.availableLots);

    selectedParkingLot.park(car);
  }

  unpark(car) {
    this.parkingLots.find((parkingLot) => parkingLot.isParked(car)).unpark(car);
  }

  notifyWhenSpaceNotAvailable(parkingLotToRemove) {
    this.availableLots.filter(parkingLot => !parkingLot.isSameId(parkingLotToRemove))
    this.availableLots.splice(parkingLotIndex, 1);
  }

  notifyWhenSpaceIsAvailable(parkingLot) {
    this.availableLots.push(parkingLot)
  }
}

module.exports = Attendant;