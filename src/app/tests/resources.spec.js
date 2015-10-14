'use strict';
describe('Resources', function () {
    var mockResource, 
        $httpBackend;
    beforeEach(module('ivotifyFrontend'));
    beforeEach(angular.mock.module('ivotifyFrontend'));

    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mockResource = $injector.get('Resources');
        })
    });

    describe('IssueResources.get', function () {
        it('should retrieve an array of issue objects', inject(function (Resources) {
            $httpBackend.expectGET('https://ivotify-api.herokuapp.com/api/issues')
                .respond(200, 'success');
        }));
    });

    describe('CandidateResources.get', function () {
        it('should retrieve an array of candidate objects', inject(function (Resources) {
            $httpBackend.expectGET('https://ivotify-api.herokuapp.com/api/candidates')
                .respond(200, 'success');
        }));
    });
});