var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log('session: ', req.session);

    if( !req.session.counter ) {
      req.session.counter = 0;
    }

    req.session.counter++;

    res.json({ status: 'ok', counter: req.session.counter });
});

module.exports = router;
