
var forgetPasswordController = angular.module('forgetPasswordController', []);
forgetPasswordController.controller('ForgetPasswordController', ['$scope', function ($scope) {
    debugger;
    $scope.userName = "";
    $scope.userPassword = "";
    $scope.forget_password_btn_step1 = function () {
        $(".forget_password_step1").hide();
        $(".forget_password_step2").show();
        $(".forget_password_step3").hide();
        $(".forget_password_step4").hide();
    }
    $scope.forget_password_btn_step2 = function () {
        $(".forget_password_step1").hide();
        $(".forget_password_step2").hide();
        $(".forget_password_step3").show();
        $(".forget_password_step4").hide();
    }
    $scope.forget_password_btn_step3 = function () {
        $(".forget_password_step1").hide();
        $(".forget_password_step2").hide();
        $(".forget_password_step3").hide();
        $(".forget_password_step4").show();
    }
}]);