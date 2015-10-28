(function(){
'use strict';

	angular
		.module('ivotifyFrontend')
		.controller('AdminCandidatesController', AdminCandidatesController);

		AdminCandidatesController.$inject = ['Resources', 'MaterializeComponents', '$scope', '$state', '$stateParams', '$timeout'];

		function AdminCandidatesController(Resources, MaterializeComponents, $scope, $state, $stateParams, $timeout){
			$scope.candidates = [];
			$scope.issues = [];
			$scope.addCandidate = false;
			$scope.editCandidate = false;
			$scope.candidate = {};
			$scope.candidate.quotes = [];

		// Using Resource Factory for all CRUD, the one below is specifically for candidates
		var CandidateResources = new Resources('candidates');

		// Also gets issues for quotes relationship
		var IssueResources = new Resources('issues');

		// Index of candidates
		CandidateResources.get()
		.$promise.then(function(resp){
			$scope.candidates = resp.candidates;
		});

		// Index of issues
		IssueResources.get({})
		.$promise.then(function(resp) { 
		  $scope.issues = resp.issues; 
		});

		// Creates a candidate
		$scope.save = function(){
			$scope.removeEmptyQuotes($scope.candidate.quotes);
			CandidateResources.save({candidate: $scope.candidate}, function(data){

				// Adds to candidate list
				$scope.candidates.unshift(data);

				$scope.candidate_form.first_name = "";
				$scope.candidate_form.last_name = "";
				$scope.candidate_form.quotes = {};
				$scope.candidate_form.bio = "";
				$scope.candidate_form.$setPristine();
			});
		};

		//Edit a candidate
		$scope.update = function(candidate) {
			$scope.removeEmptyQuotes(candidate.quotes);
			CandidateResources.update({id: candidate.id}, {candidate: candidate},
				function(successResult) {
	        console.log('successResult', successResult);
	    	},
				function(errorResult) {
	      	console.log('errorResult', errorResult);
	      }
			);
		};

		// Add new quote field in candidate create modal
		$scope.addNewQuote = function(candidate) {
			if (candidate.quotes) {
				var newItemNo = candidate.quotes.length+1;
			}
			else {
				candidate.quotes = [];
			}
			candidate.quotes.push({'id': newItemNo});
			return false;
		}

		// Removes empty quotes from candidate object
		$scope.removeEmptyQuotes = function(quotes) {
			var i = quotes.length;
			while (i--){
				if (!quotes[i].body) {
					quotes.splice(i, 1);
				}
			}
		}

		// Adds collapsible functionality to quotes after repeate for candidates has finished
		$scope.$on('ngRepeatFinished', function(){
			MaterializeComponents.addCollapsible();
		})

		// Adds Modal functionality on page load
		MaterializeComponents.addModal();

	};

})();
