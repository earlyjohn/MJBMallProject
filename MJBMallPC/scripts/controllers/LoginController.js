
var loginController = angular.module('loginController', []);
loginController.controller('LoginController', ['$scope', function ($scope) {
    debugger;
    $scope.userName = "";
    $scope.userPassword = "";
    $scope.loginBtn = function () {
        var a = $scope.userName;
        debugger;
        if ($scope.userName == "admin" && $scope.userPassword == "admin") {
            location.href = "views/homePage.html";
        } else {
            alert("密码错误");
        }
    }
}]);