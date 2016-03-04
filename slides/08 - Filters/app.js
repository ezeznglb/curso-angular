(function (){
    var app = angular.module('app', ['ngAnimate']);
    app.controller('DateController', function($scope) {
        $scope.now = Date.now();
    });
    app.value('items', [
        {name: 'Item 3', position: 3, color: 'red', price: 2.75},
        {name: 'Item 1', position: 1, color: 'red', price: 0.92},
        {name: 'Item 2', position: 4, color: 'blue', price: 3.09},
        {name: 'Item 4', position: 4, color: 'red', price: 1.95}
    ]);
    app.controller('ItemsController', function($scope, items) {
        $scope.items = items;
    });
    angular.module('app')
  app.filter('smiley', function() {
    return function(text) {
      return '\u263A ' + text + ' \u263A';
    };
  });
})();