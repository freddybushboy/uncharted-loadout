'use strict';

/**
 * @ngdoc directive
 * @name unchartedLoadoutApp.directive:perkDetail
 * @description
 * # perkDetail
 */
angular.module('unchartedLoadoutApp')
  .directive('perkDetail', function () {
    return {
      templateUrl: 'views/perkdetail.html',
      restrict: 'E',
      transclude: true,
      scope: {
        loadout: '=',
        perkCategory: '=',
        perk: '=',
        back: '&',
        addPerk: '&',
        getPerkImageUrl: '&',
        getModImageUrl: '&',
        removePerk: '&',
        showModifications: '&',
        selectPerkModification: '&',
        modificationPerk: '='
      }
    };
  });
