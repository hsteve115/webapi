//Javasscript makes use of objects which can be seen as name:value pairs
// looking like const person = {
//  first:'dave',
//  second: 'matthews'
//}
// These are called properties, such as of the object person, their properties are first and second, aluding to their name.
// The name part of Name:value pair, in the above example single qotes are needed as there is no space in the decleration of the property first or second 
//however if it was first name then it would need to appear as 'first name':'dave, 
//if we wished to retrieve first from the above object we could use person.first however if the propety had a space in its decleration it would be 
// person['first name']
//if the property doesnt exist then when called if will be undefined unless stated, say you had const age = person.age, this as it stands would be undefined
// however we can use const age = person.age || 0, so that if no age property exists then it will be  set to 0 as default 
// to modify a property we can do it the same as declaring a variable, we get the propety from the object, then use the assign expression and then a valid data type 
// person.first = "julie" or person['first name'] = 'juilian' we can also add to the object using person.age = 6 or person['age'] = 6
// three invalid reponses can be given undefined and type error, undefined will exist in cases like person.age, a type error would exist if 
//we tried to use a nonexistent object or went person.address.postcode 

//construtors

'use strict'
const readline = require("readline-sync")
function Employee(id, Name, Grade){
  const last = Name.indexOf(" ")
  const second = Name.substring(last)
  const first = Name.substring(0,last)

  this.Empid = id
  this.name = {
    "first-Name" : first,
    surname : second  
  }
  this.payGrade = Grade
  
}
//creates a brand new empty object called empl1, it then calls the 
//function which makes use of this to assign the empl1 properties as an employee
//and their conceding properties. this is the returned making a new employye as emp1

const emp1 = new Employee("001","David Band","A")

console.log(emp1)