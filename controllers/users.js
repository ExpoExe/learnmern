var Users = require('../models/users');
var assert = require('assert');

module.exports.getAllUsers = function (cb) {
	Users.find({}, function (err, users) {
		assert.equal(null, err);
		cb(users);
	});
};

module.exports.createUser = function (req, res, next) {
	console.log('Attempting to create user...');

	var user = new Users({
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
			res.redirect('/users');
		}
	});
};

module.exports.updateUser = function (req, res, next) {
	console.log('Attempting to update user...');
	if (Object.keys(req.body._id).length === 0) {
		console.log('No ID!');
		return;
	}

	var query = { '_id': req.body._id };
	var update = {
		$set: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			popularity: req.body.popularity,
			age: req.body.age
		}
	};
	Users.updateOne(query, update, function (err) {
		if (err) {
			return next(err);
		} else {
			console.log('Success...updated user.');
			res.redirect('/users');
		}
	});
};

module.exports.deleteUser = function (req, res, next) {
	console.log('Attempting to delete user...');
	Users.findByIdAndRemove(req.body.id, function (err) {
		if (err) return next(err);
		console.log('Success...deleted user.');
		res.redirect('/users');
	});

};