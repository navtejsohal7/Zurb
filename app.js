
var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
	
  $http.get('http://jsonplaceholder.typicode.com/users')
       .then(function(res){
          $scope.todos = res.data;                
        });
		
		
});
$scope.select = function(item) {
        $scope.selectedItem = item;
    };
