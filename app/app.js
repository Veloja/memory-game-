var app = angular.module('memoryApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/memory',
        {
            controller: 'MemoryController',
            templateUrl: '/app/partials/memory.html'
        })
        .otherwise({ redirectTo: '/memory' });
});