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