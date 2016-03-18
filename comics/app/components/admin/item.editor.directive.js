angular.module('comics')
  .directive('itemEditor', function($compile) {
    return {
      templateUrl: "app/components/admin/item.editor.view.html",
      scope: {
        item: '=',
        actions: '=',
        columns: '=',
        collection: "@"
      },
      controller: function($scope, collectionService) {
        var getIdName = function (columns){
          //First search if one column is de id
          for (var i=0; i < columns.length ; i++){
            if (columns[i].isId){
              return columns[i].name;
            }
          }
          //Returns first column for default
          return columns[0].name;
        },
        buildSandbox = function(){
          var sandbox = {};
          angular.forEach($scope.columns, function (value){
            sandbox[value.name] = angular.isDefined($scope.item[value.name])?  $scope.item[value.name] : value.default;
          });
          return sandbox;
        };

        $scope.data = {};
        $scope.formName = 'form'+$scope.item[getIdName($scope.columns)];

        $scope.toggleEditor = function() {
          $scope.isEditing = !$scope.isEditing;
        };
        $scope.save = function () {
          collectionService.store($scope.data, $scope.collection);
          $scope.toggleEditor();
        };
        $scope.dismiss = function () {
          $scope.data = buildSandbox();
          $scope.toggleEditor();
        };
        $scope.delete = function () {
          collectionService.delete($scope.data, $scope.collection);
        };
        $scope.isEditing = false;
        $scope.data = buildSandbox();
      },
      restrict: 'A'
    };
  });
