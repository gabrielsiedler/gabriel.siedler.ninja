var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8095);

console.log('Serving static content...');