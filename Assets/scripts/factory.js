mwmsApp.factory('appFactory', function ($http) {
    var factory = {};


    factory.getUsers = function () {
        return $http.get('http://mwmswebservice.apphb.com/api/values');
    };


    return factory;
});
