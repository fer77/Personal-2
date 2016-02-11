angular.module('myApp').directive('topFive', function () {
  return {
  restrict: 'E',
  scope: {
    info: '='
  },
  controller: function($scope) {

  },
  templateUrl: 'js/directives/topFive.html'
};
});
