angular.module('myApp').service('itunesSvc', function($http) {

  this.getItunesData = function() {
    return $http.get("https://itunes.apple.com/us/rss/toppodcasts/limit=5/json").then(function(response){
				console.log(response);
		}, function(error){
				console.log(error);
		})
  }
})


// var app = angular.module('itunes');
//
// app.service('itunesService', function($http, $q){
//
// var baseUrl = 'https://itunes.apple.com/search?term=';
//     var _artist = '';
//     var _finalUrl = '';
//
//     var makeUrl = function(artist) {
//         _artist = artist;
//         _artist = _artist.split(' ').join('+');
//         _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
//         return _finalUrl;
//     }
//     this.setArtist = function(artist) {
//         _artist = artist;
//     }
//     this.getArtist = function() {
//         return _artist;
//     }
//     this.callItunes = function(artist) {
//         //console.log('srvArtist', artist);
//         makeUrl(artist);
//         var deferred = $q.defer();
//         $http({
//             method: 'JSONP',
//             url: _finalUrl
//         }).success(function(data) {
//             deferred.resolve(data.results);
//         }).error(function(){
//             deferred.reject('There was an error')
//         })
//         return deferred.promise;
//     }
// });
