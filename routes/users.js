var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var users = require('../models/userList.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('Tried for users.');
    var userJson = usersController.getUserJson;
    console.log(userJson);
    res.render('users', {title:'MERN', user:users});

});

router.post('/create', usersController.createUser);

module.exports = router;
