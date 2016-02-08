angular.module('myApp').controller('mainCtrl', ['$scope', 'iTunes2Svc', function ($scope, itunesSvc) {

  itunesSvc.getItunesData().then(function(result) {
    console.log(result);
    $scope.pods = result.data.feed.entry;
  }, function(err){
console.log("Ooops",  err);
  });

}]);

// angular.module('myApp').controller('mainCtrl', ['$scope', function ($scope) {
//
//     $scope.pods = [
//         {
//             icon: 'http://nationalpublicmedia.com/wp-content/uploads/2014/06/planetmoney.png',
//             title: 'Planet Money',
//             intro: 'by: npr',
//             // link: 'http://www.npr.org/rss/rss.php?id=127413729'
// 	  },
//         {
//             icon: 'http://www.wnyc.org/i/raw/1/Freakonomics_iTunes_Square-new.png',
//             title: 'Freakonomics',
//             intro: 'by: Stephen J. Dubner, Steven D. Levitt & New York Public Radio',
//             // link: 'http://www.wnyc.org/articles/freakonomics-podcast/'
// 	  },
//         {
//             icon: 'http://www.dancarlin.com/wp-content/uploads/2014/07/HH-current-239x239.jpg',
//             title: 'Hardcore History',
//             intro: 'by: Dan Carlin',
//             // link: 'https://itunes.apple.com/ca/podcast/dan-carlins-hardcore-history/id173001861?mt=2'
// 	  },
//         {
//             icon: 'http://cdn.99percentinvisible.org/wp-content/uploads/powerpress/99invisible-logo-1400.jpg',
//             title: '99% Invisible',
//             intro: 'by: Roman Mars for Radiotopia',
//             // link: 'http://feeds.99percentinvisible.org/99percentinvisible'
// 	  }
// 	];
//
// }]);
