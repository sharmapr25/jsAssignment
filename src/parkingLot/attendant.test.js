const ParkingLot = require("./parkingLot");
const Attendant = require('./attendant');

describe('attendant', () => {
  it('park parked the car when space is available', () => {
    const parkingLot = new ParkingLot(1);
    const attendant = new Attendant([parkingLot]);
    const car = { number: 112 };

    attendant.park(car);
  });

  it("unpark unparked the car when car is available in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const attendant = new Attendant([parkingLot]);
    const car = { number: 112 };

    attendant.park(car);
    attendant.unpark(car);

  });

  //Todo this test might fail because of highest number of parking slot availability test
  it("park parked the car in second parking lot when first parking lot is full", () => {
    const parkingLot = new ParkingLot(1);
    const anotherParkingLot = new ParkingLot(2);
    const attendant = new Attendant([parkingLot, anotherParkingLot]);
    const car = { number: 112 };
    const carWithDifferentPlateNumber = { number: 114 };

    attendant.park(car);
    attendant.park(carWithDifferentPlateNumber);

    expect(parkingLot.isParked(car)).toBeTruthy();
    expect(anotherParkingLot.isParked(carWithDifferentPlateNumber)).toBeTruthy();

  });

    it("park parked the car in second parking lot which has highest number of parking slot available", () => {
      const parkingLotWithOneSpace = new ParkingLot(1);
      const parkingLotWithTwoSpaces = new ParkingLot(2);
      const parkingLots = [parkingLotWithOneSpace, parkingLotWithTwoSpaces];
      const attendant = new Attendant(parkingLots);
      const car = { number: 112 };

      attendant.park(car);

      expect(parkingLotWithTwoSpaces.isParked(car)).toBeTruthy();
    });
});