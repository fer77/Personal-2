<<<<<<< HEAD
angular.module('myApp').controller('mainCtrl', ['$scope', 'itunesSvc', function ($scope, itunesSvc) {
    $scope.pods = [
        {
            icon: 'http://nationalpublicmedia.com/wp-content/uploads/2014/06/planetmoney.png',
            title: 'Planet Money',
            intro: 'by: npr',
            // link: 'http://www.npr.org/rss/rss.php?id=127413729'
	  },
        {
            icon: 'http://www.wnyc.org/i/raw/1/Freakonomics_iTunes_Square-new.png',
            title: 'Freakonomics',
            intro: 'by: Stephen J. Dubner, Steven D. Levitt & New York Public Radio',
=======
angular.module('myApp').controller('mainCtrl', ['$scope', function ($scope) {
    $scope.pods = [
        {
            icon: 'http://nationalpublicmedia.com/wp-content/uploads/2014/06/planetmoney.png',
            by: 'npr',
            title: 'Planet Money',
            network: 'npr',
            link: 'http: //www.npr.org/rss/rss.php?id=127413729'
	  },
        {
            icon: 'http://www.wnyc.org/i/raw/1/Freakonomics_iTunes_Square-new.png',
            by: 'Stephen J. Dubner & Steven D. Levitt',
            title: 'Freakonomics',
            network: 'New York Public Radio',
>>>>>>> 087df407bdb50c2ca301aa80e928a8dd5fe2f1dd
            // link: 'http://www.wnyc.org/articles/freakonomics-podcast/'
	  },
        {
            icon: 'http://www.dancarlin.com/wp-content/uploads/2014/07/HH-current-239x239.jpg',
<<<<<<< HEAD
            title: 'Hardcore History',
            intro: 'by: Dan Carlin',
=======
            by: 'Dan Carlin',
            title: 'Hardcore History',
            network: '',
>>>>>>> 087df407bdb50c2ca301aa80e928a8dd5fe2f1dd
            // link: 'https://itunes.apple.com/ca/podcast/dan-carlins-hardcore-history/id173001861?mt=2'
	  },
        {
            icon: 'http://cdn.99percentinvisible.org/wp-content/uploads/powerpress/99invisible-logo-1400.jpg',
<<<<<<< HEAD
            title: '99% Invisible',
            intro: 'by: Roman Mars for Radiotopia',
=======
            by: 'Roman Mars',
            title: '99% Invisible',
            network: 'Radiotopia',
>>>>>>> 087df407bdb50c2ca301aa80e928a8dd5fe2f1dd
            // link: 'http://feeds.99percentinvisible.org/99percentinvisible'
	  }
	];
}]);
