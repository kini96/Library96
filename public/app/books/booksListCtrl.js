app.controller('BooksListCtrl', function($scope, BookResource) {
	$scope.books = BookResource.query();
});