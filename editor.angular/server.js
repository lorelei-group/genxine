var fs = require('fs');
var express = require('express');

var config = fs.readFileSync('./config.json');
var app = express();

// Configuration
app.use(express.bodyParser());

// Routes
app.get('/init', function(req, res) {
    res.send(config);
});
app.get('/browse', function(req, res) {
    var route = req.params.route;

    fs.readDir(route, function(err, files) {
    	if (err) return console.error(err);
    	res.send(files);
    });
});

app.listen(3000);
