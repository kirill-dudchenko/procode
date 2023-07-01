var express = require('express');
var router = express.Router();
const dbCtrl = require('../controllers/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
