
var testControllers = angular.module('testControllers', []);
testControllers.controller('TestController', ['$scope',function ($scope) {
      $scope.FirstName = "William";
      $scope.LastName = "Gates";
      $scope.createCustomer = function () {
          alert("1");
      }
  }]);