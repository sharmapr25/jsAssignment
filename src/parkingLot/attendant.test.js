const ParkingLot = require("./parkingLot");
const Attendant = require('./attendant');

describe('attendant', () => {
  it('park parked the car when space is available', () => {
    const parkingLot = new ParkingLot(1);
    const attendant = new Attendant(parkingLot);
    const car = { number: 112 };

    attendant.park(car);
  });

  it("unpark unparked the car when car is available in parking lot", () => {
    const parkingLot = new ParkingLot(1);
    const attendant = new Attendant(parkingLot);
    const car = { number: 112 };

    attendant.park(car);
    attendant.unpark(car);

  });
});