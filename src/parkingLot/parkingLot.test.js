const ParkingLot = require('./parkingLot');
const carIsAlreadyParkedError = require('./error/carIsAlreadyParkedError');
const carIsNotParkedError = require("./error/carIsNotParkedError");

test('isParked return true when given car is parked in parking lot', () => {
  const parkingLot = new ParkingLot();
  const car = {'number': 112};
  parkingLot.park(car);

  expect(parkingLot.isParked(car)).toBeTruthy();
});

test("isParked return false when given car is not parked in parking lot", () => {
  const parkingLot = new ParkingLot();
  const car = { number: 112 };

  expect(parkingLot.isParked(car)).toBeFalsy();
});

test("park throw carIsAlreadyParkedError when try to park already parked car in parking lot", () => {
  const parkingLot = new ParkingLot();
  const car = { number: 112 };

  parkingLot.park(car);
  expect(() => parkingLot.park(car)).toThrow(carIsAlreadyParkedError);
});

test("isParked return false when parked car is unpark from parking lot", () => {
  const parkingLot = new ParkingLot();
  const car = { number: 112 };

  parkingLot.park(car);
  parkingLot.unpark(car);

  expect(parkingLot.isParked(car)).toBeFalsy();
});

test("park throw carIsNotParkedError when try to unpark a car that not available in parking lot", () => {
  const parkingLot = new ParkingLot();
  const car = { number: 112 };

  expect(() => parkingLot.unpark(car)).toThrow(carIsNotParkedError);
});


