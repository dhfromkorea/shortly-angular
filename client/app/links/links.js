angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getLinks().then(function(result){
    $scope.data.links = result;
  });
  $scope.getLinks();

});
