// Function to double each element of an array and return a new array.
function double(arr) {
  // Create a new array to store the doubled values.
  let newArr = [];

  // Loop through each element of the input array and double it, then push it to the new array.
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  // Return the new array containing doubled values.
  return newArr;
}

// Retrieve the input value from the command line arguments.
const arg = process.argv[2];

// Call the double function with the provided input value and log the result.
console.log(double(arg));