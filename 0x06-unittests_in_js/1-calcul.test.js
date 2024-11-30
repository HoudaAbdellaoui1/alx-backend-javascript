const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should correctly sum two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4); // 1 + 3
            assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5); // 2 + 3
        });
    });

    describe('SUBTRACT', () => {
        it('should correctly subtract two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', () => {
        it('should correctly divide two rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.2), 2); // 4 / 2
            assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.5), 2); // 6 / 3
        });

        it('should return "Error" when dividing by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 5.5, 0.2), 'Error'); // 6 / 0
        });
    });
});
