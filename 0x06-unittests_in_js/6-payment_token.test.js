const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("Checks the return value from the function is equal", (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({
        data: "Successful response from the API",
      });
      done();
    });
  });
});
