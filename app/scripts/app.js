'use strict';

window.spreadsheet = {};

angular.module('longformApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'longformApp.services'
])
  .constant('SPREADSHEET_KEY', '0Aqqh1cRUSxC-dDNJR0d5MWg2OWExd2ZKVVFWUGM0YVE')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })                 
      .otherwise({
        redirectTo: '/'
      });
  });
