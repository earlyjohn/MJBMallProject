
angular.module('myApp1', ['ngRoute', 'loginController', 'registerController', 'forgetPasswordController',]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: '/views/login.html',
        controller: 'LoginController'
    })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'RegisterController'
        })
        .when('/forgetPassword', {
            templateUrl: '/views/forgetPassword.html',
            controller: 'ForgetPasswordController'
        })
        .otherwise({
            templateUrl: '/views/login.html',
            controller: 'LoginController'
    });
}]);