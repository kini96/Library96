app.factory('addbooks', function($http, $q, bookResource) {
	return {
		addbooks: function(book) {
			var deferred = $q.defer();

			var book = new bookResource(book);
			book.$save().then(function() {
				deferred.resolve();
			}, function(response) {
				deferred.reject(response);
			});

			return deferred.promise;
		}
	}
})