angular.module('RoboShop')
    .controller('robotListController', function RobotListController(robotsService) {
        const self = this;

        angular.extend(self, {
            robots: [],

            addNewRobot: addNewRobot,
            removeRobot: removeRobot
        });

        init();
        function init() {
            robotsService.getRobots()
                .then(robots => {
                    self.robots = robots;
                });
        }

        function addNewRobot() {
            self.robots.push({
                id: self.robots.length
            });
        }

        function removeRobot(robot) {
            self.robots.splice(self.robots.indexOf(robot), 1);
        }
    });