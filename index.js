const Calculator = require('./calculator');
const utils = require('./utils');

// Main application
function main() {
  const calc = new Calculator();
  
  // Example usage
  console.log('Simple Calculator');
  console.log('================');
  
  const result1 = calc.add(5, 3);
  console.log(`5 + 3 = ${result1}`);
  
  const result2 = calc.subtract(10, 4);
  console.log(`10 - 4 = ${result2}`);
  
  const result3 = calc.multiply(6, 7);
  console.log(`6 * 7 = ${result3}`);
  
  // Using utility function
  const sum = utils.sum([1, 2, 3, 4, 5]);
  console.log(`Sum of [1,2,3,4,5] = ${sum}`);
  
  // This might cause an error - no validation
  const divResult = calc.divide(10, 0);
  console.log(`10 / 0 = ${divResult}`);
}

main();

