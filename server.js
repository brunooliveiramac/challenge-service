var http = require('http');
var app = require('./src/config/express');
require('dotenv').config()
const connection = `challenge-service:${process.env.DB_PASSWORD}@challenge.wca34ns.mongodb.net/challenge?retryWrites=true&w=majority`
require('./src/config/database')(connection); 


http.createServer(app).listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});




//mongodb+srv://challenge-service:<password>@challenge.wca34ns.mongodb.net/?retryWrites=true&w=majority