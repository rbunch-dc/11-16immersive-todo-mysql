var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	//Init array as a placeholder
	var taskArray = [];

	res.render('index', { taskArray: taskArray });
});

module.exports = router;
