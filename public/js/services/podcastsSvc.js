angular.module('myApp').service('podcastsSvc', function($http) {
this.upVote = function(podcast) {
  console.log(podcast.id.attributes["im:id"]);
  $http.put('/podcast/' + podcast.id.attributes["im:id"], {title:podcast['im:name'].label,direction:'upvote'}).then(function(count) {
      return count.data;
  });
};

this.downVote = function(podcast) {
  console.log(podcast.id.attributes["im:id"]);
  $http.put('/podcast/' + podcast.id.attributes["im:id"], {title:podcast['im:name'].label,direction:'downvote'}).then(function(count) {
      return count.data;
  });
};

this.getCurrentVotes = function(podcastId) {
  //console.log(podcastId);
  return $http.get('/podcast?podcastId=' + podcastId).then(function(podcastInfo) {
      return podcastInfo.data;
  });
}

});
