app.factory('addBook', function($http, $q, BookResource) {
	return {
		addbook: function(book) {
			var deferred = $q.defer();

			var book = new BookResource(book);
			book.$save().then(function() {	
				deferred.resolve();
			}, function(response) {
				console.log(response);
				deferred.reject(response);
			});

			return deferred.promise;
		}
	}
});