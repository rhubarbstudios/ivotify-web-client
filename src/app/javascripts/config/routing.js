(function(){

  angular
    .module('ivotifyFrontend')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('welcome', {
        url:'/',
        templateUrl: 'welcome.html',
        controller: 'WelcomeController',
        controllerAs:'welcomectrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'admin.html'
        })
      .state('admin.issues', {
        url: '/issues',
        templateUrl: 'admin/issues.html',
        controller: 'AdminIssuesController'
        })
       .state('admin.candidates', {
        url: '/candidates',
        templateUrl: 'admin/candidates.html',
        controller: 'AdminCandidatesController'
      })
      .state('issues', {
        url: '/issues',
        templateUrl: 'issues.html',
        controller: 'MainController'
      })
     
      $urlRouterProvider.otherwise('/');
    }

  ]);

})();