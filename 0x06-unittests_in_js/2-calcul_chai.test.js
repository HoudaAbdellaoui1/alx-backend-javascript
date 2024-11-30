const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should correctly sum two rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4); // 1 + 3
            expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5); // 2 + 3
        });
    });

    describe('SUBTRACT', () => {
        it('should correctly subtract two rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4); // 1 - 5
        });
    });

    describe('DIVIDE', () => {
        it('should correctly divide two rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2); // 4 / 2
            expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2); // 6 / 3
        });

        it('should return "Error" when dividing by zero', () => {
            expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 5.5, 0.2)).to.equal('Error'); // 6 / 0
        });
    });
});
