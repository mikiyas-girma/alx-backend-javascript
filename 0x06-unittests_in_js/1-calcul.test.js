const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    assert.strictEqual(calculateNumber("SUM", 11, 3), 14);
  });
  it("should return 2", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 13, 1), 12);
  });
  it("should return 1", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 15, 2), 7.5);
  });
  it('should return "Error"', function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1, 0), "Error");
  });
});
