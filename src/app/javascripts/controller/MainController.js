(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .controller('MainController', MainController);

    MainController.$inject = ['Resources', '$scope', '$state', '$stateParams'];

    function MainController(Resources, $scope, $state, $stateParams){
      $scope.issues = [];
      $scope.candidates = [];

      // Boolean for ng-show/hide candidate quotes
      $scope.pickIssue = false;
      $scope.hideSummary = false;
      

      $scope.showSummary = function(item) {
        $scope.currentIssue = item;
        // console.log($scope.currentIssue);
      };

      // Method for gaining access to ng-repeat="item in issues, <a> won't accept ng-click without it.
      $scope.getScope = function() {
         return $scope;   
      };

      $scope.itemNext = function (index) {
        console.log('index:', index);
        if ( index == $scope.issues.length) {
          return $scope.currentIssue = $scope.issues[0];
        }
          return $scope.currentIssue = $scope.issues[index];
      };

      $scope.topScroll = function () {
        return window.scrollTo(0, 0);
      }

      // Using Resource Factory for all CRUD, the one below is specifically for candidates
      // Access to CRUD for issues and candidates
      var CandidateResources = new Resources('candidates');
      var IssueResources = new Resources('issues');

      // Index of issues
      IssueResources.get({})
      .$promise.then(function(resp) { 
        $scope.issues = resp.issues; 
        console.log(resp.issues);
      });

       // Index of candidates
      CandidateResources.get({})
      .$promise.then(function(resp){
        $scope.candidates = resp.candidates;
        // console.log(resp.candidates);
      });
     
      // Logic for setting canidate quote header colors
      $scope.set_color = function(candidate){
        if (candidate.first_name == "Bernie") {
          return {'background-color': "#B6D9FD" };
        } 
        else if (candidate.first_name == "Hillary") {
          return { 'background-color': "#F5E265" };
        }
        else if (candidate.first_name == "Donald") {
          return { 'background-color': "#FF7552" };
        }
        else if (candidate.first_name == "Rand") {
          return { 'background-color': "#FFBDA0" };
        }
        else if (candidate.first_name == "Ben") {
          return { 'background-color': "#FFC8CE" };
        }
        else if (candidate.first_name == "Jeb") {
          return { 'background-color': "#0BECB8" };
        }
      };

  };
  


})();