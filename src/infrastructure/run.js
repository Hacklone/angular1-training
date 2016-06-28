angular.module('RoboShop')
    .run(function($httpBackend) {
        let robots = [];

        for(let i = 0; i < 10; i++) {
            robots.push({
                id: i
            });
        }

        $httpBackend.whenGET('/robots')
            .respond(robots);

        $httpBackend.whenGET(/templates\/./)
            .passThrough();
    });