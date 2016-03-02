(function (){
    var app = angular.module('app', []);
    app.controller('MessageController', MessageController);
    app.controller('CountController', CountController);
    app.controller('AdditionController', AdditionController);
    app.controller('AuthController', AuthController);
    
    function MessageController($scope) {
        $scope.message = "This is a model.";
    };
    
    function CountController($scope) {
        $scope.count = function() { return 12; }
    };
    
    function AdditionController($scope) {
        $scope.operand1 = 0;
        $scope.operand2 = 0;
        $scope.add = function() {
            return $scope.operand1 + $scope.operand2;
        }
        $scope.options = [0,1,2,3,4];
    }
    
    function AuthController($scope) {
        $scope.authorized = true;
        $scope.toggle = function() {
            $scope.authorized = !$scope.authorized
        };
    }
})();