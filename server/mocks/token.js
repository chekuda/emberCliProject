//create to modify/define the server 
//need to install the module express in computer=>npm install express

module.exports = function(app){
	var express = require('express');
	var tokenRouter = express.Router();


	tokenRouter.post('/token', function(req,res){

		if(req.body.grant_type ==='password')
		{	//this send to the server the username and password and check the values
			if(req.body.username === "jose" && req.body.password === "jose")
			{	//if the username and password are the above ones the response will be succeded
				res.status(200).send('{"access_token": "secret token!"}');
			}
			else
			{
				res.status(400).send('{"error": "invalid_grant"}');
			}

		}
		else
		{
			res.status(400).send('{"error": "unsuported_grant_type"}');
		}
	});
	app.use('/',tokenRouter);
};