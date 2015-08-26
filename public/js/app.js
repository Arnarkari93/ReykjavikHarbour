'use-strict';
angular.module('ReykjavikHarbour', ['ngRoute']);

// routeProvider
angular.module('ReykjavikHarbour').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', { templateUrl: '/Views/home.html', controller: 'HomeController' })
    .when('/AboutUs', { templateUrl: '/Views/about-us.html', controller: 'AboutController' })
    .when('/Products', { templateUrl: 'Views/products.html', controller: 'ProductsController' })
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

angular.module('ReykjavikHarbour').controller('ProductsController', ['$scope', function ($scope) {
    $scope.Title = "Reykjavik Harbour";

    $scope.products = [
        {
            name: "Vara1",
            info: "Info1",
            img: "img/cover.jpg"
        },
        {
            name: "Vara2",
            info: "Info2",
            img: "img/cover.jpg"
        },
        {
            name: "Vara3",
            info: "Info3",
            img: "img/cover.jpg"
        },
        {
            name: "Vara4",
            info: "Info4",
            img: "img/cover.jpg"
        }
    ];
}]);
