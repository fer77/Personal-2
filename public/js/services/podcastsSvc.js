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
}

  });




// var deferred = $q.defer();
//
// $http.post('address', data).then(function(response){
//     deferred.resolve(response);
// }, function(error){
//     deferred.reject('There was an error');
// });
// return deferred.promise;
