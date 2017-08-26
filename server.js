var express = require('express');
var bodyParser = require('body-parser');
var sendinblue = require('sendinblue-api');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/my_db');

var app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3000);
require('./routes')(app,sendinblue,mongoose);
