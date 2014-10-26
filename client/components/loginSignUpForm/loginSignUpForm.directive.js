'use strict';

angular.module('munchApp')
  .directive('loginSignUpForm', function () {
    return {
      templateUrl: 'components/loginSignUpForm/loginSignUpForm.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
      }
    };
  });
