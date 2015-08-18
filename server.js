'use-scrict';
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var fs         = require('fs');
// var config     = require('./server/config.js');
// var db         = require('./server/db.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.set('superSecret', config.secret);

app.get('/', function (req, res) {
    res.sendFile(__dirname, 'public/index.html');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
