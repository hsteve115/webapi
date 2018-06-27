//Here we are looking at arrow functions, these are a simplified and shorthand way of declaring functions.
//using this we can call the function again and again without having to declare it to a variable
'use strict'

const readline = require("readline-sync")
//This will create a local callable function, which will return a value to the command line
const remainder2 = (dividend, divisor) => {
  //largest integer less than or equal to a given number.
	const quotient = Math.floor(dividend / divisor)
  // so this takes the first value divides it by the second, from here a quotient is worked out with is a integrer value not floating point
  //This is then taken away from the original value which was being divided by. then returns this value to where the function was originally 
  //called from
	return dividend - quotient
}
const whatsleft = remainder2(2,5)
console.log(remainder2(22,9))
console.log(whatsleft)