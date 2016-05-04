'use strict';

describe('Directive: linechartLetterDistribution', function () {

  // load the directive's module
  beforeEach(module('rolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<linechart-letter-distribution></linechart-letter-distribution>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the linechartLetterDistribution directive');
  }));
});
