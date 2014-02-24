'use strict';

angular.module('longformApp')
  .controller('StoryCtrl', ['$scope', '$routeParams', 'Gdocs', function ($scope, $routeParams, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(sheets){
      $scope.stories = [];
      var stories = sheets.articles.elements;
      var chapterCatchline = $routeParams.chapterId;
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].chaptercatchline === chapterCatchline) {
          $scope.stories.push(stories[i]);
        }
      }
    });
  }]);
