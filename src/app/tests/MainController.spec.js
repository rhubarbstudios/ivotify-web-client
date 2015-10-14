// "use strict"

// describe('Resource', function() {
//   beforeEach(module('ivotifyFrontend'));
//   beforeEach(inject($httpBackend), function(){
//     $httpBackend.whenGET('/api/issues').respond([]);

//     it('should return an array of objects', function(){
//       issues = ''
//       expect()

//     })
//   });
    



// }









// describe('MainController', function() {

//   var   $q,
//         $controller,
//         $rootScope,
//         $scope,
//         mockResourceService,
//         mockResourceResponse = [{name: 'foobagel'}, {name: 'barbagel'}],
//         queryDeferred;

//   beforeEach(module('ivotifyFrontend'));

//   beforeEach(inject(function(_$controller_, _$q_, _$rootScope_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $controller = _$controller_;
//     $q = _$q_;
//     $rootScope = _$rootScope_;
//   }));

//   beforeEach(inject(function($controller) {
//     $scope = $rootScope.$new();
    
//     mockResourceService = {
//       get: function() {
//         queryDeferred = $q.defer();
//         return {$promise: queryDeferred.promise};
//       }
//     }
    
//     spyOn(mockResourceService, 'get').and.callThrough();
    
//     $controller('MainController', {
//       '$scope': $scope,
//       'Resource': mockResourceService
//     });
//   }));

//   describe('mockResourceService.get', function() {
      
//       beforeEach(function() {
//         queryDeferred.resolve(mockResourceResponse);
//         $rootScope.$apply();
//       });
      
//       it('should get the Resource', function() {
//         expect(mockResourceService.get).toHaveBeenCalled();
//       });
      
//       it('should set the response from the mockResourceService to $scope.issues', function() {
//         expect($scope.issues).toEqual(mockResourceResponse);
//       });
//     });



//   // Testing the $scope.issues and $scope.candidates variables
//   describe('$scope.issues + $scope.candidates', function() {

//      it('makes sure that $scope.issues returns an array', function() {
//       var $scope = {};
//       var controller = $controller('MainController', { $scope: $scope });
//       $scope.issues = [{}];
//       expect($scope.issues).toBeTruthy();
//      });

//      it('makes sure that $scope.candidates returns an array', function() {
//       var $scope = {};
//       var controller = $controller('MainController', { $scope: $scope });
//       $scope.candidates = [{}];
//       expect($scope.candidates).toBeTruthy();
//      });

//   });
// });