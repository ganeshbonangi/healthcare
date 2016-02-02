'use strict';
angular.module('clickeatApp').controller('SignupController', function($scope, Auth, $state){
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    $scope.Auth = Auth;
    $scope.$state = $state;
    $scope.register = function(form) {

      $scope.submitted = true;

      if (form.$valid) {
        $scope.Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function () {
          // Account created, redirect to home
          $scope.$state.go('main');
        })['catch'](function (err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function (error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

});

//start-non-standard
//# sourceMappingURL=signup.controller.js.map
