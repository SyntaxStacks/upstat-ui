angular.module('statusSvcs', [])
    .factory('Salutation', function () {
        return {
            get: function (obj) {
                return 'Hello ' + obj.name;
            }
        };
    });
