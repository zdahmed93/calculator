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
    // Missing validation for division by zero
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

module.exports = Calculator;

