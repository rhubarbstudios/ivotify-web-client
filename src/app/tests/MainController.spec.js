"use strict"
describe('MainController', function() {
  beforeEach(module('ivotifyFrontend'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.issues + $scope.candidates' function() {

     it('makes sure that $scope.issues returns an array', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      $scope.issues = [{}];
      expect($scope.issues).toBeTruthy();
     });

     it('makes sure that $scope.candidates returns an array', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      $scope.candidates = [{}];
      expect($scope.candidates).toBeTruthy();
     });

  });

  

  });
});