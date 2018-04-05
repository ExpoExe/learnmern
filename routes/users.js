var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* Get users */
router.get('/', function (req, res) {
	usersController.getAllUsers(function (users) {
		res.json(users);
	});
});

/* Add a user */
router.post('/create', usersController.createUser);

/* Update a user */
router.post('/update', usersController.updateUser);

/* Delete a user */
router.post('/delete', usersController.deleteUser);


module.exports = router;
