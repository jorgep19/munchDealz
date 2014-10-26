'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();
var FBRedirectURl = '/';

router
  .get('/redirect', function(req, res){
  console.log(req.query.r);
    FBRedirectURl = req.query.r;
  res.redirect('/auth/facebook');
  })
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'public_profile', 'user_friends'],
    failureRedirect: '/signup',
    session: false
  }))

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), function(req, res) {
    req.redirectURl = FBRedirectURl;
    auth.setTokenCookie(req,res);
  });

module.exports = router;
