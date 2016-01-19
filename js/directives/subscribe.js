angular.module('myApp').directive('subscribe', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/subscribe.html',
        link: function (scope, element, attrs) {
            scope.buttonText = "Subscribe",
                scope.subscribed = false,

                scope.download = function () {
                    element.toggleClass('btn-active');
                    if (scope.subscribed) {
                        scope.buttonText = "Subscribe";
                        scope.subscribed = false;
                    }
                }
        }
    };
});
