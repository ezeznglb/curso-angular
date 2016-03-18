(function () {
    angular.module('comics')
        .factory('collectionService', function ($http, $localStorage) {
            if (!$localStorage.users) {
                    //Initial data for first run
                    $http.get('app/components/user/users.defaults.json')
                        .success (function(data){
				            $localStorage.users = data;
                        });
            };
            if (!$localStorage.comics) {
                    //Initial data for first run
                    $http.get('app/shared/components/comics.defaults.json')
                        .success (function(data){
                    $localStorage.comics = data;
                        });
            }

            var getIndex = function (itemId, collection) {
               var items = $localStorage[collection],
                idName = getCollectionId(collection);
               for (var i = 0; i < items.length; i++) {
                   if(items[i][idName] == itemId) {
                       return i;
                   }
               }
               return -1;
             },
             getCollectionId = function (collection) {
               return ('id');
             };

            return {
                getAll: function (collection) {
                    return $localStorage[collection];
                },
                get: function (id, collection) {
                    var index = getIndex(id, collection);
                    if (index > -1) {
                      return $localStorage[collection][index];
                    }
                    return false;
                },
                getBy: function (name, value, collection) {
                  var items = $localStorage[collection],
                   idName = getCollectionId(collection);
                  for (var i = 0; i < items.length; i++) {
                      if(items[i][name] == value) {
                          return items[i];
                      }
                  }
                  return false;
                },
                store: function (object, collection){
                  var index = getIndex(object[getCollectionId(collection)], collection);
                  if (index > -1) {
                    $localStorage[collection][index] =object;
                  } else {
                    $localStorage[collection].push(object);
                  }
                },
                delete: function (object, collection) {
                  var index = getIndex(object[getCollectionId(collection)], collection);
                  if (index > -1) {
                    $localStorage[collection].splice(index, 1);
                  }
                },
                getUsers: function () {
                    return $localStorage.users;
                },
                getUser: function (userName) {
                    var users = $localStorage.users;
                    for (var i = 0; i < users.length; i++) {
                        if(users[i].userName == userName) {
                            console.log("users.getUser returns " + users[i] );
                            return users[i];
                        }
                    }
                    return false;
                },
                addUser: function (user) {
                    if (this.getUsers(user.userName)) {
                        $localStorage.users.push(user);
                        return user;
                    } else {
                        return false;
                    }
                },
                deleteUser: function (user) {
                    if (this.getUsers(user.userName)) {
                        $localStorage.users.push(user);
                        return user;
                    } else {
                        return false;
                    }
                },
                modifyUser: function (user) {
                }
            }
        });
})();
