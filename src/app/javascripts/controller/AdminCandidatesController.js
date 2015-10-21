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
			$scope.candidate.quotes = [{id: '1'}];

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
		  console.log(resp.issues);
		});

		// Creates a candidate
		$scope.save = function(){
			console.log('trying to add candidate');
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

		// Add new quote field in candidate create modal
		$scope.addNewQuote = function(candidate) {
			var newItemNo = candidate.quotes.length+1;
			candidate.quotes.push({'id': newItemNo});
			return false;
		}

		// Clears quotes if modal is cancelled
		$scope.clearQuotes = function(candidate) {
			candidate.quotes = [{id: '1'}];
		}


		// //Edit a candidate
		$scope.update = function(candidate) {
			console.log("candidate: ", candidate);
			CandidateResources.update({id: candidate.id}, {candidate: candidate})
		};

		$scope.$on('ngRepeatFinished', function(){
			console.log("calls ngrepeat finished");
			MaterializeComponents.addCollapsible();
		})

		MaterializeComponents.addModal();

	};



})();