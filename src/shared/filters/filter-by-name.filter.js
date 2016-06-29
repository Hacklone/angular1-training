angular.module('RoboShop')
    .filter('filterByName', function() {
        return function(items, searchText) {
            if(!searchText) {
                return items;
            }

            if(!items instanceof Array) {
                throw new Error('items is not an array');
            }

            return items.filter(item => item.name.indexOf(searchText) !== -1);
        };
    });