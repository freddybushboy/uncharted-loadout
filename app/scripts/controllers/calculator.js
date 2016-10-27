'use strict';

/**
 * @ngdoc function
 * @name unchartedLoadoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unchartedLoadoutApp
 */
angular.module('unchartedLoadoutApp')
  .controller('CalculatorCtrl', function ($location, $timeout, loadoutService) {
    var vm = this;
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    vm.colIsActive = [true,false,false];
    vm.saveArray = [];
    vm.perkCategory = null;
    vm.detailedPerk = null;
    vm.purchasableCategory = null;
    vm.levelSelectPerk = null;
    vm.shareLink = '';
    vm.perkCategories = loadoutService.getPerkCategories();
    vm.loadout = loadoutService.getNewLoadout();

    vm.resetLoadout = function() {
      resetSelection();
      vm.perkCategories = loadoutService.getPerkCategories();
      vm.loadout = loadoutService.getNewLoadout();
      calculatePoints();
    };
    vm.randomLoadout = function() {
      vm.resetLoadout();
      resetSelection();
      randomLoadout();
    };
    vm.selectCat = function(cat) {
      vm.perkCategory = cat;
      vm.detailedPerk = null;
      vm.modificationPerk = null;
      vm.purchasableCategory = null;
      setActiveCol(2);
    };
    vm.selectPurchasableCategory = function(cat) {
      vm.purchasableCategory = cat;
    };
    vm.getPurchasableCount = function(cat) {
      var count = 0;
      angular.forEach(vm.loadout.cats.purchasables, function(perk) {
        if (cat.perks.indexOf(perk) !== -1) {
          count++;
        }
      });
      return count;
    };
    vm.previewPerk = function(perk, perkLevel) {
      resetSelection();
      vm.detailPerk(perk, perkLevel);
    };
    vm.detailMouseover = function(perk, perkLevel) {
      if (isTouchDevice) {
        return;
      }
      vm.detailPerk(perk, perkLevel);
    };
    vm.detailModificationMouseover = function(perk, mod) {
      if (isTouchDevice) {
        return;
      }
      perk.detailedMod = mod;
      vm.detailPerk(perk, null, true);
    };
    vm.detailOrAddModification = function(perk, mod) {
      if (isTouchDevice) {
        perk.detailedMod = mod;
        vm.detailPerk(perk, null, true);
      }
      else {
        vm.selectPerkModification(perk, mod);
      }
    };
    vm.detailPerk = function(perk, perkLevel, mod) {
      if (!mod) {
        perk.detailedMod = null;
      }
      if (perkLevel) {
        if (perkLevel === perk.detailedLevel) {
          return;
        }
        perk.detailedLevel = null;
        $timeout(function() {
          perk.detailedLevel = perkLevel;
        });
      }
      else if (perk === vm.detailedPerk) {
        return;
      }
      vm.detailedPerk = perk;
      setActiveCol(3);
    };
    vm.detailOrAdd = function(perk, perkLevel) {
      if (perkLevel) {
        if (perk.detailedLevel && perkLevel === perk.detailedLevel) {
          if ( (perk.points > (26 - vm.loadout.points)) ||
            (perk.detailedLevel.points > (26 - vm.loadout.points)) ||
            (perk.levels && !perk.detailedLevel) ) {
            return;
          }
          vm.addPerk(perk);
          return;
        }
        else {
          vm.detailPerk(perk, perkLevel);
        }
      }
      else if (perk === vm.detailedPerk) {
        if (perk.points > (26 - vm.loadout.points)) {
          return;
        }
        vm.addPerk(perk);
      }
      else {
        vm.detailPerk(perk, perkLevel);
      }
    };
    vm.backFromCat = function() {
      if (vm.purchasableCategory) {
        vm.purchasableCategory = null;
        vm.detailedPerk = null;
      }
      else {
        resetSelection();
        setActiveCol(1);
      }
    };
    vm.backFromDetail = function() {
      if (vm.detailedPerk.detailedLevel) {
        vm.detailedPerk.detailedLevel = null;
        setActiveCol(2);
        return;
      }
      vm.detailedPerk = null;
      vm.levelSelectPerk = null;
      if (vm.perkCategory) {
        setActiveCol(2);
      }
      else {
        setActiveCol(1);
      }
    };
    vm.previewLevelSelect = function(perk) {
      if (isTouchDevice) {
        return;
      }
      if (perk) {
        vm.detailedPerk = perk;
      }
      else {
        vm.detailedPerk = null;
      }
    };
    vm.displayLevelSelect = function(perk) {
      if (perk) {
        vm.levelSelectPerk = perk;
        vm.detailedPerk = perk;
      }
      else {
        vm.levelSelectPerk = null;
        vm.detailedPerk = null;
      }
    };
    vm.addPerk = function(perk, catId) {
      catId = typeof catId !== 'undefined' ? catId : vm.perkCategory.id;

      // Don't re-add perks.
      if (vm.loadout.cats[catId].indexOf(perk) === -1) {
        vm.loadout.cats[catId].push(perk);
      }

      if (perk.detailedLevel) {
        perk.selectedLevel = perk.detailedLevel;
        perk.detailedLevel = null;
      }

      perk.inLoadout = true;

      resetSelection();
      setActiveCol(1);
      calculatePoints();
    };
    vm.removePerk = function(perk) {
      angular.forEach(vm.loadout.cats, function(cat, catId) {
        angular.forEach(cat, function(i) {
          if (i === perk) {
            vm.loadout.cats[catId].splice(vm.loadout.cats[catId].indexOf(perk), 1);

            if (perk.selectedLevel) {
              perk.selectedLevel = null;
            }

            if (perk.detailedLevel) {
              perk.detailedLevel = null;
            }

            if (perk.selectedMod) {
              perk.selectedMod = null;
            }

            perk.inLoadout = false;
            calculatePoints();
            resetSelection();
          }
        });
      });
    };

    vm.getPerkImageUrl = function(perk) {
      if (!perk) {
        return;
      }
      var url = 'images/perks/u4-';

      if (perk.detailedLevel) {
        url += perk.detailedLevel.name.replace(/\s+/g, '-').replace('.', '').toLowerCase();
      }
      else if (perk.selectedLevel) {
        url += perk.selectedLevel.name.replace(/\s+/g, '-').replace('.', '').toLowerCase();
      }
      else {
        url += perk.name.replace(/\s+/g, '-').replace('.', '').toLowerCase();

        if (perk.levels) {
          url += '-1';
        }
      }
      url += '.png?v=5';

      return url;
    };

    vm.getModImageUrl = function(perk, mod) {
      if (!perk) {
        return;
      }

      var url = 'images/mods/mod-';

      if (mod && perk.btnClass === 'btn-perk-mystical') {
        url += 'mystical-';
      }
      if (mod && perk.btnClass === 'btn-perk-sidekick') {
        url += 'sidekick-';
      }

      if (mod) {
        url += mod.name.replace(/\s+/g, '-').replace('.', '').toLowerCase();
      }
      else {
        url += 'none';
      }
      url += '.png?v=5';

      return url;
    };

    vm.showModifications = function(perk) {
      vm.modificationPerk = perk;
      vm.detailedPerk = null;
      setActiveCol(2);
    };

    vm.selectPerkModification = function(perk, mod) {
      perk.selectedMod = mod;
      perk.detailedMod = null;
      calculatePoints();
      resetSelection();
    };

    vm.backFromModification = function() {
      resetSelection();
    };

    function calculatePoints() {
      vm.loadout.points = 0;
      angular.forEach(vm.loadout.cats, function(cat) {
        angular.forEach(cat, function(perk) {
          if (perk.selectedLevel) {
            vm.loadout.points += perk.selectedLevel.points;
          }
          else {
            vm.loadout.points += perk.points;
            if (perk.selectedMod) {
               vm.loadout.points += perk.selectedMod.points;
            }
          }
        });
      });
      generateSaveArray();
    }
    function resetSelection() {
      vm.detailedPerk = null;
      vm.modificationPerk = null;
      vm.purchasableCategory = null;
      vm.perkCategory = null;
      vm.levelSelectPerk = null;
      setActiveCol(1);
    }
    function setActiveCol(col) {
      col--;
      angular.forEach(vm.colIsActive, function (i, k) {
        vm.colIsActive[k] = (k === col);
      });
    }
    function loadSavedLoadout(savedLoadoutPerks) {
      vm.resetLoadout();

      angular.forEach(savedLoadoutPerks, function(savedPerk) {
        savedPerk = savedPerk.toString();
        if (savedPerk.indexOf('.') !== -1) {
          var level = parseInt(savedPerk.split('.')[1]);
          savedPerk = savedPerk.split('.')[0];
        }
        savedPerk = parseInt(savedPerk);

        angular.forEach(vm.perkCategories, function(cat) {
          angular.forEach(cat.perks, function(perk) {
            if (perk.id === savedPerk) {
              if (level) {
                if (perk.levels && perk.levels[level - 1]) {
                  perk.selectedLevel = perk.levels[level - 1];
                  vm.addPerk(perk, cat.id);
                }
                else if (perk.mods) {
                  angular.forEach(perk.mods, function(mod) {
                    if (mod.id === level) {
                      perk.selectedMod = mod;
                      vm.addPerk(perk, cat.id);
                    }
                  });
                }
              }
              else if (!perk.levels) {
                vm.addPerk(perk, cat.id);
              }
            }
            if (perk.perks) {
              angular.forEach(perk.perks, function(purchPerk) {
                if (purchPerk.id === savedPerk) {
                  if (purchPerk.mods && level) {
                    angular.forEach(purchPerk.mods, function(mod) {
                      if (mod.id === level) {
                        purchPerk.selectedMod = mod;
                        vm.addPerk(purchPerk, cat.id);
                      }
                    });
                  }
                  else {
                    vm.addPerk(purchPerk, cat.id);
                  }
                }
              });
            }
          });
        });
      });
    }
    function generateSaveArray() {
      vm.saveArray = [];
      angular.forEach(vm.loadout.cats, function(cat) {
        angular.forEach(cat, function(perk) {
          var skill = perk.id;

          var multiple = 10;
          if (perk.selectedLevel) {
            skill = skill + (perk.selectedLevel.level / multiple);
          }
          if (perk.selectedMod) {
            multiple = (perk.selectedMod.id.toString().length === 2) ? 100 : multiple;
            skill = skill + (perk.selectedMod.id / multiple);
          }
          vm.saveArray.push(skill);
        });
      });
      if (vm.saveArray.length > 0) {
        vm.shareLink = 'http://'+$location.host()+'?q='+vm.saveArray.toString();
        $location.search('q', vm.saveArray.toString());
      }
      else {
        vm.shareLink = '';
        $location.search({});
      }
    }
    function loadFromQuery() {
      if ($location.search().q) {
        loadSavedLoadout($location.search().q.split(','));
      }
    }
    function randomLoadout() {
      var i = 0, catKey, perk;

      // Get a pistol for sure.
      var pistol = getRandomPerk(vm.perkCategories[1]);
      vm.addPerk(pistol, vm.perkCategories[1].id);

      do {
        catKey = Math.floor(Math.random() * vm.perkCategories.length);
        perk = getRandomPerk(vm.perkCategories[catKey]);
        if (perk) {
          vm.addPerk(perk, vm.perkCategories[catKey].id);
        }
        i++;

        if (i === 30) {
          console.log('tried too hard');
          vm.resetLoadout();
          randomLoadout();
        }
      }
      while (vm.loadout.points < 26 && i < 40);
    }
    function getRandomPerk(cat) {
      var perk = cat.perks[Math.floor(Math.random() * cat.perks.length)], ret, points;

      // If its full, dont bother.
      if (vm.loadout.cats[cat.id].length >= cat.max) {
        return;
      }

      switch (cat.id) {
        case 'purchasables':
          if (vm.getPurchasableCount(perk) < perk.max) {
            ret = perk.perks[Math.floor(Math.random() * perk.perks.length)];
          }
          break;

        case 'boosters':
          perk.selectedLevel = perk.levels[Math.floor(Math.random() * perk.levels.length)];
          ret = perk;
          break;

        default:
          ret = perk;
      }

      if (!ret) {
        return;
      }

      if (ret && ret.mods && !vm.nomods) {
        var modId = Math.floor((Math.random() * (ret.mods.length + 1)));
        if (modId !== 0) {
          ret.selectedMod = ret.mods[modId - 1];
        }
      }
      if (ret.selectedLevel) {
        points = ret.selectedLevel.points;
      }
      else if (ret.selectedMod) {
        points = ret.points + ret.selectedMod.points;
      }
      else {
        points = ret.points;
      }

      // If it's too expensive dont bother.
      if (vm.loadout.points + points > 26) {
        return;
      }

      return ret;
    }

    function generateCSV() {
      var csvArray = [];
      var csvString = [];

      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[0].perks));
      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[1].perks));
      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[2].perks[0].perks));
      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[2].perks[1].perks));
      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[2].perks[2].perks));
      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[2].perks[3].perks));
      csvArray = csvArray.concat(generateCategoryCSV(vm.perkCategories[3].perks));

      angular.forEach(csvArray, function(item) {
        csvString += item;
      });

      console.log(csvString);
    }

    function generateCategoryCSV(perks) {
      var perksCSV = [];

      angular.forEach(perks, function(perk) {

        if (perk.levels) {
          angular.forEach(perk.levels, function(level) {
            perksCSV.push(
              perk.id + '.' + level.level + ',' +
              perk.name + ' ' + level.level + ',' +
              level.points + ',' +
              getCsvClass(perk.name + ' ' + level.level) + '\n'
            );
          });
        }
        else {
          perksCSV.push(
            perk.id + ',' +
            perk.name + ',' +
            perk.points + ',' +
            getCsvClass(perk.name) + '\n'
          );

          if (perk.mods) {
            angular.forEach(perk.mods, function(mod) {

              if (mod.hero) {
                perksCSV.push(
                  perk.id + '.' + mod.id + ',' +
                  mod.name + ',' +
                  (perk.points + mod.points) + ',' +
                  getCsvClass(perk.name) + '\n'
                );
              }
              else {
                perksCSV.push(
                  perk.id + '.' + mod.id + ',' +
                  perk.name + ' (' + mod.name + '),' +
                  (perk.points + mod.points) + ',' +
                  getCsvClass(perk.name) + '\n'
                );
              }
            });
          }
        }
      });

      return perksCSV;
    }

    function getCsvClass(name) {
      return name.replace(/\s+/g, '-').replace('.', '').toLowerCase();
    }

    generateCSV();

    loadFromQuery();
  });
