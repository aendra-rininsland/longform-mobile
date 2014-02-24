'use strict';

angular.module('longformApp')
  .controller('PhotoCtrl', ['$scope', '$routeParams', 'Gdocs', function ($scope, $routeParams, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(sheets){
      $scope.photos = [];
      var photos = sheets.photos.elements;
      var chapterCatchline = $routeParams.chapterId;
      for (var i = 0; i < photos.length; i++) {
        if (photos[i].chaptercatchline === chapterCatchline) {
          $scope.photos.push(photos[i]);
        }
      }
    });
  }]);
