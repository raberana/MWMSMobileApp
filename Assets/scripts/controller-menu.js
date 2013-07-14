mwmsApp.controller('MenuController', function ($scope, $routeParams, appFactory) {
    $scope.presentUser = {};
    appFactory.getUserById($routeParams.userId).then(function (result) {
        $scope.presentUser = result.data;
    });
});
