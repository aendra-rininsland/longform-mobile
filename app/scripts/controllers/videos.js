'use strict';

angular.module('longformApp')
  .controller('VideoCtrl', ['$scope', '$routeParams', 'Gdocs', function ($scope, $routeParams, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(sheets){
      $scope.videos = [];
      var videos = sheets.videos.elements;
      var chapterCatchline = $routeParams.chapterId;
      for (var i = 0; i < videos.length; i++) {
        if (videos[i].chaptercatchline === chapterCatchline) {
          $scope.videos.push(videos[i]);
        }
      }
    });
  }]);
