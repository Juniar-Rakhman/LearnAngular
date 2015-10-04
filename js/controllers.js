var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', ['$scope', '$http', function myController($scope, $http) {
    $http.get('js/data.json').success(function (data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);
