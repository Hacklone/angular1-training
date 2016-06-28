angular.module('RoboShop')
    .component('robotDetail', {
        templateUrl: 'templates/robot-detail.template.html',
        bindings: {
            robot: '<'
        }
    });