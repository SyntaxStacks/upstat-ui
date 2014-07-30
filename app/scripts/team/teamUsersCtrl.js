angular.module('upstatApp')
    .controller('TeamUsersCtrl', function ($scope, $http) {
          //var id = $routeParams.id;
          var req = {
              url: '',
              method: 'GET'
          };
          $http(req).
          success(function(data, status, headers, config) {
              $scope.teamUsers = data;
          }).
          error(function(data, status, headers, config) {
              $scope.teamUsers = [];
              $scope.notification = { message: 'teamUsers err', type: 'error' };
          });
    });
