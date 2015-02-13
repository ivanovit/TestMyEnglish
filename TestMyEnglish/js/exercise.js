(function() {
    var app = angular.module('exercise');
    app.controller('ExerciseController',['$scope', '$activityIndicator', 'parseService', function($scope, $activityIndicator, parseService) {
        this.questions = [];
        this.currentQuestion = {};
        
        var promise = parseService.getQuestions('',''),
            exercise = this;
        
        $activityIndicator.startAnimating();
        
        promise.then(function(questions){
            $scope.$apply(function(){
                  exercise.questions = questions;
                  exercise.currentQuestion = exercise.currentQuestion;
              });
        });
        
        promise.finally(function() {
            $activityIndicator.stopAnimating();
        });
    }]);
})();