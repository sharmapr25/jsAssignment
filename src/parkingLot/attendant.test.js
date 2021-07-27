const ParkingLot = require("./parkingLot");
const Attendant = require('./attendant');
const HighestFreeSpace = require('./parking_order/highestFreeSpace');
const MostCapacity = require("./parking_order/mostCapacity");
const MostAvailable = require("./parking_order/mostAvailable");


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

  it("park parked the car in second parking lot when first parking lot is full", () => {
    const parkingLotWithOneSpace = new ParkingLot(1, "1");
    const parkingLotWithTwoSpaces = new ParkingLot(2, "2");

    const parkingLots = [parkingLotWithOneSpace, parkingLotWithTwoSpaces]
    const mostAvailableOrderSelection = new MostAvailable();

    const attendant = Attendant.createAttendant(parkingLots, mostAvailableOrderSelection);

    const car = { number: 112 };
    const carWithDifferentPlateNumber = { number: 114 };

    attendant.park(car);
    attendant.park(carWithDifferentPlateNumber);

    expect(parkingLotWithOneSpace.isParked(car)).toBeTruthy();
    expect(parkingLotWithTwoSpaces.isParked(carWithDifferentPlateNumber)).toBeTruthy();

  });

    it("park parked the car in second parking lot which has highest number of parking slot available", () => {
       const parkingLotWithOneSpace = new ParkingLot(1, "1");
       const parkingLotWithTwoSpaces = new ParkingLot(2, "2");

      const parkingLots = [parkingLotWithOneSpace, parkingLotWithTwoSpaces];
      const highestFreeSpaceOrderSelection = new HighestFreeSpace();

      const attendant = Attendant.createAttendant(
        parkingLots,
        highestFreeSpaceOrderSelection
      );
      const car = { number: 112 };

      attendant.park(car);

      expect(parkingLotWithTwoSpaces.isParked(car)).toBeTruthy();
    });

    it("park parked the car in first parking lot which has highest capacity of parking space", () => {
       const parkingLotWithOneSpace = new ParkingLot(1, "1");
       const parkingLotWithTwoSpaces = new ParkingLot(2, "2");

      const parkingLots = [parkingLotWithOneSpace, parkingLotWithTwoSpaces];
      const mostCapacityOrderSelection = new MostCapacity();

      const attendant = Attendant.createAttendant(
        parkingLots,
        mostCapacityOrderSelection
      );

      const car = { number: 112 };
      const carWithDifferentPlateNumber = { number: 114 };

      attendant.park(car);
      attendant.park(carWithDifferentPlateNumber);

      expect(parkingLotWithTwoSpaces.isParked(car)).toBeTruthy();
      expect(parkingLotWithTwoSpaces.isParked(carWithDifferentPlateNumber)).toBeTruthy();
    });
});