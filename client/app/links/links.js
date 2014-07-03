angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.getLinks;
  var init = function() {
    $scope.getLinks()
    .then(function(result) {
      $scope.data.links = result;
    })
    .catch(function(error) {
      console.log("Some Error", error);
    });
  };
  init();
});