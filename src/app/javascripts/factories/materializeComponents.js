(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .factory('MaterializeComponents', MaterializeComponents);

    function MaterializeComponents(){
      var service = {};

      service.addModal = function(){
        $("a[rel*=leanModal]").leanModal({
          dismissible: true,
          opacity: .5,
          in_duration: 300,
          out_duration: 200,
        });
      }

      service.addCollapsible = function(){
        $('ul[rel*=collapsible]').collapsible({
          accordion : false
        });
      }

      return service;
    }

})();