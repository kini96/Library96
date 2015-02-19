var Book = require('mongoose').model('Book');


module.exports = {
	newBooks: function(req, res, next) {
		var newBookData = req.body;
        Book.create(newBookData, function(err, book) {
            if (err) {
                console.log('Failed to register new user: ' + err);
                return;
            }
        })
	},

	getAllBooks: function(req, res, next) {
        Book.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            res.send(collection);
        })
    }  	
};