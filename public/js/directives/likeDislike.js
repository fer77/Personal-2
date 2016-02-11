angular.module('myApp').directive('likeDislike', function () {
    return {
        restrict: 'E',
        // scope: {
        //     info: '='
        // },
        templateUrl: 'js/directives/likeDislike.html',
        controller: 'likeDislikeCtrl',
        link: function (scope, element, attributes) {
          console.log(element);
          // element.find('.fa-thumbs-up') = 'white';
          // element.find('.fa-thumbs-down') = 'white';

          element.find('.fa-thumbs-up').on('click', function () {
            $(this).css('color', 'green');
          });
          element.find('.fa-thumbs-down').on('click', function () {
            $(this).css('color', 'red');
          });

          // if ('.fa-thumbs-up' === 'green') {
          //   '.fa-thumbs-down' === 'white' && -1;
          // } else if ('.fa-thumbs-down'=== 'red') {
          //   '.fa-thumbs-up' === 'white' && -1;
          // }

          // element.find('.fa-thumbs-o-up').on('click', function () {
          //   $(this).css('color', 'green');
          // });
          // element.find('.fa-thumbs-o-down').on('click', function () {
          //   $(this).css('color', 'red');
          // });
        }
    };
});
