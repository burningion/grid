'use strict';

describe('Service: duScrollEasing', function () {

  // load the service's module
  beforeEach(module('publicApp'));

  // instantiate service
  var duScrollEasing;
  beforeEach(inject(function (_duScrollEasing_) {
    duScrollEasing = _duScrollEasing_;
  }));

  it('should do something', function () {
    expect(!!duScrollEasing).toBe(true);
  });

});
