angular.module('myApp').controller('iTunes2Ctrl', ['$scope', 'iTunes2Svc', function ($scope, itunes2Svc) {

  itunes2Svc.getItunesData().then(function(itunesPodcasts) {
    //console.log(itunesPodcasts);
    $scope.pods = itunesPodcasts.data.feed.entry;
  }, function(itunesErr){
console.log("Ooops",  itunesErr);
  });

}]);
