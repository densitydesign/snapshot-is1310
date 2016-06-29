'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:dendogramPeople
 * @description
 * # dendogramPeople
 */
angular.module('rolApp')
  .directive('communitiesDendogram', function ($window) {
    return {
		template: '<svg id="dendogram"></svg>',
		restrict: 'AEC',
		link: function(scope, elem, attrs){  		

			scope.drawDendrogram = function(root,opacity) {
				d3.select("#dendogram").selectAll("*").remove();
				d3.select("#dendogram")
					.style("border","0px solid red")
					.style("opacity",opacity)

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
				var svg = d3.select("#dendogram")
				    .attr("width", radius * 2)
				    .attr("height", radius * 2)
				  .append("g")
				    .attr("transform", "translate(" + posX + "," + radius + ")");

			  

				scope.drawDendrogram.update = function(){
					console.log("update function")
				}



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
				  		return 2;
				  	} else if ( window.innerWidth >= 992 && window.innerWidth < 1200 ) {
				  		return 3;
				  	} else {
				  		return 4;
				  	}
				  	
				  });

				node.append("text")
				  .attr("dy", ".31em")
				  .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
				  .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
				  .text(function(d) { 
				  	return d.name;
				  });

				d3.select(self.frameElement).style("height", radius * 2 + "px");

			}

			// scope.drawDendrogram(function(){
			// 	var deep = _.cloneDeep(scope.dendrogramPeople);
			// 	deep.children.forEach(function(cluster){
			// 		delete cluster.children;
			// 	})
			// 	return deep;
			// },0)

			
			var deep = _.cloneDeep(scope.dendrogramPeople);
			deep.children.forEach(function(cluster){
				delete cluster.children;
			})
			scope.drawDendrogram(deep,1)
			

			
    	}
    };
  });
