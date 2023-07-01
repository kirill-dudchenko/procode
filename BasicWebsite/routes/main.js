const express = require('express')
const ageCalc = require('../agecalc.js')

const router = express.Router()

router.get('/', (req, res) => {

    res.render('ageCalc', {
        age: ageCalc.getAge("1995-04-03"),
    })
});

module.exports = router;