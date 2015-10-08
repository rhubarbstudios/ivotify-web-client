(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .controller('AdminIssuesController', AdminIssuesController);

    AdminIssuesController.$inject = ['Resources', '$scope', '$state', '$stateParams'];

    function AdminIssuesController(Resources, $scope, $state, $stateParams){
      $scope.issues = [];
      $scope.addIssue = false;
      $scope.editIssue = false;

      // Using Resource Factory for all CRUD, the one below is specifcally for issues
      var IssueResources = new Resources('issues');

      // Index of issues
      IssueResources.get()
      .$promise.then(function(resp) {  
        $scope.issues = resp.issues;  
      });


      // Creates an issues
      $scope.save = function(){
        console.log('trying to add something')
        IssueResources.save({issue: $scope.issue}, function(data){

          // Adds to issue list
          $scope.issues.unshift(data);

          $scope.issue.title = "";
          $scope.issue.summary = "";
          $scope.issue_form.$setPristine();

        });
      };

      // Edit an issue
      $scope.update = function(issue) {
        IssueResources.update({id: issue._id.$oid}, {issue: issue})
        
      };



        

      
  };

})();