angular.module('myApp').directive('readMore', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/readMore.html',
    };
});
