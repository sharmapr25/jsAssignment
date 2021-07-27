const Observer = require('./observer');
const MostAvailable = require('./parking_order/mostAvailable');

class Attendant extends Observer {
  constructor(parkingLots, parkingOrderSelection) {
    super();
    this.parkingLots = parkingLots;
    this.availableLots = parkingLots;
    this.parkingOrderSelection = parkingOrderSelection || new MostAvailable();
  }

  park(car) {
    const selectedParkingLot = this.parkingOrderSelection.selectedParkingLot(this.availableLots);
    selectedParkingLot.park(car);
  }

  unpark(car) {
    this.parkingLots.find((parkingLot) => parkingLot.isParked(car)).unpark(car);
  }

  notifyWhenSpaceNotAvailable(parkingLot) {
    const parkingLotIndex = this.availableLots.indexOf(parkingLot);
    this.availableLots.splice(parkingLotIndex, 1);
  }

  notifyWhenSpaceIsAvailable(parkingLot) {
    this.availableLots.push(parkingLot)
  }

  static createAttendant(parkingLots, parkingOrderSelection){
    const attendant = new Attendant(parkingLots, parkingOrderSelection);
    parkingLots.forEach(parkingLot => parkingLot.addObserver(attendant));
    return attendant;
  }
}

module.exports = Attendant;