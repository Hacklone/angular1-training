angular.module('RoboShopApp')
    .run(function($httpBackend) {
        let robots = [];

        for(let i = 0; i < 2; i++) {
            robots.push({
                id: i,
                name: Math.random().toString(16).substring(2),
                imageUrl: `https://robohash.org/${i}?size=150x150&bgset=any`,
                price: Math.floor(Math.random() * 1000)
            });
        }

        $httpBackend.whenGET('/robots')
            .respond(robots);

        $httpBackend.whenPOST('/robots')
            .respond(function(method, url, jsonData) {
                let data = JSON.parse(jsonData);

                robots.push({
                    name: data.name,
                    price: data.price,
                    imageUrl: `https://robohash.org/${data.name}?size=150x150&bgset=any`
                });

                return [200];
            });

        $httpBackend.whenGET(/(templates|views)\/./)
            .passThrough();
    });