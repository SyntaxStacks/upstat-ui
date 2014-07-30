angular.module('upstatApp')
    .controller('UserCtrl', function ($scope, $http) {
        var req = {
            url: 'http://api.rackstats.rax.io/user',
            method: 'GET',
        };
        $http(req).
        success(function(data, status, headers, config) {
            $scope.users = data;
        }).
        error(function(data, status, headers, config) {
            $scope.users = [];
            $scope.notification = { message: 'user err', type: 'error' };
        });
    });
