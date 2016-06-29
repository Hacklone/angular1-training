angular.module('RoboShop')
    .component('robotGrid', {
        templateUrl: 'templates/robot-grid.template.html',
        controller: class RobotGridComponent {
            constructor(robotsService) {
                this.robots = [];

                this.robotsService = robotsService;
            }

            $onInit() {
                const self = this;

                self.robotsService.getRobots()
                    .then(robots => {
                        self.robots = robots;
                    });
            }
        }
    });