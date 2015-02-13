(function() {
    var exerciseModule = angular.module('exercise', []);
    
    exerciseModule.factory('parseService',[ '$q', function($q) {
        var service = {};
        
        service.getQuestions = function(course, exercise) {
            var Question = Parse.Object.extend("Question"),
                query = new Parse.Query(Question),
                deferred = $q.defer();
            
            query.find({
              success: function(results) {
                  var questionsResult = [];
                  
                  for (var i = 0; i < results.length; i++) {
                      questionsResult.push({
                          condition: results[i].get('condition'),
                          expected: results[i].get('expected')
                      });
                  };
                  
                  deferred.resolve(questionsResult);
              },
              error: function(error) {
                deferred.reject(error);
              }
            });

            return deferred.promise;
        };
        
        service.getExercises = function(course) {
            
        };
        
        service.getCourses = function() {
            
        };
        
        return service;
    }])
})();