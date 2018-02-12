'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:legendCommunities
 * @description
 * # legendCommunities
 */
angular.module('rolApp')
  .directive('legendCommunities', function () {
    return {
      // template: '<div>ciao</div>',
      templateUrl: 'views/legend-communities.template.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the legendCommunities directive');
      }
    };
  });
