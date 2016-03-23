/**
 * Created by Stéphanie on 22/03/2016.
 */
//1ère solution de mise en relation avec le Factory por l'objet Movies
//myApp.controller('movieController', ['$scope', 'MoviesTab', function($scope,movies){
//
//    $scope.movies = movies;
//
//    $scope.$on('sendMovie', function(event, movie) {
//        movies.push(movie);
//    });
//
//}]);

//2 ème solution de Factory pour l'objet Movies
//myApp.controller('movieController', function($scope,moviesFactory){
//
//    $scope.movies = moviesFactory.movies;
//
//    //console.log($scope.movies.movies);
//
//    $scope.$on('sendMovie', function(event, movie) {
//        $scope.movies.push(movie);
//    });
//
//});


//3ème possibilité avec une requète ajax XHR
myApp.controller('movieController', function($scope,$http) {
    $http.get('xhr.json')
        .success(function(data){
            $scope.movies = data.movies;
            //console.log($scope.movies[0]);
            //console.log(status);

            $scope.$on('sendMovie', function(event, movie) {
                $scope.movies.push(movie);
            });

        }).error(function(data,statusText) {
            $scope.error = statusText;
    })
});








