var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rescue', function(req, res, next) {
    res.render('rescue', { title: 'Express' });
});

router.get('/necho', function(req, res, next) {
    res.render('necho', { title: 'Express' });
});

router.get('/cleaner', function(req, res, next) {
    res.render('cleaner', { title: 'Express' });
});
module.exports = router;
