'use strict';
var deps = [
    'ngRoute',
    'ngResource',
    'homeSvcs',
    'teamSvcs',
    'userSvcs',
    'statusSvcs'
];

angular.module('upstatApp', deps)
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/users', {
                templateUrl: 'views/user/user.html',
                controller: 'UserCtrl'
            })
            .when('/teams', {
                templateUrl: 'views/team/team.html',
                controller: 'TeamCtrl'
            })
            .when('/statuses', {
                templateUrl: 'views/status/status.html',
                controller: 'StatusCtrl'
            })
            .when('/teams/:id/statuses'
              ,{
                templateUrl: 'views/team/teamStatus.html',
                controller: 'TeamStatusCtrl'
            })
            .when('/teams/:id/users', {
                templateUrl: 'views/team/teamUsers.html',
                controller: 'TeamUsersCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true).hashPrefix('!');
        // $httpProvider.interceptors.push('TokenInterceptor'); //Injects auth token id into api calls
        // $httpProvider.interceptors.push('UnauthorizedInterceptor'); //Redirects user to login page on 401
    // }).run(function ($rootScope, $http, $window, Auth, Environment) {
    }).run(function ($http) {
        // $rootScope.$on('$routeChangeStart', function () {
        //     if (Environment.get().name !== 'local' && !Auth.isAuthenticated()) {
        //         $window.location = '/login?redirect=' + $window.location.pathname;
        //         return;
        //     }
        // });

        // Forces JSON only
        $http.defaults.headers.common['Accept'] = 'application/json';
    });
