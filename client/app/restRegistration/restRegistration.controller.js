'use strict';

angular.module('munchApp')
  .controller('restRegistration', function ($scope, Auth) {
    var ctrl = this;

    ctrl.isLoggedIn = Auth.isLoggedIn;
    ctrl.getCurrentUser = Auth.getCurrentUser;

  });
