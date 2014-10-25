'use strict';

angular.module('munchApp')
  .service('Restaurant', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getSuggestedRestaurants = function(callback) {
      var restaurants = [
        { name: "Mochi" },
        { name: "Dragon Fly" },
        { name: "Gelato Company" }
      ];
      callback(restaurants);
    };
  });
