(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('welcome', {
        url:'/',
        templateUrl: 'app/templates/main/issues.html',
        controller: 'MainController'
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
      .state('main', {
        url: '/main',
        templateUrl: 'app/templates/main.html'
      })
      .state('main.issues', {
        url: '/issues',
        templateUrl: 'app/templates/main/issues.html',
        controller: 'MainController'
      })
      .state('main.candidate', {
        url: '/candidate',
        templateUrl: 'app/templates/main/candidate.html',
        controller: 'MainController'
      })
      .state('main.feedback_mobile', {
        url: '/feedback',
        templateUrl: 'app/templates/main/feedback_mobile.html',
        controller: 'MainController'
      });

      $urlRouterProvider.otherwise('/');
    }

  ]);

})();
