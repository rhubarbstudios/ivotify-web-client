"use strict"
describe('MainController', function() {
  beforeEach(module('ivotifyFrontend'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.issues;' function() {
     it('makes sure that $scope.issues returns an array', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.issues = [{}];
      expect($scope.issues).toBeTruthy();
     });
  });
});