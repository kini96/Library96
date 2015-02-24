var passport = require('passport');

module.exports = {
	login: function(req, res, next) {
		var auth = passport.authenticate('local', function(err, user) {
			if (err) return next(err);
			if (!user) {
				res.send({success: false})
			}

			req.logIn(user, function(err) {
				console.log(1);
				console.log(err);
				if (err) return next(err);
				res.send({success: true, user: user});
			})
		});

		console.log(req.user);

		auth(req, res, next);
	},
	logout: function(req, res, next) {
		req.logout();
		res.end();
	},
	isAuthenticated: function(req, res, next) {
		if (!req.isAuthenticated()) {
			res.status(403);
			res.end();
		}
		else {
			next();
		}
	},
	isInRole: function(role) {
		return function(req, res, next) {
			console.log(req.isAuthenticated());
			console.log(req.user);
			if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
				console.log('next');
				next();
			}
			else {
				console.log('123');
				res.status(403);
				res.end();
			}	
		}
	}
}