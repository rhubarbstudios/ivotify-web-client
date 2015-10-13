"use strict"
describe('MainController', function() {
  beforeEach(module('ivotifyFrontend'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));