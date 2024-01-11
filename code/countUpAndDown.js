// Function to count up from 0 to n and then count down from n-1 to 0, with console logs for each step.
function countUpAndDown(n) {
  console.log("Going up!");

  // Loop to count up from 0 to n-1.
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  // Indicate reaching the top and starting the countdown.
  console.log("At the top!\n Going down...");

  // Loop to count down from n-1 to 0.
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  // Indicate completing the countdown.
  console.log("Back down. Bye!");
}

// Retrieve the input value from the command line arguments.
const arg = process.argv[2];

// Call the countUpAndDown function with the provided input value.
countUpAndDown(arg);