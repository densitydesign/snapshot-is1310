'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:animateDendogram
 * @description
 * # animateDendogram
 */
angular.module('rolApp')
  .directive('dendStage', function () {
    return {
		// template: '<div></div>',
		restrict: 'C',
		//scope: true,
		link: function(scope, elem) {
			scope.animateDendogram = function() {
			$('.dend-stage').removeClass('focus')
			// console.log( parseInt(d3.select('.dend-stage').style('width')) )
			d3.select('.magic-margin').style('margin-left', (parseInt(d3.select('.dend-stage').style('width'))+30)+'px' )
			// d3.select('.magic-margin').style('right', 0 )
			// var oldSrc = $('#dendogram').attr('src');
			// var newSrc = elem.attr('urlimg')
			// if (oldSrc != newSrc) {
			// 	$('#dendogram').attr('src',elem.attr('urlimg'))

			// }
        console.log("from directive!", scope.dendrogramPeople);
        scope.$watch("dendrogramPeople",function(newVal, oldVal){

          if(newVal != oldVal) {
            //TODO
          }
          
        })



			elem.addClass('focus');
			};
		}
	};
  });
