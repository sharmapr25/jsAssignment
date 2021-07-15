const ParkingLot = require('./parkingLot');
const carIsAlreadyParkedError = require('./error/carIsAlreadyParkedError');
const carIsNotParkedError = require("./error/carIsNotParkedError");
const Observer = require('./observer');

jest.mock('./observer');

describe('parking lot', () => {
  beforeAll(() => {
    Observer.mockImplementation(() => {
      return {
        notifyWhenSpaceNotAvailable: jest.fn(),
        notifyWhenSpaceIsAvailable: jest.fn()
      };
    });
  });

  it("isParked return true when given car is parked in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };
    parkingLot.park(car);

    expect(parkingLot.isParked(car)).toBeTruthy();
  });

  it("isParked return false when given car is not parked in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };

    expect(parkingLot.isParked(car)).toBeFalsy();
  });

  it("park throw carIsAlreadyParkedError when try to park already parked car in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };

    parkingLot.park(car);
    expect(() => parkingLot.park(car)).toThrow(carIsAlreadyParkedError);
  });

  it("isParked return false when parked car is unpark from parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };

    parkingLot.park(car);
    parkingLot.unpark(car);

    expect(parkingLot.isParked(car)).toBeFalsy();
  });

  it("unpark throw carIsNotParkedError when try to unpark a car that not available in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };

    expect(() => parkingLot.unpark(car)).toThrow(carIsNotParkedError);
  });

  it("park notify owner for no space available when parking lot is full", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };
    const owner = new Observer();

    parkingLot.addObserver(owner);
    parkingLot.park(car);

    expect(owner.notifyWhenSpaceNotAvailable.mock.calls.length).toBe(1);
  });

  it("park notify owner for space is available in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };
    const owner = new Observer();

    parkingLot.addObserver(owner);
    parkingLot.park(car);
    parkingLot.unpark(car);

    expect(owner.notifyWhenSpaceIsAvailable.mock.calls.length).toBe(1);
  });

  it("park notify traffic cop for no space available when parking lot is full", () => {
    const parkingLot = new ParkingLot(1);
    const car = { number: 112 };
    const trafficCop = new Observer();

    parkingLot.addObserver(trafficCop);
    parkingLot.park(car);

    expect(trafficCop.notifyWhenSpaceNotAvailable.mock.calls.length).toBe(1);
  });

});


