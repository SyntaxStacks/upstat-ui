angular.module('upstatApp')
    .controller('TeamStatusCtrl', function ($scope, $http) {
          var id = $routeParams.id;
          var req = {
              method: 'GET',
              url: 'http://api.rackstats.rax.io/team/' + id + '/status',
          };
          $http(req).
          success(function(data, status, headers, config) {
              $scope.teamStatus = data;
          }).
          error(function(data, status, headers, config) {
              $scope.teamStatus = [];
              $scope.notification = { message: 'teamStatus err', type: 'error' };
          });
    });
