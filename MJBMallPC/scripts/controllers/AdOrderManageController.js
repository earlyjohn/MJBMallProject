
var adOrderManageController = angular.module('adOrderManageController', []);
adOrderManageController.controller('AdOrderManageController', ['$scope', function ($scope) {
    debugger;
    $scope.userName = "";
    $scope.userPassword = "";
    $scope.loginBtn = function () {
        debugger;
        alert($scope.userName);
        var a = $("#password").val();
        alert(a);
        if ($scope.userName == "admin" && $scope.userPassword == "admin") {
            debugger;
            location.href = "update_pasword_L.html";
        } else {
            alert("密码错误");
        }
    }
}]);