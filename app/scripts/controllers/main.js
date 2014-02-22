'use strict';

angular.module('longformApp')
  .controller('MainCtrl', ['$scope', 'Gdocs', function ($scope, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(sheet){
      window.spreadsheets = data;
      console.dir(data);
    });
  }]);
