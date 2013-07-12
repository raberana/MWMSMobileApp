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
        var requestApiUsers = appFactory.getUsers();
        $.when(requestApiUsers).done(function (_results) {
            $scope.users = _results;
            $scope.$apply();
        });
    };
});

mwmsApp.factory('appFactory', function () {
    var users = [];
    var factory = {};
    factory.getUsers = function () {
        var jqXHR = $.ajax({
            url: "http://localhost:30028/api/values",
            dataType: "jsonp",
            success: function (_users) {
                var datas = angular.toJson(_users);
                $.each(_users, function (key, data) {
                    users.push({
                        UserName: data.userName,
                        ClientId: data.clientId
                    });
                });
            },
            error: function (xhr, status, error) {
                alert(status + " -- " + error);
            }
        });
        return jqXHR;
    };
    return factory;
});
