'use strict';

/**
 * @ngdoc directive
 * @name unchartedLoadoutApp.directive:perkSelection
 * @description
 * # perkSelection
 */
angular.module('unchartedLoadoutApp')
  .directive('perkSelection', function () {
    return {
      templateUrl: 'views/perkselection.html',
      restrict: 'E',
      transclude: true,
      scope: {
        perkCategories: '=',
        loadout: '=',
        selectCat: '&',
        getPerkImageUrl: '&',
        getModImageUrl: '&',
        previewPerk: '&'
      }
    };
  });
