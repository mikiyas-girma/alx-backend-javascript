const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
  it("should log the correct total", function () {
    const consoleSpy = sinon.spy(console);
    const calculateNumberStub = sinon
      .stub(utils, "calculateNumber")
      .returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly("SUM", 100, 20)).to.be
      .true;
    expect(consoleSpy.log.calledOnceWithExactly("The total is: 10")).to.be.true;
    calculateNumberStub.restore();
    consoleSpy.log.restore();
  });
});
