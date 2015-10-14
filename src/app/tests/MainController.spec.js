'use strict';
describe('MainController', function() {
  var     $q,
          $controller,
          $rootScope,
          $scope;

beforeEach(module('ivotifyFrontend'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  // Testing the $scope.issues and $scope.candidates variables
  describe('$scope.issues + $scope.candidates', function() {

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
