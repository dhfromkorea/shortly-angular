angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.getLinks = function(){
     console.log(Links.getLinks());
     // console.log('dh');
  };
  // $scope.some =  'sh';
  // $scope.test = function(){
  //   return Links.test();
  // };
});
