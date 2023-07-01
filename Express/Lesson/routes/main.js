const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { 
    req.query // гет переменные
    req.params  // когда часть URL является параметром
    req.body // данные в теле запроса

    const html = 
    `<form method="POST" action = "/htmlformsent">
        <input type = "text" name = "send">
        <button type = "submit">send</button>
    </form>`

    res.send(html)
});

router.post('/htmlformsent', (req, res) => {
    console.log('ok')
    res.send('ok')
});

router.get('/ejs', (req, res) => { 
    res.render('lalala')
});

module.exports = router;