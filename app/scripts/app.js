'use strict';

/**
 * @ngdoc overview
 * @name unchartedLoadoutApp
 * @description
 * # unchartedLoadoutApp
 *
 * Main module of the application.
 */
angular
  .module('unchartedLoadoutApp', [
    'ngMessages',
    'ngRoute',
    'ngAnimate',
    'ngSanitize'
  ])
  .config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'vm',
        reloadOnSearch: false
      })
      .when('/wiki', {
        templateUrl: 'views/wiki.html',
        controller: 'WikiCtrl',
        controllerAs: 'vm'
      })
      .when('/bot', {
        templateUrl: 'views/bot.html',
        controller: 'BotCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('redditFilter', function () {
    return function (text) {
      var str = text;
      str = str.replace(/\bX\b/g, '[x](#x)');
      str = str.replace(/\bO\b/g, '[o](#o)');
      str = str.replace(/\bsquare\b/g, '[squ](#squ)');
      str = str.replace(/\btriangle\b/g, '[tri](#tri)');
      str = str.replace(/\bR1\b/g, '[r1](#r1)');
      str = str.replace(/\bL1\b/g, '[l1](#l1)');
      str = str.replace(/\bR2\b/g, '[r2](#r2)');
      str = str.replace(/\bL2\b/g, '[l2](#l2)');
      str = str.replace(/\bR3\b/g, '[r3](#r3)');
      str = str.replace(/\bL3\b/g, '[l3](#l3)');
      return str;
    };
  })
  .directive('img', function () {
    return {
      restrict: 'E',
      link: function (scope, element) {
        element.bind('error', function() {
            var url = 'images/perks/default.png';
            element.prop('src', url);
        });
      }
    };
  });

