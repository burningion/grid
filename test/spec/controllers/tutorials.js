'use strict';

describe('Controller: TutorialsCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var TutorialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TutorialsCtrl = $controller('TutorialsCtrl', {
      $scope: scope
    });
  }));

  it('should attach an article to the scope', function () {
    // expect(scope.article).toBeDefined();
  });
});
