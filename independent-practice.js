//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var array = ["cat", "doggie","rabbit"]
var newArray = [];
var lengths = function(array) {
    for( var i= 0; i< array.length; i++) {
    	newArray.push(array[i].length);
    }
  console.log(newArray);
}  

lengths(array);

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

var transmogrifier = function(a,b,c) {
	var sum = a+b
	return Math.pow(sum,c);
}

transmogrifier(2,3,4);

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var wordReverse = function(x) {
    var str = x
	console.log(str.split("").reverse().join(""));
}

wordReverse("zazam");

