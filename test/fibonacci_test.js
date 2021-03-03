const { assert } = require("chai");
const fibonacci = require("../src/fibonacci");

// Testing the fibonacci function.
describe("Testing the fibonacci function", () => {
  it("must be an integer argument", () => {
    const result = fibonacci(5);
    assert.isArray(result);
  });
  it("must be an argument greater than or equal to 0", () => {
    const result = fibonacci(0);
    assert.isArray(result);
  });
  it("must be an argument less than 1000", () => {
    const result = fibonacci(200);
    assert.isArray(result);
  });
  it("returns the sequence numbers less than the argument value", () => {
    const result = fibonacci(200);
    assert.isArray(result);
  });
});
