'use strict';

/**
 * @ngdoc service
 * @name rolApp.fileservice
 * @description
 * # fileservice
 * Factory in the rolApp.
 */
angular.module('rolApp')
  .factory('fileservice', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
