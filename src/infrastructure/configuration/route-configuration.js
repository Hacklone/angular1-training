angular.module('RoboShop')
    .config(function($routeProvider) {
        $routeProvider
            .when('/admin-panel', {
                templateUrl: 'views/admin-panel.view.html'
            })
            .when('/add-robot', {
                templateUrl: 'views/add-robot.view.html'
            })
            .when('/browse-panel', {
                templateUrl: 'views/browse-panel.view.html'
            })
            .otherwise({
                redirectTo: '/browse-panel'
            });
    });