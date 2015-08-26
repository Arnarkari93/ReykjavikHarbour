'use-strict';
angular.module('ReykjavikHarbour', ['ngRoute']);

// routeProvider
angular.module('ReykjavikHarbour').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', { templateUrl: '/Views/home.html', controller: 'HomeController' })
    .when('/AboutUs', { templateUrl: '/Views/about-us.html', controller: 'AboutController' })
    .otherwise({
		redirectTo: '/home'
	});
}]);

// Controllers
angular.module('ReykjavikHarbour').controller('HomeController', ['$scope', function ($scope) {
    $scope.Title = "Reykjavik Harbour";

    $scope.array = [1,2,3,4,5];
}]);

angular.module('ReykjavikHarbour').controller('AboutController', ['$scope', function ($scope) {
    $scope.Title = "Reykjavik Harbour";

    $scope.array = [1,2,3,4,5];
}]);
