'use strict'

const schema = require('../Schema/Accounts')


/*Add New User*/
exports.CreateAccount = request => new Promise((resolve,reject) => {
  /* This is used in order to create a new user using the passed data and then
  returns the data of the user excluding the  password for safety reasons*/
	if( !'Username' in request.params && !'Password' in request.params && !'Fullname' in request.params && !'Company' in request.params){
    /* */
		reject(new Error('The Required User Details are not in the object'))
	}

	const user = new schema.Users(request.params)

	user.save((err,user) => {
		if (err){
			reject(new Error('Was Not able to create a new user'))
		}
    /* */
		if (user){
			resolve(request.params)
		}
		reject(new Error('Unkown  data base error'))
	})
})


 /**/
exports.UpdateUserRecord = request => new Promise((resolve,reject) => {
  /*This will retrieve all the films saved by the user */

	schema.Users.findByIdAndUpdate( request.params.id , {$set: { Fullname: request.params.updateattr }},{new: true},(err,docs) => {
		if (err) reject(new Error('There was a database Error'))
		console.log(docs)
		resolve(docs)

	})

})


 /**/
exports.RemoveUserRecord = request => new Promise((resolve,reject) => {
  /*This will delete the user */

	schema.Users.remove({_id: request.params.id, Username: request.params.Username, Password: request.params.Password},(err,docs) => {
		if (docs ){
			resolve('User Deleted')
		}
		if (err) {
			reject(err)
		}
	})

})


 /**/
exports.AccountExists = request => new Promise ((resolve,reject) => {
  /*This will check to see if the users account already exists before trying to add a
  a new one, this means it will need to look through the schema for the
  users entered credentials*/

	schema.Users.find({Username: request.params.Username},(err,docs) => {
		if(docs.length){
			reject(new Error('This user already exists'))
		}
		if (err){
			reject(err)

		}

		resolve(request)
	})
})

 /**/
exports.CheckAccount = request => new Promise ((resolve,reject) => {
  /*This will check to see if the users account already exists before trying to add a
  a new one, this means it will need to look through the schema for the
  users entered credentials*/

	schema.Users.find({Username: request.params.Username},(err,docs) => {

		if(err) reject(err)
		resolve(docs)
	})
})


 /**/
exports.GetUserCredentials = request => new Promise ((resolve,reject) => {
  /* This will retrieve the users details this will use the username and password
  in order to get the details of the user which will basically be the full name,
	This needs to be altered in order to check the id, username and password or a seperate one to be created which does so
  */

	schema.Users.find({Username: request.params.Username, Password: request.params.Password}, (err,docs) => {

		if(docs.length){
	   console.log(docs[0].id)
		 resolve(docs)
		}
		if(err) reject(new Error('Database Error'))
		reject(new Error('Inavlid Username'))
	})

})
