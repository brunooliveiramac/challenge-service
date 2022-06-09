var express = require('express');  // <-- file name
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

//express configuration
//middleware - filters 
//make public the express instance

app.use(bodyParser.json()); // <-- module used in order to popule the body from req


//load all folders with their files .css and apis etc...  			
consign({ cwd: 'src'})
		 .include('models')
		 .then('api') 
		 .then('routes')  
		 .into(app);

module.exports = app; // <-- Export instance