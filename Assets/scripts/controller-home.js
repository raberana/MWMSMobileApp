mwmsApp.controller('HomeController', function ($scope, $location, appFactory) {
    $scope.users = [];
    var users = [];



    $scope.showUsers = function () {
        appFactory.getUsers().then(function (returnedData) {

            angular.forEach(returnedData.data, function (value, key) {
                users.push({
                    UserName: value.UserName,
                    ClientId: value.ClientId
                });
            });
            $scope.users = users;
        });
    };


    $scope.login = function () {
        var newUserName = $scope.loginUserName;
        var newUserPassword = $scope.loginPassword;

        appFactory.validateUser(newUserName, newUserPassword).then(function (result) {
            var loc = "/menu/" + result.data.Id;
            $location.path(loc);
        });

    };
});


