'use strict';

var _ = require('lodash');
var RestaurantSuggestions = require('./restaurantSuggestions.model');

// Get list of restaurantSuggestionss
exports.index = function(req, res) {
  RestaurantSuggestions.find(function (err, restaurantSuggestions) {
    if(err) { return handleError(res, err); }
    return res.json(200, restaurantSuggestions);
  });
};

// Updates a restaurant suggestion count and if it doesn't exist creates it
exports.update = function(req, res) {
  // if(req.body._id) { delete req.body._id; }
  var restData = {};
  restData.name = req.params.name;

  RestaurantSuggestions.find({ name: restData.name}, function (err, restaurantSuggestions) {
    if (err) { return handleError(res, err); }

    var restUpdated;

    // if the restaurant has already been suggested
    if(restaurantSuggestions.length > 0) {
      // update the votes count of restaurant suggested
      restUpdated = restaurantSuggestions[0];
      console.log(restUpdated);
      restUpdated.incVotes();
    } else {
      // create restaurant with the name suggested and votes count of 1
      restData.votesCount = 1;
      restUpdated = new RestaurantSuggestions(restData);
    }

    restUpdated.save(function (err, suggestedRestaurant) {
      if (err) { return handleError(res, err); }

      res.send('Thank you for suggesting ' +
      suggestedRestaurant.name +
      ' sign up to our newsletter and we\'ll let know any updates of our relationship with them');
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
