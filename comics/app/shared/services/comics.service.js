(function () {
    angular.module('comics')
        .factory('comicsService', function ($http, $localStorage) {
            if (!$localStorage.comics) {
                    //Initial data for first run
                    $http.get('app/shared/components/comics.defaults.json')
                        .success (function(data){
				            $localStorage.comics = data;
                        });
            }
            return {
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