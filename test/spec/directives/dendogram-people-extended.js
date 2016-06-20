'use strict';

describe('Directive: dendogramPeopleExtended', function () {

  // load the directive's module
  beforeEach(module('rolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dendogram-people-extended></dendogram-people-extended>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dendogramPeopleExtended directive');
  }));
});
