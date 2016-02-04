angular.module('myApp').directive('podInfo', function () {
  return {
  restrict: 'E',
  scope: {
    info: '='
  },
  templateUrl: 'js/directives/podInfo.html'
};
});
