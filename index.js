var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(3000);
console.log('listening on port 3000');