const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToAPI = require("./5-payment");

describe("sendPaymentRequestToAPI", function () {
  let consoleSpy;

  beforeEach(function () {
    if (!consoleSpy)
        consoleSpy = sinon.spy(console);
  });

  this.afterEach(function () {
    consoleSpy.log.resetHistory();
  });

  it('checks the log equals "The total is: 120"', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.log.calledWith("The total is: 120")).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });

  it('checks the log equals "The total is: 20"', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.log.calledWith("The total is: 20")).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });
});
