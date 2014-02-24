'use strict';

/*global $*/

angular.module('longformApp')
  .controller('MainCtrl',
    ['$scope', '$routeParams', '$location', 'Gdocs',
    function ($scope, $routeParams, $location, Gdocs) {
      if (!window.hasOwnProperty('spreadsheetData')) {
        Gdocs.getSpreadsheetTabletop(function(sheets){
          window.spreadsheetData = sheets;
          $scope.chapters = sheets.chapters.elements;
        });
      } else {
        $scope.chapters = window.spreadsheetData.chapters.elements;
      }

      if (typeof $routeParams.chapterId !== undefined) {
        $scope.path = $routeParams.chapterId;
      } else {
        $scope.path = $location.path();
      }

      try {
        $(document).foundation();
      } catch (TypeError) {
        return;
      }
    }]);