describe('RobotsService', () => {
    let $httpBackend;
    let robotsService;

    beforeEach(() => {
        module('RoboShop');

        inject(function (_$httpBackend_, _robotsService_) {
            $httpBackend = _$httpBackend_;
            robotsService = _robotsService_;
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('getRobots()', () => {
        it('should call robots api', () => {
            let responseRobots = [
                {id: 1}
            ];

            $httpBackend.expectGET('/robots')
                .respond(responseRobots);

            let isResultCalled = false;

            robotsService.getRobots()
                .then((result) => {
                    isResultCalled = true;

                    expect(result).toEqual(responseRobots);
                })
                .catch(() => {
                    expect(true).toEqual(false);
                });

            $httpBackend.flush();

            expect(isResultCalled).toBeTruthy();
        });
    });
});