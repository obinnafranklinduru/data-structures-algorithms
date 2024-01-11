// Function to print all pairs of numbers up to n (exclusive) using nested loops.
// Time complexity: O(n^2) - quadratic complexity due to nested loops.
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Retrieve the input value from the command line arguments.
const arg = process.argv[2];

// Call the printAllPairs function with the provided input value.
printAllPairs(arg);