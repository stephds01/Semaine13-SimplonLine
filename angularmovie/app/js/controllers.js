"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, $http) {

    $http.get('/server/api/movies').success(function(resp){
        $scope.movies = resp;
    });

});

angularMovieApp.controller("movieFormController" ,function ($scope, $http) {

    $scope.$watch('movies',function(oldLength,newLength){
        var length=$scope.movies.length;
        switch (length){
            case 0:
                $scope.label="Pas de film";
                break;
            case 1:
                $scope.label="1 film";
                break;
            default :
                $scope.label= length+ " films";
                break;
        }
    },true)

});


angularMovieApp.controller("movieFormController" ,function ($scope, $rootScope) {

    $scope.addMovie = function(movie){

        $http.post('/server/api/movies', movie)
            .success(function(){
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});

