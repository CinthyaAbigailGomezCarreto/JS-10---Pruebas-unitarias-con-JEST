/*
- Implement a function to calculate the factorial of a number using recursion.
  - Ensure it handles edge cases: negative numbers or non-integer inputs.

*/

function factorial (num){
    if (num < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }
    if (!Number.isInteger(num)) {
      throw new Error("Factorial is only defined for integers");
    }
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
};

module.exports = {factorial};