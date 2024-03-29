'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  address: {
    line1: String,
    line2: String,
    state: String,
    zipCode: String,
    country: String
  },
  desc: String,
  menu: [
    {
      name: String,
      desc: String,
      regPrice: Number
    }
  ],
  workers: [
    {
      id: [Schema.Types.ObjectId],
      name: String
    }
  ],
  validated: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
