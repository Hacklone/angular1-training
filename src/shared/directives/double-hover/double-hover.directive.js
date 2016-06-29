angular.module('RoboShop')
    .directive('doubleHover', function() {
        return {
            restrict: 'A',
            scope: {
                doubleHover: '&'    //delegate
            },
            link: function($scope, $element, $attr) {
                let mouseEntered = 0;

                $element[0].onmouseover = function() {
                    mouseEntered++;

                    if(mouseEntered > 1) {
                        mouseEntered = 0;

                        $scope.doubleHover();
                    }
                };
            }
        };
    });