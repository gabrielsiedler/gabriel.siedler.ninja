var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log('Serving static content at port 3000.');
