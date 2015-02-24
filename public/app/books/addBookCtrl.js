app.controller('AddBookCtrl', function($scope, $location, addBook, notifier) {
	$scope.addbook = function(book) {
		console.log(1);
		addBook.addbook(book).then(function() {
			console.log(2);
			notifier.success('Successful added!');
			$location.path('/');
		})
	}
});