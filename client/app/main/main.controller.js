'use strict';

angular.module('munchApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    var ctrl = this;
    ctrl.restsSuggested = [];
    ctrl.restSuggestionMessage= '';
    ctrl.showRestSuggestionError = false;
    updateRests();

    function updateRests() {
      $http.get('/api/restaurantSuggestions/').success(function(restaurantsSuggested) {
        ctrl.restsSuggested = restaurantsSuggested;
      });
    }

    ctrl.addRestaurant = function() {
      var restName = document.getElementById('suggestRestauranInput_value').value;

      if(restName === '') {
        ctrl.showRestSuggestionError = true;
        ctrl.restSuggestionMessage = 'A restaurant name is required';
      } else {
        $http.put('/api/restaurantSuggestions/'+restName)
          .success(function(data, status, headers, config) {
            ctrl.restSuggestionMessage = data;
            ctrl.showRestSuggestionError = false;
            updateRests();
        }).
          error(function(data, status, headers, config) {
            ctrl.restSuggestionMessage = 'There was a problem with your submission... Please, try again';
            ctrl.showRestSuggestionError = true;
        });
      }
    };
  });
