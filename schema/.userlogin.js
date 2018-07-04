'use strict'

const mongoose = require('mongoose')
const database = {
	user: '',
	password: ''
}

mongoose.connect(`mongodb://${database.user}:${database.password}@ds157667.mlab.com:57667/`)
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

/* A Schema is the blueprinted organisation of the data stored in a database, Another way to view this is
like relational database with tables */

/*This is the schema(table) refering to the user having all of the fields which relate to them*/
const Users = new Schema({
	Fullname: String,
	Username: String,
	Password: String,
  Company: String
})

exports.Users = mongoose.model('Users',Users)

/*This is the films schema(table) this contains as a basic the imdb details, though will include either twitter ids for tweet reviews or
some other form of api review */
const Messages = new Schema ({
/*This will stored a record of delievery and sent messages*/

})


exports.Films = mongoose.model('MessageReport',Messages)