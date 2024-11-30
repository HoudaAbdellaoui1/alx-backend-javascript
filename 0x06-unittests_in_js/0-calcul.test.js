const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should add two whole numbers correctly', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should round a up and add correctly', () => {
    assert.strictEqual(calculateNumber(1.6, 2), 4);
  });

  it('should round b up and add correctly', () => {
    assert.strictEqual(calculateNumber(1, 2.6), 4);
  });

  it('should round both numbers up and add correctly', () => {
    assert.strictEqual(calculateNumber(1.6, 2.6), 5);
  });

  it('should round a down and add correctly', () => {
    assert.strictEqual(calculateNumber(1.4, 2), 3);
  });

  it('should round b down and add correctly', () => {
    assert.strictEqual(calculateNumber(1, 2.4), 3);
  });

  it('should round both numbers down and add correctly', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should handle zeros correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
