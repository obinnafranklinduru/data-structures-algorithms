// Recursion

// example 1: countdown
// Iterative countdown function using a for loop
const iterativeCountdown = n => {
  for (let i = n; i >= 0; i--) {
    console.log('iterative:', i);
  }
};

// Recursive countdown function
const recursiveCountdown = n => {
  console.log('recursive:', n);
  if (n === 0) {
    return 0;  // Base case: exit recursive loop
  } else {
    return recursiveCountdown(n - 1);  // Recursive case with a different input
  }
}

const iCountdown = iterativeCountdown(5);
const rCountdown = recursiveCountdown(5);

// Design pattern- helper method recursion
// Inner recursion function, outer function to hold values
const helperCollectOddValues = arr => {
  const result = [];  // Stores values in the function's outermost scope
  
  const helper = input => {
    if (input.length === 0) return;  // Base case: terminate recursion when the input array is empty
    if (input[0] % 2 !== 0) result.push(input[0]);  // Check for odd numbers and manipulate the outer scope data
    helper(input.slice(1));  // Call itself, slicing one element off the array in each recursive call until it's empty (hits the base case)
  }

  helper(arr);  // Invoking the helper method to avoid the result value being reset every time, as it has its own scope on the stack
  return result;
}

const hOddValuesResult = helperCollectOddValues([1,2,3,4,5,6,7,8,9]);
console.log('hOddValuesResult:', hOddValuesResult);

// Design pattern- pure recursion while storing values
const pureCollectOddValues = arr => {
  let newArr = [];

  if (arr.length === 0) return newArr;  // Base case: return an empty array when the input array is empty
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);  // Recursive case: check for odd numbers

  newArr = newArr.concat(pureCollectOddValues(arr.slice(1))); // Recursively call the function with one less element and concatenate all newArr instances into one array
  return newArr;  // Return the new array when recursive calls are solved
};

const pOddValuesResult = pureCollectOddValues([1,2,3,4,5,6,7,8,9]);
console.log('pOddValuesResult:', pOddValuesResult);

/* 
Pure recursion tips:
1. Use methods like slice(), spread operator (...), concat to make copies of arrays and not mutate them, since they will be overwritten, instead of added to the call stack.
2. Strings are immutable, so use methods like slice(), substr(), or substring().
3. To make copies of objects, use Object.assign or the spread operator (...).
*/

// Recursion challenges
// Power
/*
Write a recursive function called power().
It takes a base and exponent and returns its the power of the base to the exponent.
It should mimic the functionality of Math.pow().
Don't worry about negative bases or exponents.
*/

// Iterative solution for power function
const iterativePower = (base, exponent) => {
  let result = 1;  // Need to start with 1 (identity property). If 0, will always be 0
  for (let i = 1; i <= exponent; i++) {
    result *= base; // Multiply result by base
  }
  return result;
}

// Recursive solution for power function
const power = (base, exponent) => {
  if (exponent === 0) return 1;  // Base case: return 1 when the exponent is 0
  else return base * power(base, exponent - 1);  // Recursive case: multiply base by recursive call with a decremented exponent
}

const powerResult = power(2, 8);
console.log('powerResult: ', powerResult);

const iterativePowerResult = iterativePower(2,8);
console.log('iterativePowerResult: ', iterativePowerResult);

const mathPowerResult = Math.pow(2, 8);
console.log('mathPowerResult: ', mathPowerResult);

// Factorials
/*
Write a recursive function to find the factorial of a provided number.
It accepts a number, and returns the factorial of that number.
A factorial is a product of all numbers between 0...n.
4! === 24
0! === 1
*/

// Iterative solution for factorial function
const iterativeFactorial = n => {
  let product = 1;
  for(let i = n; i > 1; i--) {
    product *= i;
  }
  return product;
}

// Recursive solution for factorial function
const recursiveFactorial = n => {
  if (n === 0 || n === 1) return 1; // Base case: return 1 when n is 0 or 1
  else return n * recursiveFactorial(n - 1);  // Recursive case: multiply n by recursive call with a decremented n
}

const rFactorialResult = recursiveFactorial(5);  // 120
const iFactorialResult = iterativeFactorial(5);  // 120

console.log('recursive factorial result:', rFactorialResult);
console.log('iterative factorial result:', iFactorialResult);

// Product of array
/*
Write a recursive function that takes in an array 
and returns the product of them all 
*/

// Iterative solution for product of array function
const iterativeProductOfArray = arr => {
  let result = 1;  // Needs to be 1 (identity property)
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

// Recursive solution for product of array function
const recursiveProductOfArray = arr => {
  const helper = (helperArr, n) => {
    if (arr.length === 0) return 1;  // Return 1 to not alter the final result, since if we return by itself, undefined will return, and we will get NaN (not a number)
    else { 
      let newNum = arr.pop();  // Remove and return the number, but won't get to element 0. Since we remove and declare we are off. 
      return n * helper(arr, newNum);  // Multiply n by n - 1 until arr[1]. Chicken and egg problem by removing AND assigning a new value. Get around it by passing in the 1st value
    }
  }
  return helper(arr, arr[0]); // Element 0 passed in since recursion doesn't reach it
}

const iProductOfArrayResult = iterativeProductOfArray([20, 3, 4, 7]);
console.log('iProductOfArrayResult: ', iProductOfArrayResult);

const rProductOfArrayResult = recursiveProductOfArray([20, 3, 4, 7]);
console.log('rProductOfArrayResult: ', rProductOfArrayResult);

// Recursive Range
/*
Write a recursive function that accepts a number (n)
and adds up all the numbers from 0 to n.
*/

// Iterative solution for sumRange function
const iterativeSumRange = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Recursive solution for sumRange function
const recursiveSumRange = n => {
  if (n === 1) {
    return 1;     // Base case: if 1, stop. Then the stack will use 1 to add to all the other numbers
  } else {
    return  n + recursiveSumRange(n - 1);  // Recursive call. Basically, adding it all backward. n + whatever n is next
  }
}

const iSumRangeResult = iterativeSumRange(5);
console.log('iSumRangeResult:', iSumRangeResult);  // 15

const rSumRangeResult = recursiveSumRange(5);
console.log('rSumRangeResult:', rSumRangeResult);  // 15

// Fibonacci sequence
/*
Write a function which accepts a number
and returns the nth number in the Fibonacci sequence. 
The sequence starts with 0, 1, 1, 2, 3, 5, 8 ... nth number.
Every number after 1, 1 is the sum of the previous two numbers.
So num is the sum of (num-1) + (num-2). 
*/
// Start with 0, 1. Add n + n+1 continuously
// 1, 1, 2, 3, 5, 8, 13 ... 
// Iterative solution for Fibonacci function
const iterativeFibonacci = n => {
  let arr = [0, 1];  // Array acts as a stack, holds numbers necessary to begin
  for (let i = 2; i < n + 1; i++){  // Start at 2 since adding n - 2 + n -1
    arr.push(arr[i - 2] + arr[i -1]);  // If starts at 1 or 0, will be out of array range
   }
   return arr[n];
}

// More intuitive to do it this way
// Recursive solution for Fibonacci function
const recursiveFibonacci = n =>  {
  if (n < 2){  // If it's 1 then return
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);  // Add all numbers in call stack starting at 1, upward
}

const iFibonacciResult = iterativeFibonacci(12);  // 144
const rFibonacciResult = recursiveFibonacci(12);  // 144

console.log('iterative Fibonacci result', iFibonacciResult);
console.log('recursive Fibonacci result', rFibonacciResult);

// Reverse
// Reverse the string input recursively
const iterativeReverse = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
};

// Recursive solution for reversing a string
const recursiveReverse = str => {
  let result = '';

  const helper = (inputStr) => {
    if (inputStr.length === 0) return '';
    result += inputStr.slice(-1);
    return helper(inputStr.slice(0, -1));
  }

  helper(str);

  return result;
};

const iReverseResult = iterativeReverse('Apple')  //ellppA
console.log('iReverseResult: ', iReverseResult);

const rReverseResult = recursiveReverse('Apple')  //ellppA
console.log('rReverseResult: ', rReverseResult);

// isPalindrome
/*
Checks if input string is a palindrome.
A palindrome is a word that reads the same if reversed.

Ex.
boob === boob       <- true
tacocat === tacocat <- true
foobar === foobar   <- false

I'd use the recursive solution above and just check if
str === recursiveReverse(str)
*/

// Iterative solution for isPalindrome function
const iterativeIsPalindrome = str => {
  if (typeof str !== 'string' || str === '') return false;  // Check if a string or an empty string
  return str === iterativeReverse(str);
}

const iIsPalindromeResult = iterativeIsPalindrome('tacocat');
console.log('iIsPalindromeResult: ', iIsPalindromeResult);

// Recursive solution for isPalindrome function
const recursiveIsPalindrome = str => {
  if (typeof str !== 'string' || str === '') return false;  // Check if a string or an empty string
  if (str.length === 1) return true; // 'I' and 'a' are words. So technically, they count
  return str === recursiveReverse(str);
}

const rIsPalindromeResult = recursiveIsPalindrome('tacocat');
console.log('rIsPalindromeResult: ', rIsPalindromeResult);

// SomeRecursive
/*
Implement a recursive version of the .some() array method
Takes an array, and a callback method.
If any of the elements return true while being passed into
call back method, the entire function returns true.
Else, false
*/

// Callback function to check if a number is odd
const isOdd = n => {
  return n % 2 !== 0;
}

// Callback function to check if a number is even
const isEven = n => {
  return n % 2 === 0;
}

// Iterative solution for the SomeRecursive function
const iterativeSome = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return true;
  }
  return false;
}

// Recursive solution for the SomeRecursive function
const recursiveSome = (arr, callback) => {
  if (arr.length === 0) return false;  // Base case aka terminating condition
  else if (callback(arr[arr.length-1])) return true; // If the last item in the array is true, return true
  return recursiveSome(arr.slice(0, -1), callback);  // Else, try again via recursion. Remove from back to avoid re-indexing array. O(n) if removed from the front. O(n) indexing * O(n) of the loop is O(n^2). Not good
}

const iSomeResultIsOdd = iterativeSome([2,3,4,1], isOdd);    // true
console.log('iSomeResult- IsOdd: ', iSomeResultIsOdd);
const iSomeResultIsEven = iterativeSome([1,3,7,9], isEven);  // false
console.log('iSomeResult- IsEven: ', iSomeResultIsEven);

const rSomeResultIsOdd = recursiveSome([2,2,4,4], isOdd);    // false
const rSomeResultIsEven = recursiveSome([1,2,3,4], isEven);  // true
console.log('rSomeResult- IsOdd: ', rSomeResultIsOdd);
console.log('rSomeResult- IsEven: ', rSomeResultIsEven);

// flatten
/*
Write a recursive function that flattens 
a two-dimensional array (array of arrays) 
into a one-dimensional array.
*/

// Old code. Standard, but not as elegant
// Iterative solution for flattening a two-dimensional array
const iterativeFlattenOld = arr => {
  let result = [];

  const innerLoop = xArr => {
    for(let j = 0; j < xArr.length; j++) { 
      result.push(xArr[j]);
    }
  }

  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    Array.isArray(element) 
      ? innerLoop(element)
      : result.push(element)
  }

  return result;
}

// Using forEach() array iterators makes the code more concise
const iterativeFlatten = arr => {
  let result = [];

  // Double loop, but no way around it O(n^2)
  arr.forEach(d1 => {
    Array.isArray(d1)                       // If it's an array 
      ? d1.forEach(d2 => result.push(d2))   // Loop over the second dimension and add it to the result
      : result.push(d1);                    // Else loop over the first dimension and add it to the result
  });
  
  return result;
}

// Recursive helper function for flattening with old approach
const recursiveFlattenOldHelper = arr => {
  let result = [];

  const helper = d1 => {
    if (d1.length === 0) return;           // Base case 
    else if (Array.isArray(d1[0])) {       // Check if arr[0] is an array
      helper(d1[0]);                       // If so, send arr[0] back
    } else {
      result.push(d1[0]);                  // If not an array, add to result
    } 
    helper(d1.slice(1)); //  // Call again and decrement array by 1, till no more elements left in either outer or inner loop
  }

  helper(arr);

  return result;
}

// Recursive helper function for flattening with a new approach
const recursiveFlattenNewHelper = arr => {
  let result = [];

  const helper = d1 => {
    if (d1.length === 0) return;     // Base case 
   
    Array.isArray(d1[0])            // Check if arr[0] is an array
      ? helper(d1[0])               // If so, send arr[0] back
      : result.push(d1[0]);         // If not an array, add to result
    
    helper(d1.slice(1)); //  // Call again and decrement array by 1, till no more elements left in either outer or inner loop
  }

  helper(arr);

  return result;
}

// Better design pattern - pure recursive function for flattening
const recursiveFlatten = arr => {
  if (arr.length === 0) return [];           // Base case 
  
  let result = [];

  Array.isArray(arr[0])                     // Check if the element is a sub-array  
    ? result = recursiveFlatten(arr[0])     // If so, send it back    
    : result.push(arr[0]);                  // If not, add to the array

  return result.concat(recursiveFlatten(arr.slice(1)));  // Pattern is to reduce the array by one with slice(1), then concatenate all values in the stack to the result and return
}

const iFlattenResult = iterativeFlatten([63, 92, 4, [90, 124]]);
console.log('iFlattenResult: ', iFlattenResult);

const rFlattenResult = recursiveFlatten([[63], [92, 4], [90, 124]]);
console.log('rFlattenResult: ',rFlattenResult);


// capitalizeFirst
/*
Write a recursive function that, given an array of strings,
capitalizes the first letter of every string in the array.
*/

// Iterative solution for capitalizing the first letter of each string in an array
const iterativeCapitalize = arr =>  {
  return arr.map(el => {
    return el.replace(el[0], el[0].toUpperCase());  // Better approach
  });
}

// Recursive solution for capitalizing the first letter of each string in an array            
const recursiveCapitalize = arr => {             
  let result = [];
  if (arr.length === 0) return arr;   // Base case 
  result.push(arr[0].replace(arr[0][0], arr[0][0].toUpperCase()));
  return result.concat(recursiveCapitalize(arr.slice(1))) // Not an ideal solution for large datasets because the array has to re-index if an element is removed from the front.
}

const iCapitalizeResult = iterativeCapitalize(['hello', 'world','capitalism', 'science']);
console.log('iCapitalizeResult: ',iCapitalizeResult);

const rCapitalizeResult = recursiveCapitalize(['hello', 'world','capitalism', 'science']);
console.log('rCapitalizeResult: ',rCapitalizeResult);

// capitalizeWords
/*
Write a recursive function that, given an array of words,
returns a new array containing each word capitalized.
*/
const iterativeCapitalizeWord = arr =>  {
  return arr.map(el => {
    return el.replace(el, el.toUpperCase());  // Better approach
  });
}

// Recursive solution for capitalizing each word in an array            
const recursiveCapitalizeWord = arr => {             
  let result = [];
  if (arr.length === 0) return arr;   // Base case 
  result.push(arr[0].replace(arr[0], arr[0].toUpperCase()));
  return result.concat(recursiveCapitalizeWord(arr.slice(1))) // Not an ideal solution for large datasets because the array has to re-index if an element is removed from the front.
}

const iCapitalizeWordResult = iterativeCapitalizeWord(['hello', 'world','capitalism', 'science']);
console.log('iCapitalizeWordResult: ', iCapitalizeWordResult);

const rCapitalizeWordResult = recursiveCapitalizeWord(['hello', 'world','capitalism', 'science']);
console.log('rCapitalizeWordResult: ',rCapitalizeWordResult);

// nestedEvenSum
/*
Write a recursive function that returns 
the sum of all even numbers in an object
which MAY contain nested objects
*/

// Recursive solution to find the sum of all even numbers in an object
const recursiveNestedEvenSum = obj => {
  const isEven = n => n % 2 === 0;
  const isNum = n => typeof n === 'number';
  const isObj = o => typeof o === 'object' && typeof o !== null;
  const objArr = o => Object.values(o);                          // Get prop's value from object
  let arr = objArr(obj);
  let sum = 0;

  const helper = arr => {
    arr.forEach(el => {           
      isNum(el) && isEven(el) 
        ? sum += el
        : isObj(el) ? helper(objArr(el)) : undefined;
    });
  }
  helper(arr);
  return sum;
}

const rNestedEvenSum = recursiveNestedEvenSum(obj2);
console.log('rNestedEvenSum: ', rNestedEvenSum); 

// stringifyNumbers
/*
Write a recursive function 
which takes in an object,
finds all the values which are numbers,
and converts them to strings. 
*/

// Helper function using JSON parsing for stringifyNumbers
const stringifyNumbersUsingParsing = obj => {
  const newObj = obj => { 
    let regex = /[0-9]+/g;
    let str = JSON.stringify(obj)
      .replace(regex, x => `"${x}"`);
    let fixedObj = JSON.parse(str);
    return fixedObj;
  }
  return newObj(obj);
}

// Mutating recursive solution to stringify numbers
const mRecursiveStringifyNums = obj => {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {   // Check if object
      recursiveStringifyNums(obj[prop]); // Recursive part
    } 
    else if (typeof obj[prop] === 'number') obj[prop] = obj[prop].toString();
    // Otherwise, don't mutate
  }
  return obj;
}

// Non-mutating recursive solution to stringify numbers
const recursiveStringifyNums = obj => {
  let o = Object.assign({}, obj);  // Declared outside the scope of recursion to keep memory of changes and avoid resets

  const helper = o => {  // Needs helper() with value declared outside recursion. If not, recursion will reset the value since it's when defined at the start.
    for (let prop in o) {
      if (typeof o[prop] === 'object' && o[prop] !== null) {   // Check if object
        helper(o[prop]); // Recursive part
      } 
      else if (typeof o[prop] === 'number') o[prop] = o[prop].toString();
      // Otherwise, don't mutate
    }
    return o;
  }
  return helper(o);
}

const pStringifyNumbers = stringifyNumbersUsingParsing(obj2);
console.log('pStringifyNumbers: ', pStringifyNumbers); 

const rStringifyNumbers = recursiveStringifyNums(obj2);
console.log('rStringifyNumbers: ',rStringifyNumbers); 

// collectStrings
/*
Write a recursive function 
called collectStrings an object 
and returns 
which accepts an array of all the values of the object 
with type string
*/

// Recursive solution to collect all strings in an object
const recursiveCollectStrings = obj => {
  let stringArr = [];

  const helper = o => {
    for (let prop in o) {
      if (typeof o[prop] === 'string') stringArr.push(o[prop]);  // Base case: if string, collect in array 
      else if (typeof o[prop] === 'object' && typeof o[prop]!== null) helper(o[prop]);  // If object, recurse
    }
  }
  helper(obj);
  return stringArr;
}

const rCollectStringsResults = recursiveCollectStrings(objCollectString);
console.log('rCollectStringsResults: ', rCollectStringsResults);

/*
Note:
Although not considered a data structure itself, recursion is instrumental in their implementation.

Recursion is employed when a data structure exhibits self-similarity, as seen in structures like a binary search tree. Refer to the find() implementation of the binary search tree in trees.js for a practical example.

Definition:
Recursion is a process, typically implemented as a function, that calls itself.

Use:
It involves repeatedly applying the same process to smaller portions of a problem until reaching an endpoint.

Joke:
To understand recursion, one must first grasp recursion.

Benefits:
Once understood, recursion simplifies problem-solving. There is no performance benefit to using recursion; in some cases, an iterative (looping) approach might be faster. The appeal of recursion lies in its simplicity.

Real-world use cases:
1. JSON.parse / JSON.stringify
2. document.getElementById and DOM traversal algorithms
3. Object traversal
4. Commonly observed in tree and graph data structures for traversals

Recursion Requirements:
1. Base case (terminating case) to avoid infinite loops.
2. Recursive case, denoting the scenario where the function calls itself with different input.

How does it work?
Recursive functions leverage the "call stack," which follows the Last In, First Out (LIFO) principle. For a visual representation, see stack.js.

During program execution, it is placed (pushed) onto the programming language memory's stack. Upon termination, it is popped off the stack. The programming language's stack serves as a linear data structure for organizing function executions and variables.

The same variable may have different contexts (due to different function instances) in the stack.

A recursive function pushes instances of itself onto the stack until the base case is reached. In case of an infinite loop, the stack becomes overloaded, leading to a stack overflow error.

Call function -> Pushes function onto the stack
Call return -> Pops function off the stack

Functions are pushed onto the call stack, waiting for a value, until the base case is encountered, returning a value. Subsequently, the stack is dismantled (popping) using the values provided by each function to the one below it on the stack.

Where things can go wrong:
1. No base case added - leading to an infinite loop.
2. Failure to decrement the returning variable - resulting in an infinite loop.
3. Forgetting to return - preventing the loop from starting.
4. Returning the wrong thing - yielding incorrect answers.
5. Using console.log instead of return - causing no return and resulting in an infinite loop.

Analogies:
1. Conveyor Belt:
   Envision it as a temporary conveyor belt line extending across many people. When the final person reaches the destination and receives the goods, they pass it to the next person, who adds something and passes it to the subsequent person. This cycle continues until the last person obtains the final value.

2. Game of Telephone:
   Consider it as a temporary game of telephone. The line is formed temporarily, with each person waiting for information from the person before them. Data is received and manipulated by each person, and when this occurs, their job and order in the sequence are completed.

Great Resources:
1. freeCodeCamp
   [How Recursion Works: Explained with Flowcharts and a Video](https://medium.com/free-code-camp/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9)
*/
