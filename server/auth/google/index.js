'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();
var GoogleRedirectURl = '/';

router
  .get('/redirect', function(req, res){
    console.log(req.query.r);
    GoogleRedirectURl = req.query.r;
    res.redirect('/auth/google');
  })
  .get('/', passport.authenticate('google', {
      failureRedirect: '/signup',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ],
      session: false
  }))
  .get('/callback', passport.authenticate('google', {
    failureRedirect: '/signup',
    session: false
  }), function(req, res) {
    req.redirectURl = GoogleRedirectURl;
    auth.setTokenCookie(req,res);
  });

module.exports = router;
