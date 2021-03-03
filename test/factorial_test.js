const { assert } = require("chai");
const factorial = require("../src/factorial");

// Testing the factorial function.
describe("Testing factorial function", () => {
  it("must be an integer argument", () => {
    const result = factorial(2);
    assert.isNumber(result);
  });
  it("must be an argument greater than or equal to 0", () => {
    const result = factorial(0);
    assert.isAtLeast(result, 0);
  });
  it("returns factorial of any number", () => {
    const result = factorial(5);
    assert.equal(120, result);
  });
});
