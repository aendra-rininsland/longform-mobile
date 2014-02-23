'use strict';

angular.module('longformApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', 'Gdocs', function ($scope, $routeParams, $location, Gdocs) {
    if (typeof $routeParams.chapterId != undefined) {
        $scope.path = $routeParams.chapterId;
    } else {
        $scope.path = $location.path();    
    }
    Gdocs.getSpreadsheetTabletop(function(sheets){
      $scope.chapters = sheets.chapters.elements;
    });
    try {
      $(document).foundation();    
    } catch (TypeError) {
        console.log('.');
    }
  }]);
