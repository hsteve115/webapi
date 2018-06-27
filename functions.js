//This is in regards to having a function which is called used the const decleration, after the function has been defined. 
// it also shows how to pass value which were in array as arguments to a function.
//this takes the values of the parameters used when making the file call. This will take two numbers and work out the smaller one
// when a function is declared a signature is given this is used to suggest how many parameters it will take.
'use strict'

const readline = require("readline-sync")

function smaller(v1,v2){
  //this will take the two values
if (v1 > v2) {
  //if value one is bigger than value 2, we enter here
  console.log(v2 + " is the smaller value")
  return
}else if (v1 < v2) {
  //if value 1 is smaller then we enter here
  console.log(v1 + " is the smaller value")
  return
} else {
  //if they are the same size an error is thrown
     throw new Error('values are the same size')
}
    
}

function valuetype(a,b){
  //here we test that both the params are of the correct type, number 
  //to do this we use is not a number, which if b is not a number then the if statement is true
  if (isNaN(b)||isNaN(a)){
    throw new Error(' incorrect data types')
      } else {
        //if the params are correct and both numbers then we are here 
                 console.log("Both values meet the required Data types")

      }
}


try {
  const values = process.argv
  const testvalues = valuetype(values[2],values[3])
  const trysmaller = smaller(values[2],values[3])
   
 } catch(Error) {
   console.log(Error)
    return 
}finally{
    "completed"
}