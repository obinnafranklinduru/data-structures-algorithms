// This code includes two functions to calculate the sum of integers from 1 to n,
// and measures the time taken by each function for a large input value.

// Function to calculate the sum of integers from 1 to n using a naive approach.
function addUpToNaive(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i; 
  }
  return total;
}

// Function to optimize the calculation of the sum of integers from 1 to n.
function addUpToOptimized(n) {
  return n * (n + 1) / 2;
}

// Retrieve the input value from the command line arguments.
const arg = process.argv[2];

// Calculate and display the results for both the naive and optimized functions.
const result1 = addUpToNaive(arg);
const result2 = addUpToOptimized(arg);

console.log(`input: ${arg}`);
console.log(`result (Naive): ${result1}`);
console.log(`result (Optimized): ${result2}`);

// Define a constant for one billion, used for converting time measurements.
const ONE_BILLION = 1000000000;

// Measure the time taken by the naive function for a large input value.
let t1 = process.hrtime.bigint();
addUpToNaive(100000000);
let t2 = process.hrtime.bigint();
console.log(`Naive Time elapsed: ${parseInt(t2 - t1) / ONE_BILLION } seconds`);

// Measure the time taken by the optimized function for a large input value.
let t3 = process.hrtime.bigint();
addUpToOptimized(100000000);
let t4 = process.hrtime.bigint();
console.log(`Optimized Time elapsed: ${parseInt(t4 - t3) / ONE_BILLION } seconds`);