'use strict';

angular.module('munchApp')
  .controller('MainCtrl', function ($scope, $http, Restaurant) {
    var ctrl = this;
    ctrl.restaurants = [];
    ctrl.newRestaurant = "";

    Restaurant.getSuggestedRestaurants(function(restaurantsData) {
      ctrl.restaurants = restaurantsData;
    });

    ctrl.addRestaurant = function() {
      alert("yep");
    };

    // Socket.io example
    // $http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //  socket.syncUpdates('thing', $scope.awesomeThings);
    //});
    //
    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('thing');
    //});
  });
