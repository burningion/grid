'use strict';

describe('Controller: ApiCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var ApiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiCtrl = $controller('ApiCtrl', {
      $scope: scope
    });
  }));

  it('should attach an article to the scope', function () {
    // expect(scope.article).toBeDefined();
  });
});
