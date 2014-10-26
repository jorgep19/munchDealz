'use strict';

angular.module('munchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('owners', {
        url: '/owners',
        templateUrl: 'app/owners/owners.html',
        controller: 'OwnersCtrl',
        controllerAs: 'ownersMain'
      });
  });
