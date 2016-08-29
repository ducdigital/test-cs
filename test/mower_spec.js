'use strict';

const Mower = require('../core/mower');
const assert = require('assert');

describe('Mower', function() {
  describe('#move', function () {
    it('should move up', function () {
      let mow = Mower([0,0], 'N');
      mow.move('F');
      assert.equal(1, mow.getCoordinate()[1]);
    });
    it('should move down', function () {
      let mow = Mower([0,0], 'S');
      mow.move('F');
      assert.equal(-1, mow.getCoordinate()[1]);
    });
    it('should move left', function () {
      let mow = Mower([0,0], 'E');
      mow.move('F');
      assert.equal(1, mow.getCoordinate()[0]);
    });
    it('should move right', function () {
      let mow = Mower([0,0], 'W');
      mow.move('F');
      assert.equal(-1, mow.getCoordinate()[0]);
    });
  });

  describe('#rotate', function () {
    it('should rotate right', function () {
      let mow = Mower([0,0], 'W');
      mow.rotate('R');
      assert.equal('N', mow.getDirection());
    });
    it('should rotate left', function () {
      let mow = Mower([0,0], 'W');
      mow.rotate('L');
      assert.equal('S', mow.getDirection());
    });
    it('should rotate in circle', function () {
      let direction = 'N';
      let mow = Mower([0,0], direction);
      mow.rotate('L');
      mow.rotate('L');
      mow.rotate('L');
      mow.rotate('L');
      assert.equal(direction, mow.getDirection());
    });
  });
});