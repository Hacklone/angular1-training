angular.module('RoboShop')
    .component('addRobotForm', {
        templateUrl: 'templates/add-robot-form.template.html',
        controller: class AddRobotFormComponent {
            constructor($location, robotsService) {
                this.$location = $location;
                this.robotsService = robotsService;

                this.newRobot = {};
            }

            saveRobot() {
                const self = this;

                self.robotsService.addRobot(self.newRobot)
                    .then(function() {
                        self.$location.path('/admin-panel');
                    });
            }
        }
    });