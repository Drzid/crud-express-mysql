var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res) {
  res.json({
    message:'hai ini adalah object'
  });
});

module.exports = router;
