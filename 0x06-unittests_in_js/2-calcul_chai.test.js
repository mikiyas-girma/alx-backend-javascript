const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  it("should return 4", function () {
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
  });
  it("should return 2", function () {
    expect(calculateNumber("SUBTRACT", 3, 1)).to.equal(2);
  });
  it("should return 7.5", function () {
    expect(calculateNumber("DIVIDE", 15, 2)).to.equal(7.5);
  });
  it("should return Error", function () {
    expect(calculateNumber("DIVIDE", 0, 0)).to.equal("Error");
  });
  it('should return "Error"', function () {
    expect(calculateNumber("DIVIDE", 15, 0)).to.equal("Error");
  });
});
