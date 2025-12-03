// Simple Calculator - All code in one file for minimal testing
const Calculator = require('./calculator');
const utils = Calculator.utils;

// Main application
function main() {
  const calc = new Calculator();
  
  console.log('Simple Calculator');
  console.log('================');
  
  const result1 = calc.add(5, 3);
  console.log(`5 + 3 = ${result1}`);
  
  const result2 = calc.subtract(10, 4);
  console.log(`10 - 4 = ${result2}`);
  
  // This will cause an error - division by zero
  const divResult = calc.divide(10, 0);
  console.log(`10 / 0 = ${divResult}`);
}

main();
