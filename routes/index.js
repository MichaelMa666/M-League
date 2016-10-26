var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/getVideo', function(req, res, next){
	res.jsonp({});
})

module.exports = router;
