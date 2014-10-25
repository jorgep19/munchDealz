'use strict';

describe('Controller: OwnersCtrl', function () {

  // load the controller's module
  beforeEach(module('munchApp'));

  var OwnersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OwnersCtrl = $controller('OwnersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
