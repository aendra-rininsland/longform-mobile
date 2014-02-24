'use strict';

/* Services */

/** Liberally stolen from https://github.com/7hny/angular-google-spreadsheet/blob/master/app/js/services.js */

angular.module('longformApp.services', ['ngResource'])
  .value('version', '0.1')
  .factory('Gdocs', function($resource, $rootScope, $http, SPREADSHEET_KEY) {
    var factory = {};
    factory.getSpreadsheetTabletop = function(callback) {
      if (!window.hasOwnProperty('spreadsheetData')) {
        Tabletop.init({
          key: SPREADSHEET_KEY,
          callback: function(data) {
            window.data = data;
            if(callback && typeof(callback) === 'function') {
              $rootScope.$apply(function() {
                callback(data);
              });
            }
          },
          simpleSheet: false,
          parseNumbers: true
        });
      } else {
        callback(window.spreadsheetData);
      }
    };

    return factory;
  });