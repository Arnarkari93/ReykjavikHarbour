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

// Factories
angular.module('ReykjavikHarbour').factory('Repo', [
'$rootScope',
'$http',
function ($rootScope, $http) {
    var url = 'http://localhost:3000/api/';
    return {
        getProducts : function () {
            return $http.get(url + 'products');
        }
    };
}]);

// Controllers
angular.module('ReykjavikHarbour').controller('HomeController', ['$scope', 'Repo', function ($scope, Repo) {
    $scope.Title = "Reykjavik Harbour";

    // Get all the products for the server side (server.js)
    Repo.getProducts().success(function (products) {
        $scope.products = products;

        // Get a random product
        var index = Math.floor(Math.random() * products.length);
        $scope.selectedProduct = products[index];

        // Set the background image
        $(".home").css("background-image", "url("+ $scope.selectedProduct.img + ")");
    }).error(function() {
        console.log("Failed to load products!");
    });


}]);

angular.module('ReykjavikHarbour').controller('AboutController', ['$scope', 'Repo', function ($scope, Repo) {
    $scope.Title = "Reykjavik Harbour";

    $scope.array = [1,2,3,4,5];

}]);

angular.module('ReykjavikHarbour').controller('ProductsController', ['$scope', 'Repo', function ($scope, Repo) {
    $scope.Title = "Reykjavik Harbour";

    Repo.getProducts().success(function (products) {
        console.log(products);
        $scope.products = products;
    }).error(function() {
        console.log("Failed to load products!");
    });
}]);
