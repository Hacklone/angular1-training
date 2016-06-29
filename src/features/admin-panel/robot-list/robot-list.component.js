angular.module('RoboShop')
    .component('robotList', {
        templateUrl: 'templates/robot-list.template.html',
        controller: class RobotListController {
            constructor(robotsService, $scope, $location) {
                this.robotsService = robotsService;
                this.$scope = $scope;
                this.$location = $location;

                this.robots = [];
            }

            $onInit() {
                const self = this;

                self.robotsService.getRobots()
                    .then(robots => {
                        self.robots = robots;
                    });
            }

            increasePrice(robot) {
                robot.price += 100;

                this.$scope.$apply();
            }

            showRobotDetails(robot) {
                this.robotShownInDialog = robot;

                this.isRobotDetailDialogOpened = true;
            }

            addNewRobot() {
                this.$location.path('/add-robot');
            }

            removeRobot(robot) {
                this.robots.splice(this.robots.indexOf(robot), 1);
            }
        }
    });