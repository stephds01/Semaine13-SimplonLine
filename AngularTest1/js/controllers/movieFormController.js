/**
 * Created by Stéphanie on 22/03/2016.
 */

myApp.controller('movieFormController', ['$scope', function($scope){

    $scope.addMovie = function(movie) {
        //$scope.$emit('sendMovie', movie);

        //Je push dans mon tableau movie grace a la $http
        $scope.movies.push(movie);
        //Je réinitialise le formulaire
        $scope.movie = {};

    };

    $scope.removeMovie = function() {
        $scope.movie = {};
    }

}]);
