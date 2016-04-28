'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:animate
 * @description
 * # animateNetwork
 */
angular.module('rolApp')
	.directive('netStage', function() {
      return {
        restrict: 'C',
        scope: true,
        link: function(scope, elem) {
          scope.animateNetwork = function() {
            $('.net-stage').removeClass('focus')

            var oldSrc = $('#network').attr('src');
            var newSrc = elem.attr('urlimg')

            if (oldSrc != newSrc) {
            	$('#network').attr('src',elem.attr('urlimg'))
            }

            elem.addClass('focus');
          };
        }
      };
    });
