(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .controller('AdminIssuesController', AdminIssuesController);

    AdminIssuesController.$inject = ['Resources','MaterializeComponents','$scope', '$state', '$stateParams'];

    function AdminIssuesController(Resources, MaterializeComponents, $scope, $state, $stateParams){
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
        IssueResources.update({id: issue.id}, {issue: issue})
      };

      // Logic for passing index from ng-repeat to modal
      $scope.deleteIndex = function(index, issue) {
        $scope.issueDelete = issue;
        $scope.issueIndex = index;
      };

      // Delete an Issue
      $scope.deleteIssue = function() {
        console.log('$scope.issueDelete.id', $scope.issueDelete.id)
        IssueResources.delete({id: $scope.issueDelete.id}, {issue: $scope.issueDelete}, function(data){
          data = $scope.issueIndex;

          // Deletes from issue list
          $scope.issues.splice(data);
          console.log('data', data);

        });
      };

      // Allows me to use the modal inside of ng-repeat
  		$scope.initModals = function() {
  	  	MaterializeComponents.addModal();
  		}

  };

})();
