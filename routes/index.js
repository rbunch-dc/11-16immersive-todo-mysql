var express = require('express');
var router = express.Router();
// Import config.js from the config directory. It holds our SQL creds
var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.userName,
  password : config.password,
  database : config.database
});

// After this line runs, we are connected to MySQL!
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

	//Init array as a placeholder
	var taskArray = [];

	res.render('index', { taskArray: taskArray });
});

router.post('/addNew', (req, res, next)=>{
	// res.json(req.body);
	var newTask = req.body.newTaskString;
	var taskDate = req.body.newTaskDate;
// We have a MySQL conncetion... called connection!
	var query = "INSERT INTO tasks (task_name, task_date) VALUES ('"+newTask+"','"+taskDate+"')";
	
	// res.send(query);

	connection.query(query, (error, results, field)=>{
		if (error) throw error;
		res.redirect('/');
	});


});

module.exports = router;
