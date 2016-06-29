'use strict';

/**
 * @ngdoc function
 * @name rolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rolApp
 */
angular.module('rolApp')
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 50)
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

    $scope.namesShortner = function(oggetto) {
        if (oggetto.children) {
            oggetto.children.forEach(function(d){
                if (d.children) {
                    d.children.forEach(function(e){
                        if (e.name && e.name!="WG 1" && e.name!="WG 2" && e.name!="WG 3" && e.name!="WG 4" && e.name!="WG 5" && e.name!="WG 6" && e.name!="Affiliates" && e.name!="No WG") {
                            e.name = e.name.substring(0, e.name.indexOf(' ')+2).replace('#', ' ')+'.'
                        }

                    })
                }
            })
        }
    }

    $scope.namesShortner($scope.dendrogramPeopleWG);
    $scope.namesShortner($scope.dendrogramPeople);

    $scope.dendrogramAttr = {
      side: parseInt($(".dendogram-wg-stage > .chart-container").css("width")) - parseInt($(".dendogram-wg-stage > .chart-container").css("padding-left")) - parseInt($(".dendogram-wg-stage > .chart-container").css("padding-right"))
    }

    $("#working-groups-dendrogram").css({
      "width": $scope.dendrogramAttr.side + "px",
      "height": $scope.dendrogramAttr.side + "px"
    })

    $scope.offset = 60;

    $scope.wgFocus = 0;

    $scope.wgDescriptions = [ 
      {
        "title":"WG1: Space and Time",
        "description": "WG 1 considers how to identify, represent, analyse, and visualize the data on the spatial and chronological dimensions of correspondence networks found in catalogue records, in letter texts, and in prosopographical data on letter writers and recipients.",
        "button": "WG 1",
        "angle": -88,
        "class": "wg1"
      },
      {
        "title":"WG2: People and Network",
        "description": "WG 2 studies how best to structure and assemble biographical data describing the citizens of the republic of letters, as well as how to structure, analyse, and visualize data on the networks created by epistolary and related forms of learned exchange.",
        "button": "WG 2",
        "angle": -62,
        "class": "wg2"
      },
      {
        "title":"WG3: Text and Topics",
        "description": "WG 3 focuses on the presentation of letters as images and digital texts, the development of tools for transcribing, annotating, editing, text mining, and topic modelling them, the translation from print to digital form and vice versa, and the use of training schools to help specify a virtual research environment adapted for the study of this material.",
        "button": "WG 3",
        "angle": -25,
        "class": "wg3"
      },
      {
        "title":"WG4: Documents and Collections",
        "description": "WG 4 will develop means of describing the physical characteristics of letters, of capturing information on their provenance history, and of assembling information on collections of learned correspondence and existing aids for finding them.",
        "button": "WG 4",
        "angle": 15,
        "class": "wg4"
      },
      {
        "title":"WG5: Data Exchange and Strategic Planning",
        "description": "WG 5 deals with the means of generating standardized digital data of all these kinds in unprecedented quantities, the technical and legal arrangements necessary for exchanging them between participating individuals, projects, and institutions, and the problems of funding and long-term preservation and sustainability.",
        "button": "WG 5",
        "angle": 51,
        "class": "wg5"
      },
      {
        "title":"WG6: Visualisation and Communication",
        "description": "WG 6 will conceptualize and specify a new generation of visualization tools applicable to all stages in the process of working with epistolary data, and will consider means of communicating both the scholarly and the technical interest of the Action to a variety of different audiences, within and especially beyond the academy.",
        "button": "WG 6",
        "angle": 77,
        "class": "wg6"
      },
      {
        "title":"Affiliates",
        "description": "Beside those organised groups, there are even people interested in partaking the activities of the Action, the Affiliates, and people who pledge to make everithing work smoothly.",
        "button": "Affiliates",
        "angle": -207,
        "class": "affiliates"
      },
      {
        "title":"No Working Group Membership",
        "description": "Beside those organised groups, there are even people interested in partaking the activities of the Action, the Affiliates, and people who pledge to make everithing work smoothly.",
        "button": "No WG Membership",
        "angle": -121,
        "class": "nowg"
      }
    ]

    $scope.switchWg = function(index) {
      $scope.wgFocus = index;

      var number = index +1;

      var thisClass = "."+$scope.wgDescriptions[index].class

      //rotate dendrogram
      $("#working-groups-dendrogram>svg>g").find("*").addClass('out')
      $("#working-groups-dendrogram>svg>g").find(thisClass).removeClass('out')
      $("#working-groups-dendrogram>svg>g").find(thisClass + " *").removeClass('out')
      // $("#dendogram2").css("transform", "rotate(-88deg)")
      d3.select("#working-groups-dendrogram>svg").style("transform", "rotate(" + $scope.wgDescriptions[index].angle + "deg)")

      // $scope.$apply();
    }

    $scope.switchWg(0);

    $scope.centerStyckyElm = function(stickyElement){
        var thisHeight = parseInt($(stickyElement).css("height"));
        var offset = (window.innerHeight - thisHeight)/2;
        console.log(thisHeight, offset);
        $scope.offset = offset;
    }

  });
