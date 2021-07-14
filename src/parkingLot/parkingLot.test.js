const ParkingLot = require('./parkingLot');
const carIsAlreadyParkedError = require('./carIsAlreadyParkedError');

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


