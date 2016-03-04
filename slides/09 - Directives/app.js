(function (){
    var app = angular.module('app', ['ngAnimate']);
    app.directive('message', function() {
        return function(scope, element) {
            element.text(scope.message);
        };
    });
    app.value('discountRate', 0.8)
        .factory('calculateDiscount', function(discountRate) {
            return function(amount) {
                return amount * discountRate;
            };
        });

    app.directive('welcomeMessage', function() {
        return function(scope, element, attrs) {
            var result = scope.$eval(attrs.welcomeMessage);
                element.text(result);
            };
    });
    app.directive('welcomeMessageEm', function() {
    return function(scope, element, attrs) {
      var options = scope.$eval(attrs.welcomeMessageEm);
            var result = options.emoticon + ' ' + options.message + ' ' +       options.emoticon;
            element.text(result);
        
        };
    });
    app.directive('discount', function(calculateDiscount, currencyFilter) {
        return function(scope, element, attrs) {
            var price = scope.$eval(attrs.discount);
            var discountPrice = calculateDiscount(price);
                element.html(currencyFilter(discountPrice));
            };
        });
    app.directive('wordList', function() {
        return {
          link: function(scope, element, attrs) {
            scope.words = attrs.wordList.split(" ");
          },
          template: "<li ng-repeat='word in words'>\
                       {{word}}\
                     </li>"
        };
      });

    
    app.controller('MessageController', function($scope) {
        $scope.message = 'hello';
    });
})();