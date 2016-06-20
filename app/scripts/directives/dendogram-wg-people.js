'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:dendogramWGPeople
 * @description
 * # dendogramWGPeople
 */
angular.module('rolApp')
  .directive('communitiesWgDendogram', function ($window) {
    return {
		template: '<svg id="dendogram2"></svg>',
		restrict: 'AEC',
		link: function(scope, elem, attrs){  		

			

			scope.drawDendrogramWg = function(root,opacity) {

				d3.select("#dendogram2").selectAll("*").remove();
				d3.select("#dendogram2")
					.style("border","0px solid red")
					.style("opacity",opacity)

				var width = parseInt(d3.select('#dendogram2').style('width')),
					height = parseInt(d3.select('#dendogram2').style('height')),
					radius = height / 2,
					posX = radius

				if (width > height) {
					posX = width / 2
				}

				var cluster = d3.layout.cluster()
				    .size([360, radius - 120]);

				var diagonal = d3.svg.diagonal.radial()
				    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

				var svg = d3.select("#dendogram2")
				    .attr("width", radius * 2)
				    .attr("height", radius * 2)
				  .append("g")
				    .attr("transform", "translate(" + posX + "," + radius + ")");

			  var nodes = cluster.nodes(root);

			  var link = svg.selectAll("path.link")
			      .data(cluster.links(nodes))
			    .enter().append("path")
			      .attr("class", "link")
			      .attr("d", diagonal);

			  var node = svg.selectAll("g.node")
			      .data(nodes)
			    .enter().append("g")
			      .attr("class", function(d){
			      	return "node " + d.cssClass;
			      })
			      .attr("transform", function(d) { 
			      	return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
			      })

			  node.append("circle")
			      .attr("r", function(){
			      	if ( window.innerWidth >= 768 && window.innerWidth < 992 ) {
			      		// console.log("2")
			      		return 2;
			      	} else if ( window.innerWidth >= 992 && window.innerWidth < 1200 ) {
			      		// console.log("3")
			      		return 3;
			      	} else {
			      		// console.log("4")
			      		return 3.5;
			      	}
			      	
			      });

			  node.append("text")
			      .attr("dy", ".31em")
			      // .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
			      // .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
			      .attr("text-anchor", "start" )
			      .attr("transform", "translate(8)" )
			      .text(function(d) { 
			      	// if (d.name && d.name!="WG 1" && d.name!="WG 2" && d.name!="WG 3" && d.name!="WG 4" && d.name!="WG 5" && d.name!="WG 6" && d.name!="Affiliates" && d.name!="No WG") {
			      	// 	return d.name.substring(0, d.name.indexOf(' ')+2).replace('#', ' ')+'.'
			      	// } else {
			      	// 	return d.name;
			      	// }
			      	return d.name;
			      });


				d3.select(self.frameElement).style("height", radius * 2 + "px");

			}

			scope.drawDendrogramWg(function(){
				var deep = _.cloneDeep(scope.dendrogramPeopleWG);
				deep.children.forEach(function(cluster){
					delete cluster.children;
				})
				return deep;
			},0)

			scope.drawDendrogramWg(scope.dendrogramPeopleWG,1)			

			
			
    	}
    };
  });