var models = require("./models");
var routes = require("./routes");
var express = require('express');
var http = require('http');
var app = express();

app.set('port', 3000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.send('Hello World!');
});

app.get('/weather', routes.GetWeatherData);

models.sequelize.sync().then(
function()
 {
    http.createServer(app).listen(app.get('port'),
	function()
	{
		console.log('Express server listening on port ' + app.get('port'));
	}
  )
 }
);
 
