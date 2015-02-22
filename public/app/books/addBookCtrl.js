app.controller('AddBookCtrl', function($scope, $location, addbooks, notifier) {
	$scope.addbook = function(addbooks) {
		addbooks.addbook(book).then(function() {
			notifier.success('Successful added!');
			$location.path('/');
		})
	}
});