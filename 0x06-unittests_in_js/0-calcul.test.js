const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return the sum of two integers", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it("should return the sum of two floats", function () {
    assert.strictEqual(calculateNumber(1.5, 3.2), 4.7);
  });
  it("should return the sum of two floats rounded", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 5.9);
  });
});
