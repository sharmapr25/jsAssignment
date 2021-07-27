const parkingOrderSelection = {
  MOST_AVAILABLE: (parkingLots) => {
    return parkingLots[0];

  },
  HIGHEST_FREE_SPACE: (parkingLots) => {
    return parkingLots.reduce((lots, anotherLots) => {
        if (lots.hasMoreFreeSpace(anotherLots)) {
          return lots;
        }
        return anotherLots;
      });
  },
  MOST_CAPACITY: (parkingLots) => {
    return parkingLots.reduce((lots, anotherlots) => {
        return lots.hasMoreCapacity(anotherlots)? lots: anotherlots;
    })
  },
};

Object.freeze(parkingOrderSelection);

module.exports = parkingOrderSelection;