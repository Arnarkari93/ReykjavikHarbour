'use-strict';
angular.module('ReykjavikHarbour', ['ngRoute']);

// routeProvider
angular.module('ReykjavikHarbour').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', { templateUrl: '/Views/home.html', controller: 'HomeController' })
    .otherwise({
		redirectTo: '/'
	});
}]);

// Controllers
angular.module('ReykjavikHarbour').controller('HomeController', ['$scope', function ($scope) {
    // $scope.Title = "Reykjavik Harbour";
}]);
