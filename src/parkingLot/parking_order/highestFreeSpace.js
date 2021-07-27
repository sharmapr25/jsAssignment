class HighestFreeSpace {
  selectedParkingLot(parkingLots) {
    return parkingLots.reduce((lots, anotherLots) => {
      if (lots.hasMoreFreeSpace(anotherLots)) {
        return lots;
      }
      return anotherLots;
    });
  }
}

module.exports = HighestFreeSpace;