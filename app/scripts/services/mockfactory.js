'use strict';

/**
 * @ngdoc service
 * @name unchartedLoadoutApp.mockFactory
 * @description
 * # mockFactory
 * Factory in the unchartedLoadoutApp.
 */
angular.module('unchartedLoadoutApp')
  .factory('mockFactory', function () {
    function mockFactory() {}

    mockFactory.test = function() {
      return {
        foo: 'bar'
      };
    };

    return mockFactory;
  });
