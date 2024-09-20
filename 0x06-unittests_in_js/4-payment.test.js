const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  it("should log the correct total", function () {
    const consoleSpy = sinon.spy(console);
    const calculateNumberStub = sinon.stub(Utils, "calculateNumber");
    calculateNumberStub.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith("SUM", 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleSpy.log.calledWith("The total is: 10")).to.be.true;
    expect(consoleSpy.log.callCount).to.be.equal(1);
    calculateNumberStub.restore();
    consoleSpy.log.restore();
  });
});
