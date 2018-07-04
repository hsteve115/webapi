/*This is where the url requests are handled by this i mean the server for the api is established and then url directories are linked to
a function of sorts*/

'use strict'

const restify = require('restify')
const server = restify.createServer()
const BusinessAccount = require('./Modules/BusinessAccount.js')
const Single = require('./Modules/SendMessage.js')
const Bulk = require('./Modules/BulkMessage.js')
const Campaign = require('./Modules/Campaign.js')



server.use(restify.fullResponse())
server.use(restify.bodyParser())
server.use(restify.queryParser())
server.use(restify.authorizationParser())

const status = {
	ok: 200,
	Created: 201,
	badRequest: 400,
	NotCreated: 303,
	NotModified: 304,
	NotFound: 305,
	NotDeleted: 306,
  NotSent:307

}

server.get('/',(req,res) => {
	res.send("")
	res.end()

})
//A browser cannot deal with post,put and delete so these are carried out using postman
//The request is the second part to the url and by using /:variablename you able to then use that
//specific data by using request.params.variblename which will pull the data put in that position of the url

//Used to create a new Business Account
server.post('/Account/:Username/:Password/:Name/:Company', (req,res) => {
	BusinessAccount.CreateAccount(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET, POST')
		if (err) {
			res.send(status.NotCreated,err)
		}
		res.send(status.ok,data)
		res.end()

	})
})
//This is used to update a users favourite by using the id to find that specific file
server.put('/favourites/:Username/:Password/:Film/:Year/:id/:updateattr', (req, res) => {
	films.UpdateFavourite(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET,PUT')
		if (err) {
			res.send(status.NotModified,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})

})

//improve
server.del('/favourites/:Username/:Password/:Film/:Year/:id', (req, res) => {
	films.DeleteFavourite(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET, DELETE')
		if (err) {
			res.send(status.NotDeleted,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
	// req.params.id
})

server.get('/favourites/:Username/:Password',(req,res) => {
	films.ShowFavourites(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})

////////////////////////////////////////////////////
server.get('/favourites/Genre/:Genre/:Username/:Password',(req,res) => {
	films.FilterFavouritesGenre(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})

////////////////////////////////////////////////////
server.get('/favourites/SortTitle/SortValue/:Username/:Password',(req,res) => {
	films.SortByTitle(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})


////////////////////////////////////////////////////
server.get('/favourites/Director/:Director/:Username/:Password',(req,res) => {
	films.FilterFavouritesDirector(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})
/////////////////////////////////////////////////
//search a film or showtimes when not a logged in user
server.get('/film/:Film/:Year', (req,res) => {
	films.SearchReview (req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})

})

server.get('/showtimes/:Postcode', (req,res) => {
	films.GetShowtimes(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET , POST')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})
////////////////////////////////////


server.post('/newaccount/:Username/:Password/:Fullname',(req,res) => {
	films.CreateUser(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET , POST')
		if (err) {
			res.send(status.NotCreated,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})

server.get('/account/:Username/:Password',(req,res) => {
	films.GetUser(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET')
		if (err) {
			res.send(status.badRequest,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})

server.del('/account/:Username/:Password/:id',(req,res) => {
	films.DeleteUser(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET , DELETE')
		if (err) {
			res.send(status.NotDeleted,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})

server.put('/account/:Username/:Password/:id/:updateattr',(req,res) => {
	films.UpdateUser(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts','GET , PUT')
		if (err) {
			res.send(status.NotModified,err)
		} else {
			res.send(status.ok,data)
		}

		res.end()

	})
})


const port = process.env.PORT || 8080

server.listen(port,err => {
	if (err){
		console.log(err)
	} else {
		console.log('App is ready')
	}
})