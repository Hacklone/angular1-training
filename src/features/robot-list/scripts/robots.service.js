angular.module('RoboShop')
    .service('robotsService', function RobotsService($http, $q) {
        function getRobots() {
            return $q((resolve, reject) => {
                return $http.get('/robots')
                    .success(resolve)
                    .error(reject);
            });
        }

        return {
            getRobots: getRobots
        };
    });