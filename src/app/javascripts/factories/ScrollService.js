(function(){
// 'use strict';
  angular
    .module('ivotifyFrontend')
    .factory('ScrollService', ScrollService)

    function ScrollService() {
      var service = {};

      service.scrollTop = function(){
        window = window.scrollTo(0, 0);
        var summary = $('.summary').scrollTop(0);
        var quotes = $('#quote-body').scrollTop(0);
          return [window, quotes, summary];
      }
      return service;
    }
})();
