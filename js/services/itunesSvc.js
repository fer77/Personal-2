angular.module('myApp').service('itunesSvc', function($http) {

  this.getItunesData = function(searchTerm) {
    return $http.get("https://itunes.apple.com/us/rss/toppodcasts/limit=5/json").then(function(response){
				console.log(response);
        //return
		}, function(error){
				console.log(error);
		})
  }

  this.getItunesData('npr');
})
