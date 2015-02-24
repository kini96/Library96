var passport = require('passport'),
	auth = require('./auth'),
	mongoose = require('mongoose'),
	controllers =require('../controllers'),
	addbook = require('./addbook');

var User = mongoose.model('User');
module.exports = function(app) {

	app.get('/api/users', auth.isInRole('admin'), function(req, res) {
		User.find({}).exec(function(err, collection) {
			if (err) {
				console.log('Users could not be loaded: ' + err);
			}

			res.send(collection);
		})
	});


	app.post('/api/books', controllers.books.newBooks);
	app.get('/api/books', controllers.books.getAllBooks);
	app.get('/api/books/:id', controllers.books.getBookById);
	
	app.get('/partial/:partialArea/:partialName', function(req, res){
    	res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
	});

	app.post('/login', auth.login);
	app.post('/logout', auth.logout);

	app.get('/api/*', function(req, res){
		res.status(404);
		res.end();
	})

	app.get('*', function(req, res) {
		res.render('index', {currentUser: req.user});
	});
}