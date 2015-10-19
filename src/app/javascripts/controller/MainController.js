(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .controller('MainController', MainController);

    MainController.$inject = ['Resources', '$scope', '$state', '$stateParams'];

    function MainController(Resources, $scope, $state, $stateParams){
      // Empty Arrays for Issue and Candidate Objects
      $scope.issues = [];
      $scope.candidates = [];

      // Boolean for ng-show/hide candidate quotes from issue list
      $scope.pickIssue = false;
      $scope.hideSummary = false;

      // Boolean for ng-show/hide candidate quotes from candidate list
      $scope.pickCandidate = false;
      $scope.hideBio = false;

      // Boolean for banners across front-end
      $scope.showBanner = true;
      $scope.bannerIssue = true
      $scope.bannerCandidate = true

      // Shows Issues Summary
      $scope.showSummary = function(item) {
        $scope.currentIssue = item;
        // console.log($scope.currentIssue);
      };

      // Shows Candidate Bio
      $scope.showBio = function(candidate) {
        $scope.currentCandidate = candidate;
        // console.log($scope.currentCandidate);
      };

      // Method for gaining access to ng-repeat="item in issues, <a> won't accept ng-click without it.
      $scope.getScope = function() {
         return $scope;   
      };

      // Cycle method for candidate bios
      $scope.bioNext = function (index) {
        console.log('index:', index);
        if ( index == $scope.candidates.length) {
          return $scope.currentCandidate = $scope.candidates[0];
        }
          return $scope.currentCandidate = $scope.candidates[index];
      };

      // Cycle method for issue summaries
      $scope.itemNext = function (index) {
        console.log('index:', index);
        if ( index == $scope.issues.length) {
          return $scope.currentIssue = $scope.issues[0];
        }
          return $scope.currentIssue = $scope.issues[index];
      };

      // Scroll function for mobile and desktop, will be service soon
      $scope.topScroll = function () {
        window = window.scrollTo(0, 0);
        var summary = $('.summary').scrollTop(0);
        var quotes = $('#quote-body').scrollTop(0);
          return [window, quotes, summary];
      };
         
      // Using Resource Factory for all CRUD, the one below is specifically for candidates
      // Access to CRUD for issues and candidates
      var CandidateResources = new Resources('candidates');
      var IssueResources = new Resources('issues');

      // Index of issues
      IssueResources.get({})
      .$promise.then(function(resp) { 
        $scope.issues = resp.issues; 
        // console.log(resp.issues);
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

      // Logic for setting issue quote header colors
      $scope.set_header = function(item){
        if (item.title == "Gun Control") {
          return {'background-color': "#F5E265" };
        } 
        else if (item.title == "Privacy Rights") {
          return { 'background-color': "#B6D9FD" };
        }
        else if (item.title == "Campaign Finance") {
          return { 'background-color': "#FF7552" };
        }
        else if (item.title == "Immigration") {
          return { 'background-color': "#FFBDA0" };
        }
        else if (item.title == "Iran Deal") {
          return { 'background-color': "#FFC8CE" };
        }
        else if (item.title == "Abortion") {
          return { 'background-color': "#0BECB8" };
        }
      };

  };
  


})();