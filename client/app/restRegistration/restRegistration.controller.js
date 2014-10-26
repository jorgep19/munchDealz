'use strict';

angular.module('munchApp')
  .controller('restRegistration', function ($scope, Auth, $http) {
    var ctrl = this;
    ctrl.isLoggedIn = Auth.isLoggedIn;
    ctrl.getCurrentUser = Auth.getCurrentUser;
    ctrl.restaurant = {};
    ctrl.restaurant.workers = [];
    ctrl.submitted = false;

    ctrl.submitRest = function(form) {
      ctrl.submitted = true;
      if(form.$valid) {
        var user = ctrl.getCurrentUser();
        ctrl.restaurant.workers.push({id: user._id, name: user.name})

        $http.post('/api/restaurants/', ctrl.restaurant)
          .success(function(data, status, headers, config) {

          }).
          error(function(data, status, headers, config) {
          });
      }
    };
  });
