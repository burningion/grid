'use strict';

describe('Directive: article', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div class="article"></div>');
    element = $compile(element)(scope);
  }));
});
