'use strict';

angular.module('longformApp')
  .controller('MainCtrl', ['$scope', 'Gdocs', function ($scope, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(sheets){
      $scope.chapters = sheets.chapters.elements;
    });
  }]);
