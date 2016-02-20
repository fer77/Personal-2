angular.module('myApp').controller('userCtrl', function($scope, userSvc) {
  $scope.signUp = function(email) {
    var user = {
      email: email
    }
    userSvc.createUser(user).then(function(response) {
      $scope.currentUser = response;
    });
  };

  // userSvc.getItunesTrendingData().then(function(result) {
  //   console.log(result);
  //   $scope.trending = result.data.feed.entry;
  // }, function(err){
  // console.log("Ooops",  err);
  // });

});
