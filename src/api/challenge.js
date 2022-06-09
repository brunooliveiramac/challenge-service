//* BUSSINESS LOGIC
var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Challenge');


api.list = function(req, res){
        model  
            .find({})
            .then(function(challenges){

                res.json(challenges);
            
            }, function(error){
                res.status(500).json(error);
                console.log('Error to find Challenges..!');             
            });
};

api.add = function(req, res){

    var challenge = req.body;

    model
    .create(challenge) // <-- challenge from req
    .then(function(challenge){ //<-- challenge from db with id

        res.json(challenge);

    }, function(error){
        console.log(error);
        res.status(500).json(error);
    });
};


//exporting api
module.exports = api;
