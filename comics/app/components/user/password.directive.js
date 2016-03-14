(function (){
    angular.module('comics').directive('checkPassword', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl){
                ctrl.$parsers.unshift(function(value){
                    var origin = scope.$eval(attrs["checkPassword"]);
                    if (origin !== value) {
                        ctrl.$setValidity("checkPassword",false);
                    } else {
                        ctrl.$setValidity("checkPassword",true);
                    }
                    return value;
                });
            }
        };
    });
})();