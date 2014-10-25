'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RestaurantSuggestionsSchema = new Schema({
  name: String,
  votesCount: Number,
  active: Boolean
});

RestaurantSuggestionsSchema.methods.incVotes = function() {
  this.votesCount++;
};

module.exports = mongoose.model('RestaurantSuggestions', RestaurantSuggestionsSchema);
