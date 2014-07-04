angular.module('shortly.shorten', [])
  .controller('ShortenController', function($scope, $location, Links) {
    // Your code here
    console.log('old shorten controller is being used');
    $scope.link = {};
    $scope.loading = true;
    $scope.addLink = function() {
      Links.addLink($scope.link)
        .then(function(result) {
          $scope.loading = false;
        })
        .catch (function(error) {
        console.log("Some Error", error);
      });
    };
  });