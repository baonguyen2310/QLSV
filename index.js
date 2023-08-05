var express = require('express');
var controller = require('./controller.js');

var app = express();

app.get('/getStudentsByName', controller.getStudentsByName);

app.listen(5001);