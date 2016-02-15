angular.module('myApp').service('userSvc', function($http, $q) {
  this.createUser = function(user) {
      return $http({
        method: 'POST',
        url: '/user',
        data: user
      }).then(function(res) {
        return res.data;
      })
  };
  this.getCurrentUser = function(userId) {
    // console.log(userId);
    return $http.get('/user?userId=' + userId).then(function(userInfo) {
        return userInfo.data;
    });
  };

  this.getItunesTrendingData = function() {
    var deferred = $q.defer();
    $http.get("https://itunes.apple.com/us/rss/toppodcasts/limit=5/json").then(function(response){
        deferred.resolve(response);
		}, function(error){
        deferred.reject('There was an error');
		});
    return deferred.promise;
  };

});
