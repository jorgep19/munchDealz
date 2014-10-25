'use strict';

describe('Directive: loginSignUpForm', function () {

  // load the directive's module and view
  beforeEach(module('munchApp'));
  beforeEach(module('components/loginSignUpForm/loginSignUpForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<login-sign-up-form></login-sign-up-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the loginSignUpForm directive');
  }));
});