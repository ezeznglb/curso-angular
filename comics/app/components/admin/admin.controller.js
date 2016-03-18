(function () {
  angular.module('comics').controller('AdminController', function ($scope, $routeParams, collectionService) {
    $scope.collection = $routeParams.feature || 'users';
    var alphaPattern = '/^[a-zA-Z0-9]*$/',
    numbersPattern = '/^[0-9]*$/';

    $scope.items = collectionService.getAll($scope.collection);
    $scope.add = function (){
      var newItem = {};
      angular.forEach($scope.configModel, function (value){
        if(value.isId){
          newItem[value.name] = new Date().getUTCMilliseconds();
        } else {
          newItem[value.name] = angular.isDefined(value.default)?  value.default : value.name;
        }

      });
        collectionService.store(newItem, $scope.collection);
    };
    if ($scope.collection == 'users') {
      $scope.title = 'Users manager';
      $scope.configModel = [{
          name: 'id',
          caption : 'User id',
          isId: true,
          type: 'text',
          required: true,
          pattern: numbersPattern
        },{
            name: 'userName',
            caption : 'Username',
            type: 'text',
            required: true,
            pattern: alphaPattern
        },{
          name: 'password',
          caption : 'Password',
          type: 'password',
          required: true,
          minlenght: 7
        },{
          name: 'firstName',
          caption : 'First name',
          type: 'text'
        },{
          name: 'lastName',
          caption : 'Last name',
          type: 'text'
        },{
          name: 'isAdmin',
          caption : 'Is admin user',
          type: 'switch'
        }];
        $scope.configActions = {
          edit : function () {return true;},
          delete : function (item) {
            return !item.isAdmin;
          }
        };
      } else {
        $scope.title = 'Comics manager';
        $scope.configModel = [{
            name: 'id',
            caption : 'Id',
            isId: true,
            type: 'text',
            required: true,
            pattern: numbersPattern
          },{
            name: 'title',
            caption : 'Title',
            type: 'text'
          },{
            name: 'synopsis',
            caption : 'Synopsis',
            type: 'text'
          },{
            name: 'creator',
            caption : 'Creator',
            type: 'text'
          },{
            name: 'company',
            caption : 'Company',
            type: 'text'
          },{
            name: 'issueNumber',
            caption : 'Number',
            type: 'text'
          },{
            name: 'edition',
            caption : 'Edition',
            type: 'text'
          },{
            name: 'genre',
            caption : 'Genre',
            type: 'text'
          },{
            name: 'releaseDate',
            caption : 'Release Date',
            type: 'text'
          },{
            name: 'characters',
            caption : 'Characters',
            type: 'text'
          },{
            name: 'cover',
            caption : 'Cover',
            type: 'text'
          },{
            name: 'votes',
            caption : 'Votes',
            type: 'text'
          },{
            name: 'recomendation',
            caption : 'Recommended',
            type: 'switch'
          },{
            name: "borrowed",
            caption : 'Borrowed',
            type: 'text'
          },{
            name: "timesBorrowed",
            caption : 'Times Borrowed',
            type: 'text'
          },{
            name: "available",
            caption : 'Available',
            type: 'text'
          }];
          $scope.configActions = {
            edit : function () {return true;},
            delete : function (item)  {return true;}
          };
      }
  });
})();
