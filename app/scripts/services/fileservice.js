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

      getFile : function(url){
        var deferred = $q.defer();
        $http.get(url).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          /*
           $modal.open({
           templateUrl:'views/modalerror.html',
           controller:'ModalerrorCtrl',
           size: 'sm'
           })
           */

          deferred.reject("An error occured while fetching file");
        });

        return deferred.promise;
      }
    }
  });
