'use strict'
//prevents decleration of global variables, it also means that errors are caught rather than going silent 
const readline = require('readline-sync')
//require allows us to import a package and use it within the file of decleration 
// const followed by a variable can also be used to call other scripts making use values that they return 

//This is going to be used take the users name, as this file develops it will take the name from the url as a paramter, test the
//username given against those stored, then a password version will also be executed from here this will then give the user access to their 
//stored information, records and abilities 


//this will take the username entered it at the command line and return a value if the value matches one of the cases
//cases work in the same manner as if statements and are tested in sequence if non is matched then default is triggered.
//possible functions used in javascript, indexof this will taken a string, Then against a value you have selected which can be
//a string, array and it will return the starting position of that occurnace or its position in the array. array start at 0
// a loop is also an essential part of javascript a common one is do..while. This was carry out what is set in the do brackets {} 
// while a value is not met, such as a variable not being more than 5. Another is the for loop which works in a similar way.
//String is used to take the entry of the user and turns it into a string object 
//removing any white space by using trim
//'===' is used for Strict Equality Comparison where the result is only true if both the value and data types match.
//This is the preferred choice in all situations.'==' is used for Abstract Equality Comparison and works 
//by automatically converting both values to a common type. This can lead to obscure bugs and so should be avoided.
// if we wanted to take and value and cut it in half from a certain point we could use const space = input.indexOf(' ')
//This would find the first white space, but this could be set to a value such as the word harry. it then assigns where the word
//starts to a variable , then this is const item = input.substring(space).trim() used to take anything after that value as a 
//new string and trims and white space 
// ${} can be used to place a const into a sentence or within ""
//to create an array use const arry = [], this will create an empty array called arry 
// to add an element to the end of the arry push is used, arry.push(~the value to add~)
// error catching can be done by using a try-catch-finally statement
// try {} will test what is written within the brackets, if a error occurs it will be caught. if no error finally is used, however finally occurs either way.
// sometimes we may want to take multiple parameters, these can be given when the file is called. node file1.js dog
//the array which these parameters are held in is called argv
//to view the parameters we use console.log(process.argv )


//The below currently makes use of the commands and user inputs after the program is called, however we can change this so it takes a parameter and tests that.

console.log(process.argv)
const username = String(readline.question('your name: ')).trim()
switch(username) {
  case 'John':
    console.log('your name is John')
    break
  case 'Jane':
    console.log('your name is Jane')
    break
  default:
    console.log('unknown name')
}