'use strict';

/**
 * @ngdoc overview
 * @name rolApp
 * @description
 * # rolApp
 *
 * Main module of the application.
 */
angular
  .module('rolApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'scroll-trigger',
    'sticky'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          people : function (fileservice) {
            return fileservice.getFile('data/dendogram-people.json')
          },
          peopleWG : function (fileservice) {
            return fileservice.getFile('data/dendogram-peopleWG.json')
          },
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
