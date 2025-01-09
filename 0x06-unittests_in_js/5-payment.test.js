const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log ""The total is: 120" and be called once when inputs are 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
  });

  it('should log "The total is: 20" and be called once when inputs are 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify the console log message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 20")).to.be.true;
  });
});
