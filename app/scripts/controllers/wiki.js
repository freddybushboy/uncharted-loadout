'use strict';

/**
 * @ngdoc function
 * @name unchartedLoadoutApp.controller:WikiCtrl
 * @description
 * # WikiCtrl
 * Controller of the unchartedLoadoutApp
 */
angular.module('unchartedLoadoutApp')
  .controller('WikiCtrl', function (loadoutService) {
    var vm = this;
    vm.perkCategories = loadoutService.getPerkCategories();

    vm.redditIcon = function(name) {
      return '[](#perk-' + name.replace(/\s+/g, '-').replace('.', '').replace('\'', '').toLowerCase() + ')';
    };
  });
