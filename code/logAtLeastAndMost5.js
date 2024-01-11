// Function to log numbers, starting from at least 1 up to either 5 or n, whichever is larger.
// Time complexity: O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// Function to log numbers, starting from at most 1 up to either 5 or n, whichever is smaller.
// Time complexity: O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// Retrieve the input value from the command line arguments.
const arg = process.argv[2];

// Call the logAtLeast5 and logAtMost5 functions with the provided input value.
logAtLeast5(arg);
logAtMost5(arg);