'use strict';

angular.module('munchApp')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form, redirectURL) {
      $scope.submitted = true;
      if(!redirectURL) {
        redirectURL = '/';
      }

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then( function() {
            // Account created, redirect to home
            $location.path(redirectURL); // TODO sent to the map
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }
    };
  });
