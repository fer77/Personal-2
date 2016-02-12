angular.module('myApp').directive('podInfo', function () {
  return {
  restrict: 'E',
  scope: {
    info: '='
  },
  templateUrl: 'js/directives/podInfo.html',
  controller: function($scope, podcastsSvc) {
    //console.log($scope.info);

    podcastsSvc.getCurrentVotes($scope.info.id.attributes['im:id']).then(function(dbPodcastInfo) {
      $scope.dbPodcastInfo = dbPodcastInfo;
      //console.log($scope.dbPodcastInfo);
      if ($scope.dbPodcastInfo.length !== 0) {
        $scope.upVotes = $scope.dbPodcastInfo[0].upVotes;
        $scope.downVotes = $scope.dbPodcastInfo[0].downVotes;
      } else {
        $scope.upVotes = 0;
        $scope.downVotes = 0;
      }

      }, function (databaseErr) {
        console.log(databaseErr);
      })
  }
};
});
