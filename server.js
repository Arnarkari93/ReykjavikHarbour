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

app.get('/api/products', function (req, res) {
    var products = [
        {
            name: "Cover",
            info: "Info1",
            img: "img/cover.jpg"
        },
        {
            name: "Dark",
            info: "Info2",
            img: "img/dark.jpg"
        },
        {
            name: "Green",
            info: "Info3",
            img: "img/green.jpg"
        },
        {
            name: "tretryllir",
            info: "Info4",
            img: "img/tretryllir.jpg"
        }
    ];
    console.log("products: " + products);
    res.json(products);
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
