/**
 * Created by django on 26/04/16.
 */

var _ = require('lodash');
var request = require('request');
var baseurl = "http://router.project-osrm.org/viaroute?z=7alt=false&compression=false&"
var turf = require("turf")
var fs = require('fs');
var shortid = require('shortid');
var parse = require('csv-parse');
var csv = require("fast-csv");
var d3 = require("d3")
var allData = []
var locs = {};
var allLetters = [];
var routes;
var features = [];
// var stream = fs.createReadStream("data/origins-destinations-selected.tsv");
 
// csv
//  .fromStream(stream, {headers : true, delimiter : '\t'})
//  .on("data", function(data){
//    allData.push(data);

//  })
//  .on("end", function(){
//      allData.forEach(function(d){locs[d['Place ID']] = {'lat':d['Coordinates: Latitude'],'lon':d['Coordinates: Longitude']}});
//    parseLetters();
//  });

console.log("start")

var routes = fs.readFileSync("selected-routes.tsv").toString();

var routesObj = d3.tsv.parse(routes)

console.log(routesObj.length)


getRoute(0);

function getRoute(i) {

  var r = routesObj[i]

  console.log("###",i, routesObj.length)

  var locs = "loc="+r.originLat.replace(",",".")+","+r.originLon.replace(",",".")+"&loc="+r.destinationLat.replace(",",".")+","+r.destinationLon.replace(",",".");

  console.log(baseurl+locs)

  request(baseurl+locs, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      resp = JSON.parse(body)

      // console.log("resp",resp)

      var ls = turf.linestring(resp.route_geometry,{
        id: i,
        origin:r['Origin-name'],
        destination: r['Destination-name']
      });

      // console.log("ls",ls)

      features.push(ls);
      i = i+1;
      
      if(i <= (routesObj.length - 1 - 4365) ) {
        getRoute(i);
      }
      
      else{
        var fc = turf.featurecollection(features);

        fs.writeFile('routes-selected.json', JSON.stringify(fc), function (err) {
          if (err) return console.log(err);
          console.log("DONE :)");
        });
      }
    }
    else {
      console.log("ERROR",error)
    }
  })

}



function parseLetters () {



  var stream = fs.createReadStream("data/emlo-work-milan.csv");


  csv
   .fromStream(stream, {headers : true})
   .on("data", function(data){
     allLetters.push(data);

   })
   .on("end", function(){
      allLetters = allLetters
        /*  .filter(function(d){
         return d['Year date'].length && d['Month date'].length && d['Day date'].length //&& d['Origin ID'] in locs && d['Destination ID'] in locs
       })*/
          .map(function(d){

            var date_sent = "";
            if(d['Year date'].length && d['Month date'].length && d['Day date'].length) {
              try {

                date_sent = new Date(d['Year date'], d['Month date'], d['Day date'])
              }
              catch (e) {
                date_sent = "";
              }
            }

            return {
              language:d['Language(s)'],
              origin: locs[d['Origin ID']],
              originName : d['Origin name'],
              destination:locs[d['Destination ID']],
              destinationName : d['Destination name'],
              id : d['Milan ID Number'],
              sent:date_sent
            }

          })



    fs.writeFile('emloLetters.json', JSON.stringify(allLetters), function (err) {
      if (err) return console.log(err);

      getRoutes();

    });


   });
} //parseLetters

function getRoutes() {

    routes = _.cloneDeep(allLetters)
    routes = routes.filter(function(d){

       return d['sent'] && d['destination'] && d['origin'] && d['origin'].lat != "" &&  d['destination'].lat != ""
     })
      .sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return a.sent - b.sent;
});


  var start = routes[0].sent;
  var startid = routes[0].id;
  var end = routes[routes.length-1].sent
  var endid = routes[routes.length-1].id

  
  singleRoute(0);


}


function singleRoute(obj,locs,i) {

  console.log(i+ "/" + routesObj.length);

  // var obj = routes[i]
  // console.log(obj);

  //  var locs = "loc="+obj.origin.lat+","+obj.origin.lon+"&loc="+obj.destination.lat+","+obj.destination.lon;



  request(baseurl+locs, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      resp = JSON.parse(body)

      var ls = turf.linestring(resp.route_geometry,{id: obj.id, sent:obj.sent, origin:obj.originName, destination: obj.destinationName, language:obj.language});
      features.push(ls);
      i = i+1;
      if(i <= routes.length -1) {
        singleRoute(i);
      }
      else{
        var fc = turf.featurecollection(features);

        fs.writeFile('routes-selected.json', JSON.stringify(fc), function (err) {
          if (err) return console.log(err);
          console.log("DONE :)");
        });
      }
    }
  })


}