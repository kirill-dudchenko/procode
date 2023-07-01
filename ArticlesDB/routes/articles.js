var express = require('express');
var router = express.Router();
const dbCtrl = require('../controllers/db.js');

router.post('/', (req, res, next) => {
    dbCtrl.addArticle(req.body.title, req.body.text);
  // dbCtrl.findArticle('4th article');
  // dbCtrl.changeArticle('1st article', 'NewLoremIpsum');
})

module.exports = router;
