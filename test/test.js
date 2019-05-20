'use strict';
var expect = require('chai').expect;
var index = require('../dist/index');
describe('set-distance test', () => {
    it('SorensenDice should return 0.7142857142857143', () => {
        var sc = new index.SorensenDice(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
        expect(sc).to.equal(0.7142857142857143);
    });

    it('Jaccard should return 0.5555555555555556', () => {
        var jc = new index.Jaccard(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
        expect(jc).to.equal(0.5555555555555556);
    });

    it('Ochiai should return 0.7216878364870323', () => {
        var oc = new index.Ochiai(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
        expect(oc).to.equal(0.7216878364870323);
    });

    it('Overlap should return 0.8333333333333334', () => {
        var ov = new index.Overlap(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
        expect(ov).to.equal(0.8333333333333334);
    });

    it('Levenshtein should return 3', () => {
        var ld = new index.Levenshtein(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
        expect(ld).to.equal(3);
    });
});