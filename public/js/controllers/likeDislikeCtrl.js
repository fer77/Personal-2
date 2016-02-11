angular.module('myApp').controller('likeDislikeCtrl', function($scope, podcastsSvc) {
  $scope.up = 0;
  $scope.down = 0;

  $scope.voteUp = function(podcast) {
    podcastsSvc.upVote(podcast);
    // $scope.up += 1;
  };

  $scope.voteDown = function(podcast) {
    podcastsSvc.downVote(podcast);
    // $scope.down += 1;
  };
});
