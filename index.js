require('dotenv').config();

var express = require('express');
var winston = require('winston');

var app = require('./app/config')(express());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => winston.info(`App is listening to port ${process.env.PORT || 3000} for connections.`));
