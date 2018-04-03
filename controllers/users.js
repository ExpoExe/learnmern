var User = require('../models/users');

exports.createUser = function(req, res, next) {
    console.log("Attempting to create user...");
    
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        popularity: req.body.popularity,
        age: req.body.age
    });
    
    user.save(function (err) {
        if (err) {
            return next(err);
        } else {
            console.log('Success...added user.');   
        }
    });
}

exports.getUserJson = function (cb){
    User.find({}, function(err, users){
        assert.equal(null, err);
        cb(users);
    });
}