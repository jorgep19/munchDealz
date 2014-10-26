'use strict';

angular.module('munchApp')
  .controller('OwnersCtrl', ['Auth', '$window', function (Auth, $window) {
    var ctrl = this;

    ctrl.showingLogin = false;
    ctrl.loginSubmitted = false;
    ctrl.signupSubmitted = false;
    ctrl.passwordMatch = true;
    ctrl.newUser = {};
    ctrl.loginUser = {};
    ctrl.errors = {};
    ctrl.steps = [
      "Create Account",
      "Register Restaurant",
      "Post Deals!"
      ];
    ctrl.currentStep = 0;

    ctrl.selectStep = function(newStep) {
      ctrl.currentStep = newStep;
    };

    ctrl.nextStep = function() {
      ctrl.currentStep ++;
    };

    ctrl.stepIsSelected = function(step) {
      return ctrl.currentStep === step;
    };

    ctrl.isLoggedIn = Auth.isLoggedIn;

    ctrl.toggleShowLogin = function() {
      ctrl.showingLogin = !ctrl.showingLogin ;
    };

    ctrl.login = function(form) {
      ctrl.loginSubmitted = true;

      if(form.$valid) {
        Auth.login({
          email: ctrl.loginUser.email,
          password: ctrl.loginUser.password
        })
          .then( function() {

          })
          .catch( function(err) {
            ctrl.errors.other = err.message;
          });
      }
    };

    ctrl.register = function(form) {
      ctrl.signupSubmitted = true;

      if(ctrl.newUser.password !== ctrl.newUser.passwordRetype) {
        ctrl.passwordMatch = false;
        return;
      } else if (!ctrl.newUser.password) {
        ctrl.passwordMatch = false;
        return;
      }

      if(form.$valid) {
        Auth.createUser({
          name: ctrl.newUser.email,
          email: ctrl.newUser.email,
          password: ctrl.newUser.password
        })
          .then( function() {

          })
          .catch( function(err) {
            err = err.data;
            ctrl.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              ctrl.errors[field] = error.message;
            });
          });
      }
    };

    ctrl.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider +'/redirect?r=/owners';
    };

  }]);
