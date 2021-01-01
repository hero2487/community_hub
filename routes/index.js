var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('N_top', { title: 'Community_Hub' });
});

router.get('/test', function(req, res, next) {
  res.render('N_test', { title: 'Community_Hub' });
});


module.exports = router;
