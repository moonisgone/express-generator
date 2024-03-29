var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' });
});

router.get('/user/data', function(req, res, next) {
  res.render('userdata', { title: 'Express' });
});

module.exports = router;
