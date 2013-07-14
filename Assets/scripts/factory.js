mwmsApp.factory('appFactory', function ($http) {
    var factory = {};

    var currentUserId = 0;

    factory.getUsers = function () {
        return $http.get('http://mwmswebservice.apphb.com/api/values');
    };

    factory.validateUser = function (username, password) {
        var url = "http://mwmswebservice.apphb.com/api/values" + "/getvalidateduser/" + username + "/" + password;
        return $http.get(url);
    };

    factory.getUserById = function (id) {
        var url = "http://mwmswebservice.apphb.com/api/values" + "/" + id;
        currentUserId = id;
        return $http.get(url);
    };
   

    return factory;
});
