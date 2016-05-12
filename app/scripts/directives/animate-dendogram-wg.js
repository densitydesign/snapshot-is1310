'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:animateDendogramWg
 * @description
 * # animateDendogramWg
 */
angular.module('rolApp')
  .directive('dendTwoStage', function () {
    return {
		// template: '<div></div>',
		restrict: 'C',
		// scope: {
		// 	drawOnScroll:"&"
		// }
		// scope: true,
		link: function(scope, elem) {
			var state = {
				wg1:false,
				wg2:false,
				wg3:false,
				wg4:false,
				wg5:false,
				wg6:false,
				noWg:false
			}
			scope.animateDendogramWg = function(id) {
				$('.dend-two-stage').removeClass('focus');

				// else if (id == 'ds3') {
				// 	scope.drawDendrogram(scope.dendrogramPeopleWG)
				// 	$("#dendogram").css("transform", "rotate(0deg)")
				// } else 
				

				if (id == 'ds4') {
					if (state.wg1 == false ){
						scope.drawDendrogramWg(scope.dendrogramPeopleWG,1)
						$("#dendogram2>g").find("*").addClass('out')
						$("#dendogram2>g").find(".wg1").removeClass('out')
						$("#dendogram2>g").find(".wg1 *").removeClass('out')
						$("#dendogram2").css("transform", "rotate(-88deg)")
						state.wg1 = true
						state.wg2 = false
						state.wg3 = false
						state.wg4 = false
						state.wg5 = false
						state.wg6 = false
						state.noWg = false						
						// console.log("chiamato 1")
					}
					
				} else if (id == 'ds5') {
					if (state.wg2 == false){
						// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
						$("#dendogram2>g").find("*").addClass('out')
						$("#dendogram2>g").find(".wg2").removeClass('out')
						$("#dendogram2>g").find(".wg2 *").removeClass('out')
						$("#dendogram2").css("transform", "rotate(-62deg)")
						state.wg1 = false
						state.wg2 = true
						state.wg3 = false
						state.wg4 = false
						state.wg5 = false
						state.wg6 = false
						state.noWg = false
						// console.log("chiamato 2")
					}
				} else if (id == 'ds6') {
					// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
					$("#dendogram2>g").find("*").addClass('out')
					$("#dendogram2>g").find(".wg3").removeClass('out')
					$("#dendogram2>g").find(".wg3 *").removeClass('out')
					$("#dendogram2").css("transform", "rotate(-25deg)")
					// console.log("chiamato 3")
				} else if (id == 'ds7') {
					// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
					$("#dendogram2>g").find("*").addClass('out')
					$("#dendogram2>g").find(".wg4").removeClass('out')
					$("#dendogram2>g").find(".wg4 *").removeClass('out')
					$("#dendogram2").css("transform", "rotate(15deg)")
					// console.log("chiamato 4")
				} else if (id == 'ds8') {
					// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
					$("#dendogram2>g").find("*").addClass('out')
					$("#dendogram2>g").find(".wg5").removeClass('out')
					$("#dendogram2>g").find(".wg5 *").removeClass('out')
					$("#dendogram2").css("transform", "rotate(51deg)")
					// console.log("chiamato 5")
				} else if (id == 'ds9') {
					// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
					$("#dendogram2>g").find("*").addClass('out')
					$("#dendogram2>g").find(".wg6").removeClass('out')
					$("#dendogram2>g").find(".wg6 *").removeClass('out')
					$("#dendogram2").css("transform", "rotate(77deg)")
					// console.log("chiamato 6")
				} else if (id == 'ds10') {
					// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
					$("#dendogram2>g").find("*").addClass('out')
					$("#dendogram2>g").find(".affiliates").removeClass('out')
					$("#dendogram2>g").find(".affiliates *").removeClass('out')
					$("#dendogram2>g").find(".nowg").removeClass('out')
					$("#dendogram2>g").find(".nowg *").removeClass('out')
					$("#dendogram2").css("transform", "rotate(178deg)")
					// console.log("chiamato last")
				}

				$("#"+id).addClass('focus');
			};
		}
	};
  });