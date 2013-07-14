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



