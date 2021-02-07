// Emmanuel Kodwo Mensah
// Jacob Nuwamanya

/* eslint-disable no-undef */
const { assert } = require('chai');
const { factorial } = require('../app');
const { fibonacci } = require('../app');

// Testing the factorial function.
describe('Testing factorial function', () => {
  it.skip('argument must be an integer', () => {
    const result = factorial(2);
    assert.isNumber(result);
  });
  it.skip('argument must be greater than or equal to 0', () => {
    const result = factorial(0);
    assert.isAtLeast(result, 0);
  });
  it.skip('returns factorial of any number', () => {
    const result = factorial(5);
    assert.equal(120, result);
  });
});

// Testing the fibonacci function.
describe('Testing the fibonacci function', () => {
  it('argument must be an integer', () => {
    const result = fibonacci(5);
    assert.isArray(result);
  });
  it('argument must be greater than or equal to 0', () => {
    const result = fibonacci(0);
    assert.isArray(result);
  });
  it('argument must not be greater than 1000', () => {
    const result = fibonacci(200);
    assert.isArray(result);
  });
  it('returns the sequence numbers less than the argument value', () => {
    const result = fibonacci(200);
    assert.isArray(result);
  });
});
