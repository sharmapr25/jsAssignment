const CarIsAlreadyParkedError = require("./error/carIsAlreadyParkedError");
const carIsNotParkedError = require("./error/carIsNotParkedError");

class ParkingLot {
  constructor(parkingSize, id = 1) {
    this.id = id;
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
        observer.notifyWhenSpaceNotAvailable(this)
      );
    }
  }

  unpark(carToUnpark) {
    if (!this.isParked(carToUnpark)) {
      throw new carIsNotParkedError();
    }
    if (!this._isSpaceAvailable()) {
      this.observers.forEach((observer) =>
        observer.notifyWhenSpaceIsAvailable(this)
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

  _getAvailableSpace() {
    return this.parkingSize - this.parkingSpace.length;
  }

  hasMoreFreeSpace(anotherParkingLot) {
    return this._getAvailableSpace() > anotherParkingLot._getAvailableSpace();
  }

  hasMoreCapacity(anotherParkingLot) {
    return this.parkingSize > anotherParkingLot.parkingSize;
  }

  isSameId(anotherParkingLot) {
    return this.id === anotherParkingLot.id;
  }
};


module.exports = ParkingLot;