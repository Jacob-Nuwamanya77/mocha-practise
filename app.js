// Emmanuel Kodwo Mensah
// Jacob Nuwamanya

const compute = {};
// Factorial function.
compute.factorial = (n) => {
  if (!Number.isInteger(n)) {
    return 'not an integer';
  }
  if (n < 0) {
    return 'argument must be greater than or equal to 0';
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * compute.factorial(n - 1);
};
// Fibonacci function.
compute.fibonacci = (n) => {
  if (!Number.isInteger(n)) {
    return 'argument is not an  integer';
  }
  if (n < 0) {
    return 'argument must be greater than or equal to 0';
  }
  if (n > 1000) {
    return 'argument should not be greater than 1000';
  }
  // Create array with the starting numbers in the sequence.
  const result = [0, 1];
  while (result[result.length - 1] + result[result.length - 2] < n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
};

module.exports = compute;
