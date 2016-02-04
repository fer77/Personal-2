angular.module('myApp').directive('readMore', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/readMore.html',
        link: function (scope, element, attrs) {
            scope.buttonText = "Read more...";
            scope.subscribed = false;

            //                scope.download = function () {
            //                    element.toggleClass('btn-active');
            //                    if (scope.subscribed) {
            //                        scope.buttonText = "Subscribe";
            //                        scope.subscribed = false;
            //                    }
            //                }
        }
    };
});
