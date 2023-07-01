var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name :  req.session.names});
});

router.post('/names', (req, res, next) => {
  console.log(req.body.name)

  if( !req.session.names ) {
    req.session.names = "";
  }

  req.session.names += `${req.body.name}   `

  res.render('index', { name :  req.session.names});
})

module.exports = router;
