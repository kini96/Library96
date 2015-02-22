app.factory('addbooks', function($http, $q, BookResource) {
	return {
		addbooks: function(book) {
			var deferred = $q.defer();

			var book = new BookResource(book);
			book.$save().then(function() {
				deferred.resolve();
			}, function(response) {
				deferred.reject(response);
			});

			return deferred.promise;
		}
	}
})