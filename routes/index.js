var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('Tried for index.');
    res.render('index', { 
        title: 'MERN' 
    });
});

module.exports = router;
