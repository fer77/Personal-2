angular.module('myApp').controller('iTunesCtrl', ['$scope', 'itunesSvc', function ($scope, itunesSvc) {

  itunesSvc.getItunesData().then(function(result) {
    console.log(result);
    $scope.data = result.data.feed.entry;
  }, function(err){
console.log("Ooops",  err);
  });

}]);
