angular.module('RoboShop')
    .component('dialog', {
        templateUrl: 'templates/dialog.template.html',
        bindings: {
            isOpened: '='
        },
        transclude: true,
        replace: true,
        controller: class DialogComponent {
            onCloseClick() {
                this.isOpened = false;
            }
        }
    });