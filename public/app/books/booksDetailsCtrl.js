app.controller('BooksDetailsCtrl', function($scope, $routeParams, BookResource) {
	$scope.book = BookResource.get({id: $routeParams.id});

});