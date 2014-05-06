var siteApp = angular.module('siteApp', ['ngRoute', 'ngAnimate']);

// configure our routes
siteApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/index.html',
        controller  : 'indexController'
    })

    .when('/projects/', {
        templateUrl : 'pages/projects.html',
        controller  : 'projectsController'
    });
});

siteApp.controller('indexController', function($scope) {
    $scope.pageClass = 'index';
});

siteApp.controller('projectsController', function($scope, $http) {
    $scope.projects = [];
    $scope.pageClass = 'projects';

    $http.get('projects.json').then(function(response){
        $scope.projects = response.data;
    });
});
