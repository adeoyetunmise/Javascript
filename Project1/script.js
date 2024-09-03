// //** Variable Declarations
// // They are containers for pieces of data

// // Ways to declare a variable
// // var, let, const

// const firstName = 'Tunmise'

// let lastName = 'Adeoye'

// console.log(firstName, lastName)
// typeof(firstName)
// let score;
// score = 1

// if (true) {
//     score = score + 1
// }
// console.log(score);
// console.log(score); 

// //Operators

// let x;
// x = 5+5
// y = 5-5
// z = 5*5
// a = 5/5
// b = 5+5

// console.log(x,y,z,a,b);
// // Template Literals
// let c;

// const name = 'Tunmise'
// const age = 41

// c = `My name is ${name} and i am ${age} years old`
// console.log(c);

// // Capitalize Challenge
// let myNewString;
// const myString = 'developer'

// myNewString = myString.charAt(0).toUpperCase() + myString.slice(1)

// console.log(myNewString); 

// // Working with numbers
// let p;
// const num = new Number(56)
// p = num.toString()
// p = num.toString().length
// p = num.toFixed(3)
// p= num.toPrecision(3)
// p= num.toExponential(2)


// p = Number.MAX_VALUE
// p = Number.MIN_VALUE

// console.log(p);

// // Math Object

// let q;
// q =Math.floor(Math.random() * 100 + 1)

// console.log(q);
 
// Number challenge
 
// let m;
// let n;
// let Sum;
// let Sub;
// let Product;
// let Quotient;
// let Remainder;


// m =Math.floor( Math.random() * 100 + 1)
// n = Math.floor(Math.random() * 50 + 1)
// Sum = m + n
// Sub = m - n
// Product = m * n
// Quotient = m / n
// Remainder = m % n


// const sumOutput =  `${m} + ${n} = ${Sum}`
// const differenceOutput = `${m} - ${n} = ${Sub}`
// const productOutput = `${m} * ${n} = ${Product}`
// const quotientOutput =`${m} / ${n} = ${Quotient}`
// const rmOutput = `${m} % ${n} = ${Remainder}`

// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

// Dates and Time

// let d;

// d = new Date();
// // Time stamp
// d = Date.now()
// d = new Date('16-04-2024')
// d = d.getTime()

// console.log(d);


// String Manipulation Functions
// Reverse a String
// JavaScript




function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString("Hello World")); // Output: "dlroW olleH"
  // Count Characters
  // JavaScript
  function countCharacters(str) {
    return str.length;
  }
  
  // console.log(countCharacters("Hello World")); // Output: 11
  // Capitalize Words
  // JavaScript
  function capitalizeWords(str) {
      // ["hello", "world"]
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  // Array Functions
  // Find Maximum and Minimum
  // JavaScript
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
  // console.log(findMin([1, 2, 3, 4, 5])); // Output: 1
  // Sum of Array
  // JavaScript
  function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  // console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  // Filter Array
  // JavaScript
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // console.log(filterArray([1, 2, 3, 4, 5], x => x > 3)); // Output: [4, 5]
  // Mathematical Functions
  // Factorial
  // JavaScript
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  // console.log(factorial(5)); // Output: 120
  // Prime Number Check
  // JavaScript
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // console.log(isPrime(5)); // Output: true
  // console.log(isPrime(4)); // Output: false
  // Fibonacci Sequence
  // JavaScript
  function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  // console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]