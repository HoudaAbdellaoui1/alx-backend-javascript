// Import required modules
const { expect } = require('chai');
const sinon = require('sinon');
const { calculateNumber } = require('./utils');  // Import calculateNumber function
const sendPaymentRequestToApi = require('./3-payment');  // Import the function to test

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    // Create a spy for the calculateNumber function
    calculateNumberSpy = sinon.spy(calculateNumber);
  });

  afterEach(() => {
    // Restore the original function after each test
    sinon.restore();
  });

  it('should call calculateNumber with the correct arguments when calculating sum', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    // Call the sendPaymentRequestToApi function
    sendPaymentRequestToApi(totalAmount, totalShipping);

    // Check that calculateNumber was called with 'SUM', 100, and 20 as arguments
    expect(calculateNumberSpy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should return the correct total sum message', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    // Call the sendPaymentRequestToApi function
    const result = sendPaymentRequestToApi(totalAmount, totalShipping);

    // Check the result contains the correct sum calculation message
    expect(result).to.equal('The total is: 120');
  });
});
