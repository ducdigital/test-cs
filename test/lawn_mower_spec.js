'use strict';

const Mower = require('../core/mower');
const Lawn = require('../core/lawn');
const assert = require('assert');

describe('Mower on a Lawn test', function() {
  let lawn = new Lawn([0,0], [5,5]);

  describe('#Bounding test', function () {
    it('should only run in bounding lawn area', function () {
      let mow = Mower([0,0], 'N', lawn);
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.rotate('R');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      mow.move('F');
      assert.equal(5, mow.getCoordinate()[1]);
      assert.equal(5, mow.getCoordinate()[0]);
    });
  });

  describe('#Mower sequence tests', function () {
    describe('#Mower 1 [1,2], N', function () {
      it('should run sequence `LFLFLFLFF` result in [1,3] N', function () {
        let mow = Mower([1,2], 'N', lawn);
        
        mow.rotate('L');
        mow.move('F');
        mow.rotate('L');
        mow.move('F');
        mow.rotate('L');
        mow.move('F');
        mow.rotate('L');
        mow.move('F');
        mow.move('F');

        assert.equal(1, mow.getCoordinate()[0]);
        assert.equal(3, mow.getCoordinate()[1]);
        assert.equal('N', mow.getDirection());
      });
    });

    describe('#Mower 2 [3,3], E', function () {
      it('should run sequence `FFRFFRFRRF` result in [5,1] E', function () {
        let mow = Mower([3,3], 'E', lawn);
        
        mow.move('F');
        mow.move('F');
        mow.rotate('R');
        mow.move('F');
        mow.move('F');
        mow.rotate('R');
        mow.move('F');
        mow.rotate('R');
        mow.rotate('R');
        mow.move('F');

        assert.equal(5, mow.getCoordinate()[0]);
        assert.equal(1, mow.getCoordinate()[1]);
        assert.equal('E', mow.getDirection());
      });
    });
  });
});