const ParkingLot = require('./parkingLot');

test('isParked return true when given car is parked in parking lot', () => {
  const parkingLot = new ParkingLot();
  const car = {};
  parkingLot.park(car);

  expect(parkingLot.isParked(car)).toBeTruthy();
});