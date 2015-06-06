var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var host = process.env.VIRTUAL_HOST;
var port = process.env.VIRTUAL_PORT;

app.listen(port);

console.log('Serving static content at',host+':'+port);
