angular.module('myApp').service('itunesSvc', function($http, $q) {

  this.getItunesData = function() {
    var deferred = $q.defer();
    $http.get("https://itunes.apple.com/us/rss/toppodcasts/limit=5/json").then(function(response){
        deferred.resolve(response);
		}, function(error){
        deferred.reject('There was an error');
		});
    return deferred.promise;
  };
  
});
