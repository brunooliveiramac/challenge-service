var mongoose = require('mongoose');


//MongoDB doesn't provide a kind of validation of fields so, mongoose provide it for us.
var schema = mongoose.Schema({

	title: {
		type: String, 
		required: true
	},
	description: {
		type: String,
		required: true
	}

});

mongoose.model('Challenge', schema);