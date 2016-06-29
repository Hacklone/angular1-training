angular.module('RoboShop')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-panel', {
                templateUrl: 'views/admin-panel.view.html'
            })
            .otherwise({
                redirectTo: '/admin-panel'
            });
    });