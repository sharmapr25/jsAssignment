class MostCapacity {
  selectedParkingLot(parkingLots) {
    return parkingLots.reduce((lots, anotherlots) => {
      return lots.hasMoreCapacity(anotherlots) ? lots : anotherlots;
    });
  }
}

module.exports = MostCapacity;
