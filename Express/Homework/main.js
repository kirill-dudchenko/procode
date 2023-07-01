const express = require('express');
const path = require('path')

const server = express();

server.use(express.urlencoded({extended: false}));

server.use(express.static(__dirname + '/public'));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


server.get('/', (req, res) => { 
    res.render('page')
});

server.post('/html_form_sent', (req, res) => { 
    res.send('Data was sent successfully')
    console.log(req.body.send)
});

server.listen(8000, () => {})
