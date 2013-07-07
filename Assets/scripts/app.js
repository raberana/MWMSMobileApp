var mwmsApp = angular.module('mwmsApp', []);

mwmsApp.config(function ($routeProvider) {
    $routeProvider
    .when('/main',
    {
        controller: 'HomeController',
        templateUrl: '/partials/home.html'
    })
    .otherwise({ redirectTo: '/main' });
});

mwmsApp.controller('HomeController', function ($scope, appFactory) {
    $scope.users = [];

    $scope.showUsers = function () {
        alert("start");
        $scope.users = appFactory.getUsers();
        alert("done");
    };

});

mwmsApp.factory('appFactory', function () {
    var users = [];
    var factory = {};
    factory.getUsers = function () {
        alert("calling api");

        $.ajax({
            url: "http://localhost:30028/api/values",
            dataType: "jsonp",
            async: false,
            success: function (_users) {
                alert(_users);
                var datas = angular.toJson(_users);
                $.each(_users, function (key, data) {
                    users.push({
                        UserName: data.userName,
                        ClientId: data.clientId
                    });
                });
                alert("returning values");
                return users;
            },
            error: function (xhr, status, error) {
                alert(status + " -- " + error);
            }
        });

    };
    return factory;
});

