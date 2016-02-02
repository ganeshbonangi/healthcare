'use strict';

angular.module('clickeatApp').controller('SettingsController', function($scope, Auth){
    $scope.errors = {};
    $scope.submitted = false;

    $scope.Auth = Auth;
    $scope.changePassword = function(form) {

      $scope.submitted = true;

      if (form.$valid) {
        $scope.Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword).then(function () {
          $scope.message = 'Password successfully changed.';
        })['catch'](function () {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
    }
});
