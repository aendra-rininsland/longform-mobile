'use strict';

/* Services */

/** Liberally stolen from https://github.com/7hny/angular-google-spreadsheet/blob/master/app/js/services.js */

angular.module('longformApp.services', ['ngResource'])
  .value('version', '0.1')
  .factory('Gdocs', function($resource, $rootScope, $http, SPREADSHEET_KEY) {
    var factory = {};
    factory.getSpreadsheetTabletop = function(callback) {
      Tabletop.init({
        key: SPREADSHEET_KEY,
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: false,
        parseNumbers: true
      });
    }

    factory.getSpreadsheet = function(callback) {
      // var url = 'https://spreadsheets.google.com/feeds/cells/o13394135408524254648.240766968415752635/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK';
      var url = 'https://spreadsheets.google.com/feeds/cells/' + SPREADSHEET_KEY + '/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK';
      $http.jsonp(url).success(function(data){
        callback(parseTableData(data));
      });
    }

    function parseTableData(data) {
      var input = data.feed.entry;
      var output = {
        thead: [],
        tbody: []
      }

      var currentRow = 1;

      for (var i = 0; i < input.length; i++) {
        var row = parseInt(input[i]['gs$cell'].row);
        var col = parseInt(input[i]['gs$cell'].col);
        var content = input[i]['gs$cell']['$t'];

        if(row != currentRow){
          currentRow = row;
        }

        if(row == 1){
          output.thead.push(content);
        }else {
          if(col == 1){
            output.tbody.push([]);
          }
          output.tbody[row-2].push(content);
        }
      };

      return output;
    }


    return factory;
  });