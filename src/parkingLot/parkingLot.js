const CarIsAlreadyParkedError = require("./error/carIsAlreadyParkedError");
const carIsNotParkedError = require("./error/carIsNotParkedError");

class ParkingLot {
  constructor(parkingSize) {
    this.parkingSize = parkingSize;
    this.parkingSpace = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  park(car) {
    if (this.isParked(car)) {
      throw new CarIsAlreadyParkedError();
    }
    if (this._isSpaceAvailable()) {
      this.parkingSpace.push(car);
    }
    if (!this._isSpaceAvailable()) {
      this.observers.forEach((observer) =>
        observer.notifyWhenSpaceNotAvailable()
      );
    }
  }

  unpark(carToUnpark) {
    if (!this.isParked(carToUnpark)) {
      throw new carIsNotParkedError();
    }
    if (!this._isSpaceAvailable()) {
      this.observers.forEach((observer) =>
        observer.notifyWhenSpaceIsAvailable()
      );
    }
    this.parkingSpace = this.parkingSpace.filter(
      (car) => JSON.stringify(car) !== JSON.stringify(carToUnpark)
    );
  }

  isParked(carToFind) {
    return this.parkingSpace.find((car) => {
      return JSON.stringify(car) === JSON.stringify(carToFind);
    });
  }

  _isSpaceAvailable() {
    return this.parkingSize > this.parkingSpace.length;
  }

  _getAvailableSpace(){
    return this.parkingSize - this.parkingSpace.length;
  }

  hasMoreFreeSpace(anotherParkingLot) {
    return this._getAvailableSpace() > anotherParkingLot._getAvailableSpace();
  }
};

module.exports = ParkingLot;