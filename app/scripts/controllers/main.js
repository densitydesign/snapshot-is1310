'use strict';

/**
 * @ngdoc function
 * @name rolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rolApp
 */
angular.module('rolApp')
  .controller('MainCtrl', function ($scope, people, peopleWG) {

    $scope.dendrogramPeople = people;
    $scope.dendrogramPeopleWG = peopleWG;

    // Add class for CSS to dendrogramPeople
    $scope.dendrogramPeople.children.forEach(function(community){
      community.cssClass = community.name.toLowerCase().replace("/", "-").replace(" ", "");
      if ("children" in community) {
        community.children.forEach(function(person){
          person.cssClass = community.name.toLowerCase().replace("/", "-").replace(" ", "");
        })
      }
    })

    // Copy class for CSS to dendrogramPeopleWG from dendogramPeople
    $scope.dendrogramPeopleWG.children.forEach(function(cluster){
      cluster.children.forEach(function(person){
        // console.log(person)
        //person.cssClass
        people.children.forEach(function(cluster2){
          cluster2.children.forEach(function(person2){
            if (person.name == person2.name) {
              person.cssClass = person2.cssClass
            }
          })
        })
      })
    })

    // Add class for CSS to dendrogramPeople based on WG
    $scope.dendrogramPeopleWG.children.forEach(function(wg){
      wg.cssClass = wg.cssClass + ' ' + wg.name.toLowerCase().replace("/", "-").replace(" ", "");
      if ("children" in wg) {
        wg.children.forEach(function(person){
          person.cssClass = person.cssClass + ' ' + wg.name.toLowerCase().replace("/", "-").replace(" ", "");
        })
      }
    })


    // //Map of letters starts here
    // var start = new Date(1524, 0, 1);
    // var end = new Date(1971, 0, 1);
    // var duration = 250;

    // $scope.current = start;

    // L.mapbox.accessToken = 'pk.eyJ1IjoiZmVuaWNlbnRvIiwiYSI6ImNpbmhsenNqeDAwMmd3ZGx5MXVmcjNrdTAifQ.D1nRFjJRXUR7PMk5eDJzHQ';
    // var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/fenicento/cinhm9jbi01jhcxnhhyxqivcl/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
    //   attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    // });

    // var map = L.map('letters-map', {zoomControl: false})
    //   .addLayer(mapboxTiles)

    //   .setView([48.743611, 18.930556], 4);

    // // Disable drag and zoom handlers.
    // map.dragging.disable();
    // map.touchZoom.disable();
    // map.doubleClickZoom.disable();
    // map.scrollWheelZoom.disable();
    // map.keyboard.disable();

    // // Disable tap handler, if present.
    // if (map.tap) map.tap.disable();

    // var width = $("#viz").width()
    // var height = $("#viz").height()


    // var projection = d3.geo.mercator()
    //   .scale(5 * (width + 1) / 2 / Math.PI)
    //   .translate([width / 2, height / 2])
    //   //.rotate([-125, -15, 0])
    //   .precision(.1);


    // var svg = d3.select(map.getPanes().overlayPane).append("svg")
    //   .attr("width", width)
    //   .attr("height", height);

    // var g = svg.append("g").attr("class", "leaflet-zoom-hide");

    // d3.json("data/confidential/hartlib_complete.json", function (collection) {
    //   var transform = d3.geo.transform({
    //     point: projectPoint
    //   });

    //   //d3.geo.path translates GeoJSON to SVG path codes.
    //   //essentially a path generator. In this case it's
    //   // a path generator referencing our custom "projection"
    //   // which is the Leaflet method latLngToLayerPoint inside
    //   // our function called projectPoint
    //   var d3path = d3.geo.path().projection(transform);

    //   var lineFeatures = g.selectAll("path")
    //     .data(collection.features)
    //     .enter()
    //     .append("path")
    //     .attr("class", function (d,i) {
    //       return "path"+d.properties.id;

    //     })
    //     .style("opacity", "0");

    //     // this is going to be the circle that tracks the
    //   // route, we're appending it to the g element
    //   var marker = g.selectAll("circle")
    //     .data(collection.features)
    //     .enter()
    //     .append("circle")
    //     .attr("r", 0)
    //     .style("opacity",0)
    //     .attr("id", function(d,i){return "circle"+d.properties.id});


    //   // when the user zooms in or out you need to reset
    //   // the view
    //   map.on("viewreset", reset);

    //   // this puts stuff on the map! Without this "path"
    //   // only exists in theory
    //   reset();

    //   //this will go on the date check

    //   function updatePaths() {
    //     var path = svg.selectAll("path")
    //       .filter(function(d){

    //         return d.properties.sent.substr(0,7) == $scope.current.toISOString().substr(0,7)
    //       })
    //       .call(transition);
    //   }

    //   updatePaths();

    //   var intervalCheck = setInterval(function(){

    //     var r = moment($scope.current).add(1, 'months');
    //     $scope.current = r.toDate();
    //     $scope.$apply();

    //     //console.log($scope.current.toISOString());
    //     updatePaths();
    //   }, duration);

    //   // Reposition the SVG to cover the features.
    //   function reset() {
    //     var bounds = d3path.bounds(collection),
    //       topLeft = bounds[0],
    //       bottomRight = bounds[1];

    //     // here you're setting some styles, width, heigh etc
    //     // to the SVG. Note that we're adding a little height and
    //     // width because otherwise the bounding box would perfectly
    //     // cover our features BUT... since you might be using a big
    //     // circle to represent a 1 dimensional point, the circle
    //     // might get cut off.


    //     svg.attr("width", bottomRight[0] - topLeft[0] + 100)
    //       .attr("height", bottomRight[1] - topLeft[1] + 100)
    //       .style("left", topLeft[0] - 50 + "px")
    //       .style("top", topLeft[1] - 50 + "px");


    //     lineFeatures.attr("d", d3path);
    //     g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");
    //   }// end reset

    //   function pathStartPoint(path) {

    //     var d = path.attr('d');

    //     var dsplitted = d.split("L")[0].slice(1).split(",");
    //     var point = []
    //     point[0] = parseInt(dsplitted[0]);
    //     point[1] = parseInt(dsplitted[1]);

    //     return point;
    //   }//end pathStartPoint

    //   function transition(path) {


    //     if (path[0].length) {

    //       var id = path.attr('class').substring(4);

    //       var startPoint = pathStartPoint(path);

    //       var travelDuration = 0;

    //       d3.select("#circle" + id)
    //           .attr("transform", "translate(" + startPoint[0] + "," + startPoint[1] + ")")
    //           .style("opacity", 0)
    //         .transition()
    //           .delay(function(d){

    //             var recvd = moment(d.properties.received)
    //             var sent = moment(d.properties.sent)
    //             return ( (recvd.diff(sent,'days')/30)*duration );

    //           })
    //           .duration(0)
    //           .attr("r", 40)
    //           .attr("fill-opacity", 0)
    //           .style("opacity", 0)


    //       path.style("opacity", 1)
    //         .transition()
    //         .ease("linear")
    //         .duration(function(d){

    //           var recvd = moment(d.properties.received)
    //           var sent = moment(d.properties.sent)
    //           return (recvd.diff(sent,'days')/30)*duration;

    //         })
    //         .attrTween("stroke-dasharray", function (d, i) {
    //           return tweenDash(id)
    //         })
    //         //if you want to have it repeat the sequence
    //         // then uncomment this piece
    //         .each("end", function (d) {

    //           d3.select(this)
    //             .transition()
    //               .duration(1000)
    //               .style("opacity", 0.2);

    //           d3.select("#circle" + d.properties.id)
    //             .transition()
    //               .duration(750)
    //               .style("opacity", 0.2)
    //               // .attr("fill-opacity", 0.2)
    //               .attr("stroke-width", 2)
    //               .attr("r", 3)
    //         }); // infinite loop
    //     }
    //   } //end transition

    //   function tweenDash(id) {
    //     var pt = d3.select(".path"+id)
    //     var l = pt.node().getTotalLength(); //total length of path
    //     var i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray style attr
    //     // console.log(l)
    //     return function (t) {
    //       //t is fraction of time 0-1 since transition began
    //       var mrkr = d3.select("#circle"+id);

    //       // p is the point on the line (coordinates) at a given length
    //       // along the line. In this case if l=50 and we're midway through
    //       // the time then this would 25.
    //       var p = pt.node().getPointAtLength(t * l);

    //       //Move the marker to that point
    //       mrkr.attr("transform", "translate(" + p.x + "," + p.y + ")"); //move marker
    //       return i(t);
    //     }
    //   } //end tweenDash

    //   // Use Leaflet to implement a D3 geometric transformation.
    //   // the latLngToLayerPoint is a Leaflet conversion method:
    //   //Returns the map layer point that corresponds to the given geographical
    //   // coordinates (useful for placing overlays on the map).
    //   function projectPoint(x, y) {
    //     var point = map.latLngToLayerPoint(new L.LatLng(y, x));
    //     this.stream.point(point.x, point.y);
    //   }//end projectPoint

    // }); //d3.json

  });
