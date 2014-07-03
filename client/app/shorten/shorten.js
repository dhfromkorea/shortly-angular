angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = true;
  $scope.addLink = function(){
    Links.addLink().then(function(result){
      $scope.loading = false;
    });
  };
});
