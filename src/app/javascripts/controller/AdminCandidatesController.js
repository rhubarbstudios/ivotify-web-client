(function(){

	angular
		.module('ivotifyFrontend')
		.controller('AdminCandidatesController', AdminCandidatesController);

		AdminCandidatesController.$inject = ['Resources', '$scope', '$state', '$stateParams'];

		function AdminCandidatesController(Resources, $scope, $state, $stateParams){
			$scope.candidates = [];
			$scope.addCandidate = false;
			$scope.editCandidate = false;

		// Using Resource Factory for all CRUD, the one below is specifically for candidates

		var CandidateResources = new Resources('candidates');

		// Index of candidates

		CandidateResources.get()
		.$promise.then(function(resp){
			$scope.candidates = resp.candidates;
		});

		// Creates a candidate
		$scope.save = function(){
			console.log('trying to add candidate')
			CandidateResources.save({candidate: $scope.candidate}, function(data){

				// Adds to candidate list
				$scope.candidates.unshift(data);

				$scope.candidate_form.first_name = "";
				$scope.candidate_form.last_name = "";
				$scope.candidate_form.quotes = "";
				$scope.candidate_form.quotesource = "";
				$scope.candidate_form.bio = "";
				$scope.candidate_form.$setPristine();
			});
		};

		// //Edit a candidate
		// $scope.update = function(candidate) {
		// 	CandidateResources.update({id: candidate.id.$oid}, {candidate: candidate})
		// };


	};
	


})();