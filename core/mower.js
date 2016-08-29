'use strict'

let Mower = function (initialCoordinate, initalDirection, boundingLawn) {
  
  const speed = 1;
  const allowedMoveDirection = ['F'];
  const allowedRotationDirection = ['L', 'R'];
  const allowedCardinalDirection = ['N', 'E', 'S', 'W'];

  /** 
   * Private
   */
  let init;
  let property = {
    coordinate: [0,0],
    direction: 'N',
  };
  
  /** 
   * Public getters, setters
   */
  let setDirection;
  let setCoordinate;
  let getDirection;
  let getCoordinate;

  /** 
   * Public methods
   */
  let move;
  let rotate;

  let my = {};

  /** 
   * Implemetations
   */
  move = function (direction) {
    if (allowedMoveDirection.indexOf(direction) === -1) {
      throw new Error('Bad moving direction for Mower');
    } 

    let currentCoordinate = property.coordinate.slice(0);

    if (property.direction === 'N') {
      currentCoordinate[1] += speed;
    }

    if (property.direction === 'S') {
      currentCoordinate[1] -= speed;
    }

    if (property.direction === 'E') {
      currentCoordinate[0] += speed;
    }

    if (property.direction === 'W') {
      currentCoordinate[0] -= speed;
    }
    
    if (
      !!boundingLawn && 
      typeof boundingLawn.isCoordinateInLawn === 'function' &&
      !boundingLawn.isCoordinateInLawn(currentCoordinate)
    ) {
      return my;
    }

    property.coordinate = currentCoordinate;

    return my;
  };

  rotate = function (direction) {
    if (allowedRotationDirection.indexOf(direction) === -1) {
      throw new Error('Rotation direction not implemented');
    } 

    let index = allowedCardinalDirection.indexOf(property.direction);
    let indexModifier = 0;

    if (direction === 'L') {
      indexModifier = -1;
    }

    if (direction === 'R') {
      indexModifier = 1;
    }

    let nextDirectionIndex = index+indexModifier;
    if (nextDirectionIndex >= allowedCardinalDirection.length) {
      nextDirectionIndex = 0;
    }

    if (nextDirectionIndex < 0) {
      nextDirectionIndex = allowedCardinalDirection.length-1;
    }
    
    setDirection(
      allowedCardinalDirection[nextDirectionIndex]
    );

    return my;
  };


  setDirection = function (direction) {
    if (allowedCardinalDirection.indexOf(direction) === -1) {
      throw new Error('Bad cardinal direction for Mower');
    }

    property.direction = direction;

    return my;
  };

  setCoordinate = function (coordinate) {
    if (!Array.isArray(coordinate) || coordinate.length !== 2) {
      throw new Error('Bad coordinate for Mower');
    }

    property.coordinate = coordinate;

    return my;
  };

  getDirection = function () {
    return property.direction;
  };

  getCoordinate = function () {
    return property.coordinate;
  };

  init = function () {
    setCoordinate(initialCoordinate);
    setDirection(initalDirection);
  };

  init();

  my = {
    move,
    rotate,
    setDirection,
    setCoordinate,
    getDirection,
    getCoordinate,
  };

  return my;
};

module.exports = Mower;