'use strict';

describe('Directive: animateDendogramWg', function () {

  // load the directive's module
  beforeEach(module('rolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<animate-dendogram-wg></animate-dendogram-wg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animateDendogramWg directive');
  }));
});
