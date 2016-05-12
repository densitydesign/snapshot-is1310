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
		// scope: {
		// 	drawOnScroll:"&"
		// }
		// scope: true,
		link: function(scope, elem) {
			scope.animateDendogram = function(id) {
				$('.dend-stage').removeClass('focus');

				if (id == 'ds1') {
					var deep = _.cloneDeep(scope.dendrogramPeople,1);
					deep.children.forEach(function(cluster){
						delete cluster.children;
					})
					scope.drawDendrogram(deep)
				} else if (id == 'ds2') {
					scope.drawDendrogram(scope.dendrogramPeople,1)
					$("#dendogram").css("transform", "rotate(0deg)")
				}

				// else if (id == 'ds3') {
				// 	scope.drawDendrogram(scope.dendrogramPeopleWG)
				// 	$("#dendogram").css("transform", "rotate(0deg)")
				// }

				$("#"+id).addClass('focus');
			};
		}
	};
  });
