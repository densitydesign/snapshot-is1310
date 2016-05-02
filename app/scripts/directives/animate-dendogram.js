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
				// console.log( elem.attr('stage') )
				// d3.select('.magic-margin').style('margin-left', (parseInt(d3.select('.dend-stage').style('width'))+30)+'px' )

				// console.log( elem.attr('stage') )

				// scope.drawDendogram(scope.dendrogramPeopleDraw);
				// d3.select('.magic-margin').style('right', 0 )
				// var oldSrc = $('#dendogram').attr('src');
				// var newSrc = elem.attr('urlimg')
				// if (oldSrc != newSrc) {
				// 	$('#dendogram').attr('src',elem.attr('urlimg'))
				// }

				// if (stage = 3-1){
				// 	facciod elle robe sui dati
					
				// 	chiamo la funzionae che disegna il dendogram
				// }

				if (id == 'ds1') {
					var deep = _.cloneDeep(scope.dendrogramPeople);
					deep.children.forEach(function(cluster){
						delete cluster.children;
					})
					scope.drawDendrogram(deep)
				} else if (id == 'ds2') {
					scope.drawDendrogram(scope.dendrogramPeople)
					$("#dendogram").css("transform", "rotate(0deg)")
				} else if (id == 'ds3') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram").css("transform", "rotate(0deg)")
				} else if (id == 'ds4') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".wg1").removeClass('out')
					$("#dendogram>g").find(".wg1 *").removeClass('out')
					// $("#dendogram>g").attr("transform", "rotate(-88 " + parseInt(d3.select('#dendogram').style('width'))/4 + " " + parseInt(d3.select('#dendogram').style('width'))/4 + ")")
					// $("#dendogram").style("transform", "rotate(-88deg)")
					$("#dendogram").css("transform", "rotate(-88deg)")
				} else if (id == 'ds5') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".wg2").removeClass('out')
					$("#dendogram>g").find(".wg2 *").removeClass('out')
					$("#dendogram").css("transform", "rotate(-62deg)")
				} else if (id == 'ds6') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".wg3").removeClass('out')
					$("#dendogram>g").find(".wg3 *").removeClass('out')
					$("#dendogram").css("transform", "rotate(-25deg)")
				} else if (id == 'ds7') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".wg4").removeClass('out')
					$("#dendogram>g").find(".wg4 *").removeClass('out')
					$("#dendogram").css("transform", "rotate(15deg)")
				} else if (id == 'ds8') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".wg5").removeClass('out')
					$("#dendogram>g").find(".wg5 *").removeClass('out')
					$("#dendogram").css("transform", "rotate(51deg)")
				} else if (id == 'ds9') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".wg6").removeClass('out')
					$("#dendogram>g").find(".wg6 *").removeClass('out')
					$("#dendogram").css("transform", "rotate(77deg)")
				} else if (id == 'ds10') {
					scope.drawDendrogram(scope.dendrogramPeopleWG)
					$("#dendogram>g").find("*").addClass('out')
					$("#dendogram>g").find(".collaborator").removeClass('out')
					$("#dendogram>g").find(".collaborator *").removeClass('out')
					$("#dendogram>g").find(".onlymanagement").removeClass('out')
					$("#dendogram>g").find(".onlymanagement *").removeClass('out')
					$("#dendogram").css("transform", "rotate(153deg)")
				}

				$("#"+id).addClass('focus');
			};
		}
	};
  });
