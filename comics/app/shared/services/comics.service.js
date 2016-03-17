(function () {
    angular.module('comics')
        .factory('comicsService', function ($http, $localStorage) {
            var addUniqueElements = function (collection, source) {
                angular.forEach(source, function(value, key) {
                    if (collection.indexOf(value) === -1) {
                        collection.push(value);   
                    }
                });
                return collection;
            }
            
            if (!$localStorage.comics) {
                    //Initial data for first run
                    $http.get('app/shared/components/comics.defaults.json')
                        .success (function(data){
				            $localStorage.comics = data;
                        });
            }
            return {
                getEditions: function () {
                    var editions = [];
                        angular.forEach($localStorage.comics, function(comic) {
                            editions = addUniqueElements(editions, [comic.edition]);
                        });
                    return editions;
                },
                getCharacters: function () {
                    var characters = [];
                        angular.forEach($localStorage.comics, function(comic) {
                            characters = addUniqueElements(characters, comic.characters);
                        });
                    return characters;
                },
                getGenres: function () {
                    var genres = [];
                        angular.forEach($localStorage.comics, function(comic) {
                            genres = addUniqueElements(genres, comic.genre);
                        });
                    return genres;
                },
                getComics: function () {
                    return $localStorage.comics;
                },
                getComic: function (id) {
                    var comics = $localStorage.comics;
                    for (var i = 0; i < users.length; i++) {
                        if(comics[i].id == id) {
                            console.log("comics.getUser returns " + comics[i] );
                            return comics[i];
                        }
                    }
                    return false;
                },
                addComic: function (comic) {
                    if (this.getUsers(comic.id)) {
                        $localStorage.comics.push(comic);
                        return comic;
                    } else {
                        return false;
                    }
                },
                deleteComic: function (comic) {
                    if (this.getComic(comic.id)) {
                        $localStorage.users.push(comic);
                        return user;
                    } else {
                        return false;
                    }
                },
                modifyComic: function (user) {
                }
            }
        });
})();