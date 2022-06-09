//* FILE ROUTES


module.exports = function(app) {
 		
    var api = app.api.challenge;// <-- loaded by consign

   app.route('/v1/challenges')
   .get(api.list)
   .post(api.add);
};