'use strict';

/**
 * @ngdoc directive
 * @name rolApp.directive:linechartLetterDistribution
 * @description
 * # linechartLetterDistribution
 */
angular.module('rolApp')
  .directive('linechartLetterDistribution', function () {
    return {
      template: '',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // console.log(element)
        
        var margin = {top: 30, right: 20, bottom: 30, left: 60},
        	border = parseInt( d3.select(element[0]).style('border-width')),
		    width = parseInt( d3.select(element[0]).style('width') ) - margin.left - margin.right - border*2,
		    height = parseInt( d3.select(element[0]).style('height') ) - margin.top - margin.bottom - border*2;



		// var formatDate = d3.time.format("%d-%b-%y");
		var formatDate = d3.time.format("%Y");

		var x = d3.time.scale()
		    .range([0, width]);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");

		var line = d3.svg.line()
		    .x(function(d) { return x(d.date); })
		    .y(function(d) { return y(d.count); });

		var svg = d3.select(element[0]).append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		d3.tsv("data/confidential/letters-distribution.tsv", type, function(error, data) {
		  if (error) throw error;

		  x.domain(d3.extent(data, function(d) { return d.date; }));
		  y.domain(d3.extent(data, function(d) { return d.count; }));

		  svg.append("g")
		      .attr("class", "x axis")
		      .attr("transform", "translate(0," + height + ")")
		      .call(xAxis);

		  svg.append("g")
		      .attr("class", "y axis")
		      .call(yAxis)
		    .append("text")
		      .attr("transform", "rotate(0)")
		      .attr("y", -16)
		      .attr("dy", ".71em")
		      .style("text-anchor", "end")
		      .text("Count");

		  svg.append("path")
		      .datum(data)
		      .attr("class", "line")
		      .attr("d", line);
		});

		function type(d) {
		  d.date = formatDate.parse(d.date);
		  d.count = +d.count;
		  return d;
		}
      }
    };
  });
