'use strict';

angular.module('longformApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'longformApp.services',
  'btford.markdown'
])
  .constant('SPREADSHEET_KEY', '0Aqqh1cRUSxC-dDNJR0d5MWg2OWExd2ZKVVFWUGM0YVE')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // Start editing//

      .when('/:chapterId', {
        templateUrl: 'views/stories.html',
        controller: 'StoryCtrl'
      })

      .when('/:chapterId/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotoCtrl'
      })

      .when('/:chapterId/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideoCtrl'
      })

      .when('/:chapterId/graphics', {
        templateUrl: 'views/graphics.html',
        controller: 'GraphicCtrl'
      })      

      // Done editing //                 
      .otherwise({
        redirectTo: '/'
      });
  });
