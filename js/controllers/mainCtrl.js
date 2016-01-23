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
            // link: 'http://www.wnyc.org/articles/freakonomics-podcast/'
	  },
        {
            icon: 'http://www.dancarlin.com/wp-content/uploads/2014/07/HH-current-239x239.jpg',
            by: 'Dan Carlin',
            title: 'Hardcore History',
            network: '',
            // link: 'https://itunes.apple.com/ca/podcast/dan-carlins-hardcore-history/id173001861?mt=2'
	  },
        {
            icon: 'http://cdn.99percentinvisible.org/wp-content/uploads/powerpress/99invisible-logo-1400.jpg',
            by: 'Roman Mars',
            title: '99% Invisible',
            network: 'Radiotopia',
            // link: 'http://feeds.99percentinvisible.org/99percentinvisible'
	  }
	];
}]);
