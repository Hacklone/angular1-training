angular.module('RoboShop')
    .controller('robotListController', function RobotListController() {
        const self = this;

        angular.extend(self, {
            robots: [],

            addNewRobot: addNewRobot,
            removeRobot: removeRobot
        });

        init();
        function init() {
            for (let i = 0; i < 15; i++) {
                self.robots.push({
                    id: i
                });
            }
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