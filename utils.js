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

function max(numbers) {
  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}

// Not exported - dead code
function unusedFunction() {
  console.log('This function is never used');
}

module.exports = {
  sum,
  average,
  max
};

