// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 

// Build the connection string 
var dbURI = 'mongodb://localhost/learnmern'; 

// Create the database connection 

mongoose.connect('mongodb://localhost:27017/learnmern').then(res => console.log(res));

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
	mongoose.connection.close(function () { 
		console.log('Mongoose default connection disconnected through app termination'); 
		process.exit(0); 
	}); 
}); 

// BRING IN YOUR SCHEMAS & MODELS
require('./users');  
