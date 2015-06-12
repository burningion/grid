'use strict';

describe('Directive: navLinkNested', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make nested nav link active', inject(function ($compile) {
    element = angular.element('<li class="nav-link-nested"></li>');
    element = $compile(element)(scope);
  }));
});
