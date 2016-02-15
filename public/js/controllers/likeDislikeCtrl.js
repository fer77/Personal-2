angular.module('myApp').controller('likeDislikeCtrl', function($scope, podcastsSvc) {
  $scope.voteUp = function(podcast) {
    podcastsSvc.upVote(podcast);
    $scope.upVotes += 1;
  };

  $scope.voteDown = function(podcast) {
    podcastsSvc.downVote(podcast);
    $scope.downVotes += 1;
  };

  });
