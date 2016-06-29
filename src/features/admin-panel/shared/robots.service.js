angular.module('RoboShop')
    .service('robotsService', class RobotsService {
        constructor($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }

        getRobots() {
            const self = this;

            return self.$q((resolve, reject) => {
                return self.$http.get('/robots')
                    .success(resolve)
                    .error(reject);
            });
        }

        addRobot(robot) {
            const self = this;

            return self.$q((resolve, reject) => {
                return self.$http.post('/robots', robot)
                    .success(resolve)
                    .error(reject);
            });
        }
    });