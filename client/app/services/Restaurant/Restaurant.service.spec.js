'use strict';

describe('Service: Restaurant', function () {

  // load the service's module
  beforeEach(module('munchApp'));

  // instantiate service
  var Restaurant;
  beforeEach(inject(function (_Restaurant_) {
    Restaurant = _Restaurant_;
  }));

  it('should do something', function () {
    expect(!!Restaurant).toBe(true);
  });

});
