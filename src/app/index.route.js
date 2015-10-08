(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('welcome', {
        url:'/',
        templateUrl: 'app/templates/welcome.html',
        controller: 'WelcomeController',
        controllerAs:'welcomectrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/templates/admin.html'
        })
      .state('admin.issues', {
        url: '/issues',
        templateUrl: 'app/templates/admin/issues.html',
        controller: 'AdminIssuesController'
        })
       .state('admin.candidates', {
        url: '/candidates',
        templateUrl: 'app/templates/admin/candidates.html',
        controller: 'AdminCandidatesController'
      })
      .state('issues', {
        url: '/issues',
        templateUrl: 'app/templates/issues.html',
        controller: 'MainController'
      });
     
      $urlRouterProvider.otherwise('/');
    }

  ]);

})();
