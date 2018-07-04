const persistance = require('./DataPersistence.js')


/* This will be used for Anything regarding the account specifcially, such as login, new account, */


const CheckParameter = (request, Check) => new Promise( (resolve, reject) => {
	if (request.params === undefined || request.params[Check] === undefined) 
		reject(new Error(`${Check} parameter missing, task cannot be complete`))
  
	resolve()
})

//This will Check all the parameters which are needed are included, it will then Check the Account is not already in use, It will also check 
//The Business Does Not Currently Have An Account
//It will then create the account and return a message
exports.CreateAccount = (request, callback) => {
	CheckParameter(request, 'Username')
		.then(() => {
			 CheckParameter(request, 'Password')
		 })
    .then(() => {
			 CheckParameter(request, 'Name')
		 })
    .then(() => {
			 CheckParameter(request, 'Company')
		})
		.then(() => Data.CheckAccount(request))
    .then(() => Data.CreateAccount(request))
		.then( data => {
		 this.hateous = {
			 content: data,
			 Links: {
				 rel: 'self',
				 link: `http://filmapin-harrisonhendersonstevens621459.codeanyapp.com:8080/film/${request.params.Film}/${request.params.Year}`
			 }
		 }
	/* The data is then passed down to the next part of the promise which performs either callback, the first is the
	systems accepting all values passed are correct or no error was found this means that the system will not skip any of the steps*/
				callback(null,this.hateous)
			})
	 /*The catch is used whenever the code finds an error when completeting tasks or if the api pass back an error message on request*/
		.catch( err => {
			err = {
				Error: err,
				Links: {
					rel: 'self'
					,link: `http://filmapin-harrisonhendersonstevens621459.codeanyapp.com:8080/film/${request.params.Film}/${request.params.Year}`
				}

			}
			callback(err)
		})
}