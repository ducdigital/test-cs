'use strict'

let Lawn = function (lrCoordinate, tlCoordinate) {
  /**
   * Public
   */
  let isCoordinateInLawn;

  if (!Array.isArray(lrCoordinate) || lrCoordinate.length !== 2) {
    throw Error('Malformed start coordinate');
  }
  if (!Array.isArray(tlCoordinate) || tlCoordinate.length !== 2) {
    throw Error('Malformed end coordinate');
  }

  isCoordinateInLawn = function (coordinate) {
    if( 
      coordinate[0] > Math.max(lrCoordinate[0], tlCoordinate[0]) ||
      coordinate[0] < Math.min(lrCoordinate[0], tlCoordinate[0])
    ) {
      return false;
    }

    if( 
      coordinate[1] > Math.max(lrCoordinate[1], tlCoordinate[1]) ||
      coordinate[1] < Math.min(lrCoordinate[1], tlCoordinate[1])
    ) {
      return false;
    }

    return true;
  };

  return {
    isCoordinateInLawn
  }
};

module.exports = Lawn;