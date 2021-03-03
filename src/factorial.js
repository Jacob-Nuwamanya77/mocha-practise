// Factorial function.
const factorial = (n) => {
  if (!Number.isInteger(n)) {
    return "not an integer";
  }
  if (n < 0) {
    return "argument must be greater than or equal to 0";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

module.exports = factorial;
