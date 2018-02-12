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
			// scope.animateDendogramWg = function(id) {
			// 	$('.dend-two-stage').removeClass('focus');
			// 	if (id == 'ds4') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG,1)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".wg1").removeClass('out')
			// 		$("#dendogram2>g").find(".wg1 *").removeClass('out')
			// 		// $("#dendogram2").css("transform", "rotate(-88deg)")
			// 		d3.select("#dendogram2").style("transform", "rotate(-88deg)")						
			// 		console.log("chiamato 1")
			// 	} else if (id == 'ds5') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".wg2").removeClass('out')
			// 		$("#dendogram2>g").find(".wg2 *").removeClass('out')
			// 		// $("#dendogram2").css("transform", "rotate(-62deg)")
			// 		d3.select("#dendogram2").style("transform", "rotate(-62deg)")
			// 		console.log("chiamato 2")
			// 	} else if (id == 'ds6') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".wg3").removeClass('out')
			// 		$("#dendogram2>g").find(".wg3 *").removeClass('out')
			// 		d3.select("#dendogram2").style("transform", "rotate(-25deg)")
			// 		console.log("chiamato 3")
			// 	} else if (id == 'ds7') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".wg4").removeClass('out')
			// 		$("#dendogram2>g").find(".wg4 *").removeClass('out')
			// 		d3.select("#dendogram2").style("transform", "rotate(15deg)")
			// 		console.log("chiamato 4")
			// 	} else if (id == 'ds8') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".wg5").removeClass('out')
			// 		$("#dendogram2>g").find(".wg5 *").removeClass('out')
			// 		d3.select("#dendogram2").style("transform", "rotate(51deg)")
			// 		console.log("chiamato 5")
			// 	} else if (id == 'ds9') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".wg6").removeClass('out')
			// 		$("#dendogram2>g").find(".wg6 *").removeClass('out')
			// 		d3.select("#dendogram2").style("transform", "rotate(77deg)")
			// 		console.log("chiamato 6")
			// 	} else if (id == 'ds10') {
			// 		// scope.drawDendrogramWg(scope.dendrogramPeopleWG)
			// 		$("#dendogram2>g").find("*").addClass('out')
			// 		$("#dendogram2>g").find(".affiliates").removeClass('out')
			// 		$("#dendogram2>g").find(".affiliates *").removeClass('out')
			// 		$("#dendogram2>g").find(".nowg").removeClass('out')
			// 		$("#dendogram2>g").find(".nowg *").removeClass('out')
			// 		d3.select("#dendogram2").style("transform", "rotate(178deg)")
			// 		console.log("chiamato last")
			// 	}
			// 	$("#"+id).addClass('focus');
			// };
		}
	};
  });