'use strict';

/**
 * @ngdoc service
 * @name rolApp.fileservice
 * @description
 * # fileservice
 * Factory in the rolApp.
 */
angular.module('rolApp')
  .factory('fileservice', function ($q, $http) {

    return {

      // getFile : function(url){
      //   var deferred = $q.defer();
      //   $http.get(url).success(function(data){
      //     deferred.resolve(data);
      //   }).error(function(){
      //     deferred.reject("An error occured while fetching file");
      //   });

      //   return deferred.promise;
      // },
      getFile : function(url){
        return $http({
          method: 'GET',
          url: url
        }).then(function successCallback(response){
          return response.data;
        },function errorCallback(response){
          console.error("An error occured while fetching file",response);
          console.warn("If the issue is related to CORS Origin, try install this extention on Chrome: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi")
          return response;
        });
      }
    }
  });
