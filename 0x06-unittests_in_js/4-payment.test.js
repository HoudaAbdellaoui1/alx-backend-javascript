const Utils = require("./utils");
const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("sendPaymentRequestToApi uses the calculateNumber method of Utils", () => {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 10")).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
