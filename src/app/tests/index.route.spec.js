"use strict"

// Route Tests for Welcome
describe('ivotifyFrontend/welcome', function() {
  var $rootScope, $state, $injector;
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/welcome.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('welcome')).toEqual('#/');
  });

  it('should activate the state', function() {
    $state.go('welcome');
    $rootScope.$digest();
    expect($state.current.name).toBe('welcome');
  });

});


// Route Tests for Admin
describe('ivotifyFrontend/admin', function() {
  var $rootScope, $state, $injector
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/admin.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('admin')).toEqual('#/admin');
  });

  it('should activate the state', function() {
    $state.go('admin');
    $rootScope.$digest();
    expect($state.current.name).toBe('admin');
  });

});

// Route Tests for Admin.Issues
describe('ivotifyFrontend/admin/issues', function() {
  var $rootScope, $state, $injector
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/admin/issues.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('admin.issues')).toEqual('#/admin/issues');
  });

  it('should activate the state', function() {
    $state.go('admin.issues');
    $rootScope.$digest();
    expect($state.current.name).toBe('admin.issues');
  });

});

// Route Tests for Admin.Candidates
describe('ivotifyFrontend/admin/candidates', function() {
  var $rootScope, $state, $injector
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/admin/candidates.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('admin.candidates')).toEqual('#/admin/candidates');
  });

  it('should activate the state', function() {
    $state.go('admin.candidates');
    $rootScope.$digest();
    expect($state.current.name).toBe('admin.candidates');
  });

});

// Route Tests for Admin
describe('ivotifyFrontend/main', function() {
  var $rootScope, $state, $injector
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/main.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('main')).toEqual('#/main');
  });

  it('should activate the state', function() {
    $state.go('main');
    $rootScope.$digest();
    expect($state.current.name).toBe('main');
  });

});

// Route Tests for Main.Issues 
describe('ivotifyFrontend/main/issues', function() {
  var $rootScope, $state, $injector
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/main/issues.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('main.issues')).toEqual('#/main/issues');
  });

  it('should activate the state', function() {
    $state.go('main.issues');
    $rootScope.$digest();
    expect($state.current.name).toBe('main.issues');
  });

});

// Route Tests for Main.Candidate 
describe('ivotifyFrontend/main/candidate', function() {
  var $rootScope, $state, $injector
  beforeEach(module('ivotifyFrontend'));
  beforeEach(

  inject(function(_$rootScope_, _$state_, $templateCache) {
        $rootScope = _$rootScope_;
        $state = _$state_;

        // We need add the template entry into the templateCache if we ever
        // specify a templateUrl
        $templateCache.put('app/templates/main/candidate.html', '');

  }));

  it('should respond to URL', function() {
    expect($state.href('main.candidate')).toEqual('#/main/candidate');
  });

  it('should activate the state', function() {
    $state.go('main.candidate');
    $rootScope.$digest();
    expect($state.current.name).toBe('main.candidate');
  });

});