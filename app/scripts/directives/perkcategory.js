'use strict';

/**
 * @ngdoc directive
 * @name unchartedLoadoutApp.directive:perkCategory
 * @description
 * # perkCategory
 */
angular.module('unchartedLoadoutApp')
  .directive('perkCategory', function () {
    return {
      templateUrl: 'views/perkcategory.html',
      restrict: 'E',
      transclude: true,
      scope: {
        loadout: '=',
        perkCategory: '=',
        purchasableCategory: '=',
        levelSelectPerk: '=',
        back: '&',
        detailPerk: '&',
        detailMouseover: '&',
        getPerkImageUrl: '&',
        getPurchasableCount: '&',
        detailOrAdd: '&',
        selectPurchasableCategory: '&',
        previewLevelSelect: '&',
        displayLevelSelect: '&'
      }
    };
  });
