(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .factory('Resources', Resources);

    Resources.$inject = ['$resource'];

    function Resources($resource){

      // Returns a constructor function
      return function(type){

        return $resource("https://ivotify-api.herokuapp.com/api/"  + type + '/:id', null,
          {
           'update': { method: 'PUT'}
          });

      };

    }

})();
