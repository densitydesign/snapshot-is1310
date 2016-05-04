'use strict';

describe('Directive: dendogramWGPeople', function () {

  // load the directive's module
  beforeEach(module('rolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dendogram-w-g-people></dendogram-w-g-people>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dendogramWGPeople directive');
  }));
});
