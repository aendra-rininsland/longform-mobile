'use strict';

angular.module('longformApp')
  .controller('GraphicCtrl', ['$scope', '$routeParams', 'Gdocs', function ($scope, $routeParams, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(sheets){
      $scope.graphics = [];
      var graphics = sheets.graphics.elements;
      var chapterCatchline = $routeParams.chapterId;
      for (var i = 0; i < graphics.length; i++) {
        if (graphics[i].chaptercatchline == chapterCatchline) {
          $scope.graphics.push(graphics[i]);
        }
      }
      console.dir($scope.graphics);
    });
  }]);
