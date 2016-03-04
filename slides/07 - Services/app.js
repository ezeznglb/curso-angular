(function (){
    var app = angular.module('app', ['ngAnimate']);
    app.value('score', {points: 0});
    app.value('randomScore', function() {
        return Math.ceil(Math.random() * 10);
    });
    app.controller('ScoreController', function($scope, score3, randomScore) {
        $scope.score = score3;
        $scope.increment = function() {
            $scope.score.increment();
        };
    });
    app.service('scoreService', function (randomScore){
        this.score = randomScore();
    });
    app.factory('score3', function(randomScore) {
        var points = randomScore();
        return {
            increment: function() {
                return ++points;
            },
            getPoints: function() {
                return points;
            }
        };
    });
})();