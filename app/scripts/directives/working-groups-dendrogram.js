'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:workingGroupsDendrogram
 * @description
 * # workingGroupsDendrogram
 */
angular.module('rolApp')
  .directive('workingGroupsDendrogram', function () {
    return {
      template: '',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
        var width = scope.dendrogramAttr.side,
						height = scope.dendrogramAttr.side,
						radius = height / 2,
						posX = radius
				if (width > height) {
					posX = width / 2
				}
				
				var cluster = d3.layout.cluster()
				    .size([360, radius - 120]);
				
				var diagonal = d3.svg.diagonal.radial()
				    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
				
				var svg = d3.select("#working-groups-dendrogram").append("svg")
				    .attr("width", width)
				    .attr("height", height)
				  .append("g")
				    .attr("transform", "translate(" + posX + "," + radius + ")");
				
				var nodes = cluster.nodes(scope.dendrogramPeopleWG);

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
		      .text(function(d) { return d.name })
		    d3.select(self.frameElement).style("height", radius * 2 + "px");

		  } //close Link
    }
  });
