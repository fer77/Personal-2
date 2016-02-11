angular.module('myApp').service('iTunes2Svc', function($http, $q) {

  this.getItunesData = function() {
    var deferred = $q.defer();
    $http.get("https://itunes.apple.com/us/rss/toppodcasts/limit=18/json").then(function(response){
        deferred.resolve(response);
		}, function(error){
        deferred.reject('There was an error');
		});
    return deferred.promise;
  };

});
