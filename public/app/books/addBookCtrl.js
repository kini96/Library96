app.controller('AddBookCtrl', function($scope, $location, addBook, notifier) {
	$scope.addbook = function(book) {
		addBook.addbook(book).then(function() {
			notifier.success('Successful added!');
			$location.path('/');
		})
	}
});