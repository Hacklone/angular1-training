angular.module('RoboShop')
    .run(function($httpBackend) {
        let robots = [];

        for(let i = 0; i < 20; i++) {
            robots.push({
                id: i,
                name: Math.random().toString(16).substring(2),
                imageUrl: `https://robohash.org/${i}?size=150x150`,
                price: Math.floor(Math.random() * 1000)
            });
        }

        $httpBackend.whenGET('/robots')
            .respond(robots);

        $httpBackend.whenGET(/(templates|views)\/./)
            .passThrough();
    });