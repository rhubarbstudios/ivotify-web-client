(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .factory('Resources', Resources);

    Resources.$inject = ['$resource', 'apiUrl'];        

    function Resources($resource, apiUrl){

      // Returns a constructor function
      return function(type){

        return $resource(apiUrl + type + '/:id', null,
          {
           'update': { method: 'PUT'}
          });

      };

    }

})();
