var UpdatePasswordApp = angular.module('UpdatePasswordApp', []);
UpdatePasswordApp.controller('UpdatePasswordCtrl', function ($scope) {
    alert();
    $scope.userName = "2342423";
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
});