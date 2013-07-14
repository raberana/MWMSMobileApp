var mwmsApp = angular.module('mwmsApp', []);

mwmsApp.config(function ($routeProvider) {
    $routeProvider
    .when('/main',
    {
        controller: 'HomeController',
        templateUrl: '/partials/home.html'
    })
    .when('/menu/:userId',
    {
        controller: 'MenuController',
        templateUrl: '/partials/menu.html'
    })
    .otherwise({ redirectTo: '/main' });
});



