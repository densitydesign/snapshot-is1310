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

			

			scope.drawDendrogramWg = function(root) {

				d3.select("#dendogram2").selectAll("*").remove();

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
			      .attr("r", 4);

			  node.append("text")
			      .attr("dy", ".31em")
			      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
			      .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
			      .text(function(d) { return d.name; });


			d3.select(self.frameElement).style("height", radius * 2 + "px");

			}

			scope.drawDendrogramWg(function(){
				var deep = _.cloneDeep(scope.dendrogramPeopleWG);
				deep.children.forEach(function(cluster){
					delete cluster.children;
				})
				return deep;
			})

			

			
			
    	}
    };
  });