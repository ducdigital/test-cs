'use strict';

const Lawn = require('../core/lawn');
const assert = require('assert');

describe('Lawn', function() {
  describe('Error handling', function () {
    it('should throw error if invalid LR coordinate', function() {
      assert.throws(function (argument) {
        let lawn = new Lawn([1]);
      }, Error, "Error thrown");
    });

    it('should throw error if invalid TL coordinate', function() {
      assert.throws(function (argument) {
        let lawn = new Lawn([0,0], [1]);
      }, Error, "Error thrown");
    });
  });

  describe('#isCoordinateInLawn()', function () {
    it('[0,0] should be in side [[0,0], [0,0]]', function() {
      let lawn = new Lawn([0,0], [0,0]);
      assert.equal(true, lawn.isCoordinateInLawn([0,0]));
    });

    it('[0,0] should be outside [[0,1], [0,1]]', function() {
      let lawn = new Lawn([0,1], [0,1]);
      assert.equal(false, lawn.isCoordinateInLawn([0,0]));
    });

    it('[-1,-1] should be outside [[0,0], [0,0]]', function() {
      let lawn = new Lawn([0,0], [0,0]);
      assert.equal(false, lawn.isCoordinateInLawn([-1,-1]));
    });

    it('[2,2] should be outside [[0,0], [1,1]]', function() {
      let lawn = new Lawn([0,0], [1,1]);
      assert.equal(false, lawn.isCoordinateInLawn([2,2]));
    });

    it('[1,1] should be inside [[0,0], [2,2]]', function() {
      let lawn = new Lawn([0,0], [2,2]);
      assert.equal(true, lawn.isCoordinateInLawn([1,1]));
    });
  });
});