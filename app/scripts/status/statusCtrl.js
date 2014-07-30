angular.module('upstatApp')
    .controller('StatusCtrl', function ($scope, $http) {
        var req = {
            url: 'http://api.rackstats.rax.io/status',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
        $http(req).
        success(function(data, status, headers, config) {
            $scope.statuses = data;
        }).
        error(function(data, status, headers, config) {
            $scope.status = [];
            $scope.notification = { message: 'status err', type: 'error' };
        });
    });
