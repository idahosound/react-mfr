import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import emojipedia from "./emojipedia";

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function(x){
//     return x * 2; //doubles the number
// });

//Same as above with arrow function
// const newNumbers = numbers.map(x => x * 2);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(x){
//     return x > 10; //returns numbers greater than 10
// });

//Same as above with arrow function
// const newNumbers = numbers.filter(x => x > 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNumbers = numbers.reduce(function(accumulator, x){
//     console.log(accumulator);  // logs starting value
//     return accumulator + x;   //  adds next number
// });

//Same as above with arrow function
// const newNumbers = numbers.reduce((accumulator, x) => accumulator + x);

// //Find - find the first item that matches from an array.
// const newNumbers = numbers.find(function(x){
//     return x > 10;  // returns the first number greater than 10
// });

//Same as above with arrow function
// const newNumbers = numbers.find(x => x > 10);

// //FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(function(x){
//     return x > 10;  // returns the array index value of the first number greater than 10
// })

//Same as above with arrow function
// const newNumbers = numbers.findIndex(x => x > 10);

// console.log(newNumbers);


// Create a function that returns only the first 100 characters of the meanings of the entries
// const meanings = emojipedia.map(function(entry){
//     return entry.meaning.substring(0,100);
// });
// console.log(meanings);

ReactDOM.render(<App />, document.getElementById('root'));

