const express = require('express');
const path = require('path')

const server = express();

const mainRoute = require('./routes/main.js');

server.set('views', path.join(__dirname, 'views'));

server.set('view engine', 'ejs');

server.use(express.urlencoded({extended: false}));

server.use(express.static(__dirname + '/public'));

server.use('/main', mainRoute)

server.listen(8000, () => {})