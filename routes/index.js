var models = require("../models"); 
exports.GetWeatherData = function(req, res, next) {
    models.TempHumidity.findAll({ limit: 200 , order: '`ID` DESC'}).then(function(weather){
        res.json(weather);
    });
};
 