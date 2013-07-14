mwmsApp.controller('HomeController', function ($scope, appFactory) {
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
});
