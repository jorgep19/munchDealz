'use strict';

var express = require('express');
var controller = require('./restaurantSuggestions.controller');

var router = express.Router();

router.get('/', controller.index);
router.put('/:name', controller.update);

module.exports = router;
