'use strict';

describe('Directive: sidebar', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div class="sidebar"></div>');
    element = $compile(element)(scope);
  }));
});
