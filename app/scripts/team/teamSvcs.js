angular.module('teamSvcs', [])
    .factory('Salutation', function () {
        return {
            get: function (obj) {
                return 'Hello ' + obj.name;
            }
        };
    });
