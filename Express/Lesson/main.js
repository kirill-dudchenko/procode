const express = require('express');
const path = require('path');

const mainRoute = require('./routes/main.js');
const fileRoute = require('./routes/file.js');
const blogRoute = require('./routes/blog.js');
const testRoute = require('./routes/test.js');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.urlencoded({extended: false})); // парсит req.body, только для самых простых форматов body, для остальных нужны специальные либы
server.use(express.static(path.join(__dirname, 'public'))); // файлы в этой папке доступны всем (localhost:8000/2.png)

// routes midleware
server.use('/', mainRoute);
server.use('/file', fileRoute);
server.use('/blog', blogRoute);
server.use('/test', testRoute);

server.listen(8000);

// const {cat, id} = req.params
// ==
// const cat = req.params.cat
// const id = req.params.id

// const { query } = req
// ==
// const query = req.query


