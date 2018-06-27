//This will take the user inputted parameter, it will then use the try-catch-finally statement, the idea being if the user enters too many parameters 
//or too little then an error will be thrown 
'use strict'
const readline = require('readline-sync')

const Paramcount = 3
console.log(process.argv)
try {
if (process.argv.length > Paramcount) {
  throw new Error('You have entered too many parameters')
}else if (process.argv.length < Paramcount) {
   throw new Error('missing parameters')
          }
}catch(Error) {
  console.log("Incorrect: " + Error)
  return
}finally {
  console.log("Please reload")
  
}
