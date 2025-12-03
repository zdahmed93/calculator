// Calculator class with utility functions - All in one file
class Calculator {
  constructor() {
    // No initialization needed
  }
  
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    // BUG: Missing validation for division by zero
    return a / b;
  }
  
  power(base, exponent) {
    // Could use Math.pow but this works
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result = result * base;
    }
    return result;
  }
}

// Utility functions
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0; // Should probably return null or throw error
  }
  return sum(numbers) / numbers.length;
}

// Dead code - never used
function unusedFunction() {
  console.log('This function is never used');
}

module.exports = Calculator;
module.exports.utils = { sum, average };
