app.controller('MainCtrl', function($scope, BookResource) {
	$scope.books = BookResource.query();
});