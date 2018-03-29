var express = require('express');
var router = express.Router();
var ud = require('../models/userList.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('Tried for users.');
    res.render('users', { 
        title: 'MERN',
        users: ud
    });
});

module.exports = router;
