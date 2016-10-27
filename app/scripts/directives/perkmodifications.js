'use strict';

/**
 * @ngdoc directive
 * @name unchartedLoadoutApp.directive:perkModifications
 * @description
 * # perkModifications
 */
angular.module('unchartedLoadoutApp')
  .directive('perkModifications', function () {
    return {
      templateUrl: 'views/perkmodifications.html',
      restrict: 'E',
      transclude: true,
      scope: {
        loadout: '=',
        back: '&',
        getPerkImageUrl: '&',
        getModImageUrl: '&',
        selectPerkModification: '&',
        detailModificationMouseover: '&',
        detailOrAddModification: '&',
        modificationPerk: '='
      }
    };
  });
