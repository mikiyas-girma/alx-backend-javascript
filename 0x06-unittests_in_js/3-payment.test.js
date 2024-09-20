const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
  it("should log the correct total", function () {
    const consoleSpy = sinon.spy(utils);
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calculateNumber("SUM", 100, 20)).to.equal(120);
    expect(consoleSpy.calculateNumber.callCount).to.equal(2);
    consoleSpy.calculateNumber.restore();
  });
});
