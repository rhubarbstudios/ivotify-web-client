(function(){
'use strict';

  angular
    .module('ivotifyFrontend')
    .controller('AdminIssuesController', AdminIssuesController);

    AdminIssuesController.$inject = ['Resources','MaterializeComponents','$scope', '$state', '$stateParams'];

    function AdminIssuesController(Resources, MaterializeComponents, $scope, $state, $stateParams){
      $scope.issues = [];
      $scope.issue = {};
      $scope.issue.issue_sides = [{}];
      $scope.issue.issue_side = {};
      $scope.issue.issue_side.issue_bullets = [{}];
      $scope.addIssue = false;
      $scope.editIssue = false;

      // Using Resource Factory for all CRUD, the one below is specifcally for issues
      var IssueResources = new Resources('issues');

      // Index of issues
      IssueResources.get()
      .$promise.then(function(resp) { 
        $scope.issues = resp.issues; 
        console.log('resp', resp.issues);
      });

      // Creates an issues
      $scope.save = function(){
        $scope.removeEmptyIssueSide($scope.issue.issue_sides);
        IssueResources.save({issue: $scope.issue}, function(data){

          // Adds to issue list
          $scope.issues.unshift(data);

          // Timeout for rendering dom elements before deleting
          setTimeout(function(){
            $scope.initModals();
          }, 500);

          $scope.issue.title = "";
          $scope.issue.summary = "";
          $scope.issue.background = "";
          $scope.issue_form.issue_sides = {};
          $scope.issue_form.issue_bullets = {};
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

      // Add new issue_sides field in issue create modal
			$scope.addNewIssueSide = function(issue) {
				if (issue.issue_sides) {
					var newItemNo = issue.issue_sides.length+1;
				}
				else {
					issue.issue_sides = [];
				}
				issue.issue_sides.push({'tempId': newItemNo});
				return false;
			}

			// Removes empty issue_sides from issue object
			$scope.removeEmptyIssueSide = function(issue_sides) {
				var i = issue_sides.length;
				while (i--){
					if (!issue_sides[i].title) {
						issue_sides.splice(i, 1);
					}
				}
			}


      // Clears the form when you cancel feedback as well
      $scope.clearFeedback = function(){
        $scope.feedback.body = "";
        $scope.feedback_form.$setUntouched();
      };

      $scope.$on('ngRepeatFinished', function(){
        MaterializeComponents.addModal();
      })

      // Allows me to use the modal inside of ng-repeat
  		$scope.initModals = function() {
  	  	MaterializeComponents.addModal();
  		}

  };

})();
