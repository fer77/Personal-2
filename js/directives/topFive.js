angular.module('myApp').directive('topFive', function () {
  return {
  restrict: 'E',
  scope: {
    info: '='
  },
  templateUrl: 'js/directives/topFive.html'
};
});
