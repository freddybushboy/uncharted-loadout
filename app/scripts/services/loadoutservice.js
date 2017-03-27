'use strict';

/**
 * @ngdoc service
 * @name unchartedLoadoutApp.loadoutService
 * @description
 * # loadoutService
 * Service in the unchartedLoadoutApp.
 */
angular.module('unchartedLoadoutApp')
  .service('loadoutService', function () {

    function loadoutService() {}

    function populateMods(perks) {
      var mods = [
        {
          id: 1,
          name: 'Starting Ammo',
          hero: false,
          info: [
            'Start with more ammo'
          ]
        },
        {
          id: 2,
          name: 'Reload Speed',
          hero: false,
          info: [
            'Reload your gun faster'
          ]
        },
        {
          id: 3,
          name: 'Blindfire Accuracy',
          hero: false,
          info: [
            'Improves blindfire accuracy'
          ]
        },
        {
          id: 4,
          name: 'Silencer',
          hero: false,
          info: [
            'Invisible on radar when firing'
          ]
        },
        {
          id: 5,
          name: 'Aimed Strafe Speed',
          hero: false,
          info: [
            'Move faster while aiming'
          ]
        },
        {
          id: 6,
          name: 'Clip Capacity',
          hero: false,
          info: [
            'Your clip can hold more bullets'
          ]
        },
        {
          id: 7,
          name: 'Recoil',
          hero: false,
          info: [
            'Lessens the effects of recoil'
          ],
          stats: {
            'Recoil': 2,
          }
        },
        {
          id: 8,
          name: 'Accuracy',
          hero: false,
          info: [
            'Improves weapon accuracy'
          ],
          stats: {
            'Accuracy': 2,
          }
        },
        {
          id: 9,
          name: 'Scope-in Speed',
          hero: false,
          info: [
            'Zoom into the scope faster'
          ]
        },
        {
          id: 10,
          name: 'Scope Sway',
          hero: false,
          info: [
            'Decreased scope sway'
          ]
        },
        {
          id: 11,
          name: 'Scoped-in Radar',
          hero: false,
          info: [
            'Radar appears while scoped in'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s AK-47',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s AK-47',
          hero: true,
          mods: [
            'Starting Ammo',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s AK-47',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s AK-47',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s AK-47',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s AK-47',
          hero: true,
          mods: [
            'Clip Capacity',
            'Recoil'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s FAL',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s FAL',
          hero: true,
          mods: [
            'Starting Ammo',
            'Scoped-in Radar'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s FAL',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s FAL',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s FAL',
          hero: true,
          mods: [
            'Reload Speed',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s FAL',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Mazur LDR',
          hero: true,
          mods: [
            'Starting Ammo',
            'Scope-in Speed'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Mazur LDR',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Mazur LDR',
          hero: true,
          mods: [
            'Clip Capacity',
            'Scoped-in Radar'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Mazur LDR',
          hero: true,
          mods: [
            'Reload Speed',
            'Scope Sway'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Mazur LDR',
          hero: true,
          mods: [
            'Starting Ammo',
            'Scope Sway'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Mazur LDR',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s MP34a',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s MP34a',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s MP34a',
          hero: true,
          mods: [
            'Clip Capacity',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s MP34a',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s MP34a',
          hero: true,
          mods: [
            'Blindfire Accuracy',
            'Accuracy'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s MP34a',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed',
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Mettler M-30',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Mettler M-30',
          hero: true,
          mods: [
            'Clip Capacity',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Mettler M-30',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Mettler M-30',
          hero: true,
          mods: [
            'Starting Ammo',
            'Scoped-in Radar'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Mettler M-30',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Mettler M-30',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s XCR',
          hero: true,
          mods: [
            'Reload Speed',
            'Accuracy'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s XCR',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s XCR',
          hero: true,
          mods: [
            'Starting Ammo',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s XCR',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s XCR',
          hero: true,
          mods: [
            'Clip Capacity',
            'Recoil'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s XCR',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Copperhead SR7',
          hero: true,
          mods: [
            'Reload Speed',
            'Scoped-in Radar'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Copperhead SR7',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Copperhead SR7',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Copperhead SR7',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Copperhead SR7',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Copperhead SR7',
          hero: true,
          mods: [
            'Scope-in Speed',
            'Recoil'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Spezzotti 12 Gauge',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Spezzotti 12 Gauge',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Spezzotti 12 Gauge',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Spezzotti 12 Gauge',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Spezzotti 12 Gauge',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s HS39',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s HS39',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s HS39',
          hero: true,
          mods: [
            'Clip Capacity',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s HS39',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s HS39',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s HS39',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s M14 Custom',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s M14 Custom',
          hero: true,
          mods: [
            'Clip Capacity',
            'Scope-in Speed'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s M14 Custom',
          hero: true,
          mods: [
            'Scope Sway',
            'Silencer'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s M14 Custom',
          hero: true,
          mods: [
            'Starting Ammo',
            'Scope-in Speed'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s M14 Custom',
          hero: true,
          mods: [
            'Scoped-in Radar',
            'Recoil'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s M14 Custom',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 13,
          name: 'Drake\'s P90',
          hero: true,
          mods: [
            'Reload Speed',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 14,
          name: 'Elena\'s P90',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Rafe\'s P90',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s P90',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Sam\'s P90',
          hero: true,
          mods: [
            'Clip Capacity',
            'Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Nadine\'s P90',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 13,
          name: 'Sully\'s Arrowhead A3c',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Arrowhead A3c',
          hero: true,
          mods: [
            'Starting Ammo',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 15,
          name: 'Drake\'s Arrowhead A3c',
          hero: true,
          mods: [
            'Silencer',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Nadine\'s Arrowhead A3c',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 17,
          name: 'Rafe\'s Arrowhead A3c',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 18,
          name: 'Elena\'s Arrowhead A3c',
          hero: true,
          mods: [
            'Reload Speed',
            'Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Aegis 9mm',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Aegis 9mm',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Aegis 9mm',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Para .45',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Para .45',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Para .45',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Para .45',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Para .45',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Para .45',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Raffica',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Raffica',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Raffica',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Raffica',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Raffica',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Raffica',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Fossa R-81',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Fossa R-81',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Fossa R-81',
          hero: true,
          mods: [
            'Starting Ammo',
            'Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Fossa R-81',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Fossa R-81',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Fossa R-81',
          hero: true,
          mods: [
            'Clip Capacity',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Pistole',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Pistole',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Pistole',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Pistole',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Jackal',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Jackal',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Jackal',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Jackal',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Jackal',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Jackal',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Nadine\'s Bishai .50 Cal',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sully\'s Bishai .50 Cal',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Bishai .50 Cal',
          hero: true,
          mods: [
            'Clip Capacity',
            'Scoped-in Radar'
          ]
        },
        {
          id: 16,
          name: 'Rafe\'s Bishai .50 Cal',
          hero: true,
          mods: [
            'Starting Ammo',
            'Scoped-in Radar'
          ]
        },
        {
          id: 17,
          name: 'Drake\'s Bishai .50 Cal',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Bishai .50 Cal',
          hero: true,
          mods: [
            'Reload Speed',
            'Scoped-in Radar'
          ]
        },
        {
          id: 13,
          name: 'Sully\'s Enforcer G26',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 14,
          name: 'Drake\'s Enforcer G26',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 15,
          name: 'Elena\'s Enforcer G26',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Nadine\'s Enforcer G26',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 17,
          name: 'Rafe\'s Enforcer G26',
          hero: true,
          mods: [
            'Blindfire Accuracy',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Sam\'s Enforcer G26',
          hero: true,
          mods: [
            'Silencer',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Agarwal .40',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Agarwal .40',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Agarwal .40',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Agarwal .40',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Agarwal .40',
          hero: true,
          mods: [
            'Silencer',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Agarwal .40',
          hero: true,
          mods: [
            'Blindfire Accuracy',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Lowe-S',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Lowe-S',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Lowe-S',
          hero: true,
          mods: [
            'Starting Ammo',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Lowe-S',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Lowe-S',
          hero: true,
          mods: [
            'Clip Capacity',
            'Recoil'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Lowe-S',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy',
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Harrison 1890',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Harrison 1890',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Harrison 1890',
          hero: true,
          mods: [
            'Silencer',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Harrison 1890',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Harrison 1890',
          hero: true,
          mods: [
            'Clip Capacity',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Harrison 1890',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil',
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s DC Single Action',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s DC Single Action',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s DC Single Action',
          hero: true,
          mods: [
            'Silencer',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s DC Single Action',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s DC Single Action',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s DC Single Action',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s RKL-155',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s RKL-155',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s RKL-155',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s RKL-155',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s RKL-155',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s RKL-155',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s M4',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s M4',
          hero: true,
          mods: [
            'Silencer',
            'Reload Speed'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s M4',
          hero: true,
          mods: [
            'Starting Ammo',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s M4',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s M4',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s M4',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s PAK-80',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s PAK-80',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s PAK-80',
          hero: true,
          mods: [
            'Aimed Strafe Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s PAK-80',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s PAK-80',
          hero: true,
          mods: [
            'Recoil',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s PAK-80',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Micro 9mm',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Micro 9mm',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Micro 9mm',
          hero: true,
          mods: [
            'Silencer',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Micro 9mm',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoil'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Micro 9mm',
          hero: true,
          mods: [
            'Starting Ammo',
            'Accuracy'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Micro 9mm',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Para 9',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Para 9',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Para 9',
          hero: true,
          mods: [
            'Clip Capacity',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Para 9',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Para 9',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Para 9',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Krivosk-XS',
          hero: true,
          mods: [
            'Starting Ammo',
            'Clip Capacity'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Krivosk-XS',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Krivosk-XS',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Krivosk-XS',
          hero: true,
          mods: [
            'Starting Ammo',
            'Reload Speed'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Krivosk-XS',
          hero: true,
          mods: [
            'Silencer',
            'Clip Capacity'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Krivosk-XS',
          hero: true,
          mods: [
            'Silencer',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s INSAS',
          hero: true,
          mods: [
            'Clip Capacity',
            'Silencer'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s INSAS',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s INSAS',
          hero: true,
          mods: [
            'Starting Ammo',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s INSAS',
          hero: true,
          mods: [
            'Reload Speed',
            'Recoil'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s INSAS',
          hero: true,
          mods: [
            'Clip Capacity',
            'Aimed Strafe Speed'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s INSAS',
          hero: true,
          mods: [
            'Starting Ammo',
            'Silencer'
          ]
        },
        {
          id: 13,
          name: 'Rafe\'s Type 95',
          hero: true,
          mods: [
            'Starting Ammo',
            'Recoild'
          ]
        },
        {
          id: 14,
          name: 'Sam\'s Type 95',
          hero: true,
          mods: [
            'Clip Capacity',
            'Recoil'
          ]
        },
        {
          id: 15,
          name: 'Nadine\'s Type 95',
          hero: true,
          mods: [
            'Reload Speed',
            'Clip Capacity'
          ]
        },
        {
          id: 16,
          name: 'Sully\'s Type 95',
          hero: true,
          mods: [
            'Reload Speed',
            'Silencer'
          ]
        },
        {
          id: 17,
          name: 'Elena\'s Type 95',
          hero: true,
          mods: [
            'Reload Speed',
            'Blindfire Accuracy'
          ]
        },
        {
          id: 18,
          name: 'Drake\'s Type 95',
          hero: true,
          mods: [
            'Starting Ammo',
            'Aimed Strafe Speed'
          ]
        }
      ];

      replaceHeroMods(mods);

      angular.forEach(perks, function(perk) {
        var populatedMods = [];

        // if (perk.mods) {
        //   perk.mods = null;
        // }

        angular.forEach(perk.mods, function(mod) {
          // Only if its an array of 2.
          if (mod.length === 2) {
            angular.forEach(mods, function(value) {
              if (mod[0] === value.name) {
                value.points = mod[1];
                populatedMods.push(angular.copy(value));
              }
            });

            perk.mods = populatedMods;
          }
        });
      });
    }

    function replaceHeroMods(mods) {
      angular.forEach(mods, function(mod) {
        if (mod.hero) {
          angular.forEach(mod.mods, function(subMod, key) {
            angular.forEach(mods, function(value) {
              if (subMod === value.name) {
                mod.mods[key] = value;
              }
            });
          });
        }
      });
    }

    loadoutService.getPerkCategories = function() {
      var cats = [
        {
          id: 'longGuns',
          name: 'Long gun',
          max: 1,
          perks: [{
            id: 101,
            name: 'AK-47',
            points: 5,
            info: [
              'Fully automatic assault rifle',
              'Mid to close range',
              'Moderate damage',
              'Moderate rate of fire',
              'Moderate recoil and accuracy'
            ],
            stats: {
              'Recoil': 7.5,
              'Accuracy': 7,
              'Damage': 4,
              'Range': 6.5,
              'Fire rate': 6
            },
            damageStats: {
              'bodyDamage': 15,
              'headDamage': 37.5,
              'bodyDown': 7,
              'headDown': 3,
              'bodyKO': 4,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Clip Capacity', 3],
              ['Recoil', 4],
              ['Nadine\'s AK-47', 5],
              ['Sully\'s AK-47', 5],
              ['Elena\'s AK-47', 7],
              ['Rafe\'s AK-47', 6],
              ['Drake\'s AK-47', 6],
              ['Sam\'s AK-47', 8]
            ]
          },{
            id: 102,
            name: 'FAL',
            points: 5,
            info: [
              'Three round burst rifle',
              'Mid range',
              'Moderate damage',
              'Moderate rate of fire',
              'Low recoil and good accuracy',
              'Press X when aiming to zoom'
            ],
            stats: {
              'Recoil': 9,
              'Accuracy': 9,
              'Damage': 5,
              'Range': 7.5,
              'Fire rate': 9
            },
            damageStats: {
              'bodyDamage': 17,
              'headDamage': 42.5,
              'bodyDown': 6,
              'headDown': 3,
              'bodyKO': 3,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Scoped-in Radar', 1],
              ['Reload Speed', 2],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Clip Capacity', 2],
              ['Recoil', 4],
              ['Sully\'s FAL', 3],
              ['Drake\'s FAL', 6],
              ['Nadine\'s FAL', 6],
              ['Sam\'s FAL', 5],
              ['Elena\'s FAL', 7],
              ['Rafe\'s FAL', 7]
            ]
          },{
            id: 109,
            name: 'Mazur LDR',
            points: 5,
            info: [
              'Bolt action sniper rifle',
              'Long range',
              'Very high damage',
              'Slow rate of fire',
              'High recoil and very good accuracy',
              'Press X when aiming to activate second level of zoom'
            ],
            stats: {
              'Recoil': 5.5,
              'Accuracy': 8,
              'Damage': 9,
              'Range': 10,
              'Fire rate': 1
            },
            damageStats: {
              'bodyDamage': 70,
              'headDamage': '100+',
              'bodyDown': 2,
              'headDown': 1,
              'bodyKO': 1,
              'headKO': 1
            },
            mods: [
              ['Starting Ammo', 1],
              ['Scoped-in Radar', 1],
              ['Scope Sway', 1],
              ['Reload Speed', 2],
              ['Silencer', 4],
              ['Recoil', 3],
              ['Clip Capacity', 2],
              ['Scope-in Speed', 4],
              ['Drake\'s Mazur LDR', 3],
              ['Sam\'s Mazur LDR', 6],
              ['Elena\'s Mazur LDR', 4],
              ['Rafe\'s Mazur LDR', 4],
              ['Nadine\'s Mazur LDR', 6],
              ['Sully\'s Mazur LDR', 7]
            ]
          },{
            id: 105,
            name: 'MP34a',
            points: 5,
            info: [
              'Fully automatic submachine gun',
              'Close range',
              'Moderate damage',
              'Moderate rate of fire',
              'Low recoil and poor accuracy'
            ],
            stats: {
              'Recoil': 6.5,
              'Accuracy': 5,
              'Damage': 4,
              'Range': 4.5,
              'Fire rate': 6.5
            },
            damageStats: {
              'bodyDamage': 15,
              'headDamage': 30,
              'bodyDown': 7,
              'headDown': 4,
              'bodyKO': 4,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Aimed Strafe Speed', 3],
              ['Silencer', 4],
              ['Blindfire Accuracy', 4],
              ['Accuracy', 4],
              ['Clip Capacity', 3],
              ['Recoil', 4],
              ['Sam\'s MP34a', 4],
              ['Rafe\'s MP34a', 6],
              ['Elena\'s MP34a', 7],
              ['Sully\'s MP34a', 6],
              ['Nadine\'s MP34a', 7],
              ['Drake\'s MP34a', 8]
            ]
          },{
            id: 106,
            name: 'Mettler M-30',
            points: 5,
            info: [
              'Semi-automatic rifle',
              'Mid to long range',
              'High damage',
              'Moderate rate of fire',
              'Moderate recoil and good accuracy',
              'Press X when aiming to zoom'
            ],
            stats: {
              'Recoil': 7.5,
              'Accuracy': 8.5,
              'Damage': 6,
              'Range': 8.5,
              'Fire rate': 6.5
            },
            damageStats: {
              'bodyDamage': 20,
              'headDamage': 40,
              'bodyDown': 5,
              'headDown': 3,
              'bodyKO': 2,
              'headKO': 1
            },
            mods: [
              ['Starting Ammo', 1],
              ['Scoped-in Radar', 1],
              ['Reload Speed', 2],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Recoil', 4],
              ['Clip Capacity', 4],
              ['Rafe\'s Mettler M-30', 3],
              ['Sully\'s Mettler M-30', 8],
              ['Drake\'s Mettler M-30', 6],
              ['Sam\'s Mettler M-30', 7],
              ['Elena\'s Mettler M-30', 7],
              ['Nadine\'s Mettler M-30', 7]
            ]
          },{
            id: 104,
            name: 'XCR',
            points: 5,
            info: [
              'Fully automatic submachine gun',
              'Close range',
              'Low damage',
              'very high rate of fire',
              'High recoil and poor accuracy'
            ],
            stats: {
              'Recoil': 4,
              'Accuracy': 5.5,
              'Damage': 2,
              'Range': 3.3,
              'Fire rate': 9.7
            },
            damageStats: {
              'bodyDamage': 12,
              'headDamage': 24,
              'bodyDown': 9,
              'headDown': 5,
              'bodyKO': 5,
              'headKO': 3
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 2],
              ['Accuracy', 2],
              ['Clip Capacity', 3],
              ['Blindfire Accuracy', 4],
              ['Recoil', 4],
              ['Elena\'s XCR', 4],
              ['Rafe\'s XCR', 6],
              ['Nadine\'s XCR', 5],
              ['Sam\'s XCR', 6],
              ['Sully\'s XCR', 6],
              ['Drake\'s XCR', 8]
            ]
          },{
            id: 108,
            name: 'Copperhead SR7',
            points: 5,
            info: [
              'Fully automatic scoped rifle',
              'Mid to long range',
              'Low damage',
              'High rate of fire',
              'Moderate recoil and good accuracy'
            ],
            stats: {
              'Recoil': 7,
              'Accuracy': 9.7,
              'Damage': 2,
              'Range': 8,
              'Fire rate': 8.7
            },
            damageStats: {
              'bodyDamage': 13,
              'headDamage': 39,
              'bodyDown': 8,
              'headDown': 3,
              'bodyKO': 4,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Scoped-in Radar', 1],
              ['Reload Speed', 2],
              ['Silencer', 4],
              ['Blindfire Accuracy', 3],
              ['Scope-in Speed', 1],
              ['Clip Capacity', 3],
              ['Recoil', 4],
              ['Nadine\'s Copperhead SR7', 4],
              ['Elena\'s Copperhead SR7', 6],
              ['Sully\'s Copperhead SR7', 5],
              ['Rafe\'s Copperhead SR7', 6],
              ['Sam\'s Copperhead SR7', 6],
              ['Drake\'s Copperhead SR7', 8]
            ]
          },{
            id: 110,
            name: 'Spezzotti 12 Gauge',
            points: 5,
            info: [
              'Pump action shotgun',
              'Very close range',
              'Very high damage',
              'Slow rate of fire',
              'High recoil and spread'
            ],
            stats: {
              'Recoil': 5.5,
              'Accuracy': 8,
              'Damage': 9,
              'Range': 0.3,
              'Fire rate': 4
            },
            damageStats: {
              'bodyDamage': 44,
              'headDamage': '100+',
              'bodyDown': '~3',
              'headDown': '',
              'bodyKO': '~1',
              'headKO': ''
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 4],
              ['Silencer', 4],
              ['Clip Capacity', 3],
              ['Drake\'s Spezzotti 12 Gauge', 4],
              ['Sully\'s Spezzotti 12 Gauge', 6],
              ['Sam\'s Spezzotti 12 Gauge', 5],
              ['Nadine\'s Spezzotti 12 Gauge', 6],
              ['Rafe\'s Spezzotti 12 Gauge', 7]
            ]
          },{
            id: 107,
            name: 'HS39',
            points: 5,
            info: [
              'Fully automatic assault rifle',
              'Mid to close range',
              'Moderate damage',
              'High rate of fire',
              'High recoil and moderate accuracy'
            ],
            stats: {
              'Recoil': 5,
              'Accuracy': 6,
              'Damage': 3,
              'Range': 7,
              'Fire rate': 7.5
            },
            damageStats: {
              'bodyDamage': 14,
              'headDamage': 35,
              'bodyDown': 8,
              'headDown': 3,
              'bodyKO': 4,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Clip Capacity', 3],
              ['Recoil', 4],
              ['Nadine\'s HS39', 5],
              ['Sam\'s HS39', 6],
              ['Drake\'s HS39', 6],
              ['Elena\'s HS39', 7],
              ['Rafe\'s HS39', 7],
              ['Sully\'s HS39', 7]
            ]
          },{
            id: 103,
            name: 'M14 Custom',
            points: 5,
            info: [
              'Semi-automatic scoped rifle',
              'Long range',
              'High damage',
              'Moderate rate of fire',
              'high recoil and very good accuracy',
              'Press X when aiming to activate second level of zoom'
            ],
            stats: {
              'Recoil': 7.5,
              'Accuracy': 8.7,
              'Damage': 8,
              'Range': 10,
              'Fire rate': 5
            },
            damageStats: {
              'bodyDamage': 35,
              'headDamage': 73,
              'bodyDown': 3,
              'headDown': 2,
              'bodyKO': 1,
              'headKO': 1
            },
            mods: [
              ['Starting Ammo', 1],
              ['Scoped-in Radar', 1],
              ['Scope Sway', 1],
              ['Reload Speed', 1],
              ['Silencer', 4],
              ['Scope-in Speed', 3],
              ['Recoil', 4],
              ['Clip Capacity', 2],
              ['Sam\'s M14 Custom', 3],
              ['Elena\'s M14 Custom', 6],
              ['Nadine\'s M14 Custom', 5],
              ['Rafe\'s M14 Custom', 5],
              ['Drake\'s M14 Custom', 6],
              ['Sully\'s M14 Custom', 6]
            ]
          },{
            id: 162,
            name: 'P90',
            points: 5,
            info: [
              'Fully automatic submachine gun'
            ],
            stats: {
              'Recoil': 5,
              'Accuracy': 5.5,
              'Damage': 1.5,
              'Range': 4,
              'Fire rate': 10
            },
            damageStats: {
              'bodyDamage': 10,
              'headDamage': 20,
              'bodyDown': 10,
              'headDown': 5,
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Clip Capacity', 2],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Accuracy', 4],
              ['Blindfire Accuracy', 4],
              ['Recoil', 4],
              ['Drake\'s P90', 6],
              ['Elena\'s P90', 6],
              ['Rafe\'s P90', 5],
              ['Sully\'s P90', 6],
              ['Sam\'s P90', 7],
              ['Nadine\'s P90', 7]
            ]
          },{
            id: 163,
            name: 'Arrowhead A3c',
            points: 5,
            info: [
              'Fully automatic long range variable rifle'
            ],
            stats: {
              'Recoil': 7.5,
              'Accuracy': 4.5,
              'Damage': 4,
              'Range': 5.5,
              'Fire rate': 8
            },
            damageStats: {
              'bodyDamage': 14,
              'headDamage': 28,
              'bodyDown': 8,
              'headDown': 4,
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Silencer', 4],
              ['Clip Capacity', 2],
              ['Aimed Strafe Speed', 3],
              ['Accuracy', 4],
              ['Recoil', 4],
              ['Sully\'s Arrowhead A3c', 5],
              ['Sam\'s Arrowhead A3c', 5],
              ['Drake\'s Arrowhead A3c', 7],
              ['Nadine\'s Arrowhead A3c', 6],
              ['Rafe\'s Arrowhead A3c', 6],
              ['Elena\'s Arrowhead A3c', 7],
            ]
          },{
            id: 174,
            name: 'Lowe-S',
            points: 5,
            info: [
              'Fully automatic mid range assault rifle'
            ],
            stats: {
              'Recoil': 6,
              'Accuracy': 8,
              'Damage': 5.5,
              'Range': 6,
              'Fire rate': 4
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Silencer', 4],
              ['Clip Capacity',3],
              ['Aimed Strafe Speed', 3],
              ['Recoil', 4],
              ['Drake\'s Lowe-S', 5],
              ['Sully\'s Lowe-S', 6],
              ['Sam\'s Lowe-S', 7],
              ['Elena\'s Lowe-S', 8],
              ['Nadine\'s Lowe-S', 5],
              ['Rafe\'s Lowe-S', 6],
            ]
          },{
            id: 175,
            name: 'Harrison 1890',
            points: 5,
            info: [
              'Lever-action mid to long range rifle'
            ],
            stats: {
              'Recoil': 8,
              'Accuracy': 9,
              'Damage': 7,
              'Range': 8.5,
              'Fire rate': 3
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Clip Capacity',4],
              ['Recoil', 4],
              ['Drake\'s Harrison 1890', 7],
              ['Sully\'s Harrison 1890', 4],
              ['Rafe\'s Harrison 1890', 6],
              ['Sam\'s Harrison 1890', 7],
              ['Nadine\'s Harrison 1890', 9],
              ['Elena\'s Harrison 1890', 8],
            ]
          },{
            id: 180,
            name: 'M4',
            points: 5,
            info: [
              'Fully Automatic mid to long range rifle'
            ],
            stats: {
              'Recoil': 9,
              'Accuracy': 8.8,
              'Damage': 2,
              'Range': 8,
              'Fire rate': 9
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Clip Capacity',3],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Drake\'s M4', 5],
              ['Sully\'s M4', 6],
              ['Sam\'s M4', 7],
              ['Elena\'s M4', 8],
              ['Nadine\'s M4', 5],
              ['Rafe\'s M4', 6],
            ]
          },{
            id: 181,
            name: 'PAK-80',
            points: 5,
            info: [
              'Light machine gun. Recoil and accuracy improved while in cover'
            ],
            stats: {
              'Recoil': 5,
              'Accuracy': 6,
              'Damage': 4.5,
              'Range': 6,
              'Fire rate': 5.5
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 2],
              ['Silencer', 4],
              ['Blindfire Accuracy', 3],
              ['Aimed Strafe Speed', 3],
              ['Accuracy', 4],
              ['Recoil', 4],
              ['Sully\'s PAK-80', 6],
              ['Rafe\'s PAK-80', 7],
              ['Sam\'s PAK-80', 7],
              ['Drake\'s PAK-80', 8],
              ['Nadine\'s PAK-80', 7],
              ['Elena\'s PAK-80', 8],
            ]
          },{
            id: 186,
            name: 'INSAS',
            points: 5,
            info: [
              'Fully automatic mid range rifle'
            ],
            stats: {
              'Recoil': 4,
              'Accuracy': 5,
              'Damage': 3,
              'Range': 6,
              'Fire rate': 5
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Clip Capacity', 3],
              ['Silencer', 4],
              ['Aimed Strafe Speed', 3],
              ['Recoil', 4],
              ['Drake\'s INSAS', 6],
              ['Sully\'s INSAS', 7],
              ['Sam\'s INSAS', 6],
              ['Elena\'s INSAS', 7],
              ['Nadine\'s INSAS', 5],
              ['Rafe\'s INSAS', 8],
            ]
          },{
            id: 187,
            name: 'Type 95',
            points: 5,
            info: [
              'Fully automatic mid to long range rifle'
            ],
            stats: {
              'Recoil': 8,
              'Accuracy': 9,
              'Damage': 5,
              'Range': 8,
              'Fire rate': 4
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 3],
              ['Silencer', 4],
              ['Clip Capacity', 3],
              ['Aimed Strafe Speed', 3],
              ['Recoil', 4],
              ['Elena\'s Type 95', 6],
              ['Drake\'s Type 95', 5],
              ['Sam\'s Type 95', 8],
              ['Sully\'s Type 95', 7],
              ['Rafe\'s Type 95', 6],
              ['Nadine\'s Type 95', 6],
            ]
          }]
        },
        {
          id: 'pistols',
          name: 'Pistol',
          max: 1,
          perks: [{
            id: 111,
            name: 'Aegis 9mm',
            points: 0,
            info: [
              'Semi automatic pistol',
              'Close range',
              'Low damage',
              'Slow rate of fire',
              'Low recoil and moderate accuracy'
            ],
            stats: {
              'Recoil': 7.5,
              'Accuracy': 8,
              'Damage': 4,
              'Range': 5,
              'Fire rate': 6
            },
            damageStats: {
              'bodyDamage': 17,
              'headDamage': 34,
              'bodyDown': 6,
              'headDown': 3,
              'bodyKO': 3,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 1],
              ['Clip Capacity', 1],
              ['Drake\'s Aegis 9mm', 2],
              ['Sully\'s Aegis 9mm', 2],
              ['Nadine\'s Aegis 9mm', 3]
            ]
          },{
            id: 112,
            name: 'Para .45',
            points: 1,
            info: [
              'Semi automatic pistol',
              'Close range',
              'Moderate damage',
              'Moderate rate of fire',
              'Low recoil and moderate accuracy'
            ],
            stats: {
              'Recoil': 9,
              'Accuracy': 8.7,
              'Damage': 4,
              'Range': 5,
              'Fire rate': 8
            },
            damageStats: {
              'bodyDamage': 17,
              'headDamage': 34,
              'bodyDown': 6,
              'headDown': 3,
              'bodyKO': 3,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Clip Capacity', 1],
              ['Blindfire Accuracy', 2],
              ['Sully\'s Para .45', 3],
              ['Nadine\'s Para .45', 2],
              ['Sam\'s Para .45', 2],
              ['Elena\'s Para .45', 3],
              ['Rafe\'s Para .45', 3],
              ['Drake\'s Para .45', 3]
            ]
          },{
            id: 114,
            name: 'Raffica',
            points: 1,
            info: [
              'Three round burst pistol',
              'Mid range',
              'Moderate damage',
              'Moderate rate of fire',
              'Moderate recoil and good accuracy'
            ],
            stats: {
              'Recoil': 8.5,
              'Accuracy': 9,
              'Damage': 4,
              'Range': 5,
              'Fire rate': 8.5
            },
            damageStats: {
              'bodyDamage': 17,
              'headDamage': 34,
              'bodyDown': 6,
              'headDown': 3,
              'bodyKO': 3,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 2],
              ['Clip Capacity', 1],
              ['Nadine\'s Raffica', 2],
              ['Sully\'s Raffica', 3],
              ['Rafe\'s Raffica', 2],
              ['Drake\'s Raffica', 3],
              ['Elena\'s Raffica', 3],
              ['Sam\'s Raffica', 3]
            ]
          },{
            id: 115,
            name: 'Fossa R-81',
            points: 2,
            info: [
              'Fully automatic machine pistol',
              'Close range',
              'Low damage',
              'Very high rate of fire',
              'High recoil and poor accuracy'
            ],
            stats: {
              'Recoil': 4.5,
              'Accuracy': 6.5,
              'Damage': 2,
              'Range': 3.5,
              'Fire rate': 9
            },
            damageStats: {
              'bodyDamage': 12,
              'headDamage': 22,
              'bodyDown': 9,
              'headDown': 5,
              'bodyKO': 5,
              'headKO': 2
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Accuracy', 2],
              ['Silencer', 2],
              ['Blindfire Accuracy', 2],
              ['Recoil', 2],
              ['Clip Capacity', 2],
              ['Sully\'s Fossa R-81', 3],
              ['Drake\'s Fossa R-81', 3],
              ['Rafe\'s Fossa R-81', 3],
              ['Elena\'s Fossa R-81', 3],
              ['Nadine\'s Fossa R-81', 4],
              ['Sam\'s Fossa R-81', 4]
            ]
          },{
            id: 117,
            name: 'Pistole',
            points: 1,
            info: [
              'Double-barrelled shotgun',
              'Very close range',
              'High damage',
              'Moderate rate of fire',
              'Moderate recoil and spread'
            ],
            stats: {
              'Recoil': 6.5,
              'Accuracy': 8,
              'Damage': 8,
              'Range': 1,
              'Fire rate': 6
            },
            damageStats: {
              'bodyDamage': 50,
              'headDamage': 75,
              'bodyDown': '~3',
              'headDown': '',
              'bodyKO': '~1',
              'headKO': ''
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 2],
              ['Blindfire Accuracy', 4],
              ['Clip Capacity', 4],
              ['Drake\'s Pistole', 3],
              ['Rafe\'s Pistole', 5],
              ['Elena\'s Pistole', 6],
              ['Sam\'s Pistole', 5]
            ]
          },{
            id: 116,
            name: 'Jackal',
            points: 0,
            info: [
              'Semi-automatic revolver',
              'Mid range',
              'High damage',
              'Slow rate of fire',
              'Moderate recoil and good accuracy'
            ],
            stats: {
              'Recoil': 7.5,
              'Accuracy': 8,
              'Damage': 7,
              'Range': 6,
              'Fire rate': 6
            },
            damageStats: {
              'bodyDamage': 25,
              'headDamage': 50,
              'bodyDown': 4,
              'headDown': 2,
              'bodyKO': 2,
              'headKO': 1
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 2],
              ['Clip Capacity', 2],
              ['Recoil', 2],
              ['Rafe\'s Jackal', 3],
              ['Sam\'s Jackal', 3],
              ['Elena\'s Jackal', 4],
              ['Drake\'s Jackal', 3],
              ['Sully\'s Jackal', 3],
              ['Nadine\'s Jackal', 3]
            ]
          },{
            id: 113,
            name: 'Bishai .50 Cal',
            points: 1,
            info: [
              'Single shot scoped pistol',
              'Mid to long range',
              'High damage',
              'Slow rate of fire',
              'Moderate recoil and good accuracy'
            ],
            stats: {
              'Recoil': 4.5,
              'Accuracy': 9.7,
              'Damage': 8.7,
              'Range': 10,
              'Fire rate': 4
            },
            damageStats: {
              'bodyDamage': 45,
              'headDamage': '100+',
              'bodyDown': 3,
              'headDown': 1,
              'bodyKO': 1,
              'headKO': 1
            },
            mods: [
              ['Starting Ammo', 1],
              ['Scoped-in Radar', 1],
              ['Reload Speed', 1],
              ['Clip Capacity', 2],
              ['Rafe\'s Bishai .50 Cal', 2],
              ['Drake\'s Bishai .50 Cal', 3],
              ['Sully\'s Bishai .50 Cal', 2],
              ['Elena\'s Bishai .50 Cal', 3],
              ['Sam\'s Bishai .50 Cal', 2],
              ['Nadine\'s Bishai .50 Cal', 3]
            ]
          },{
            id: 160,
            name: 'Enforcer G26',
            points: 1,
            info: [
              'Semi-auto very fast rate of fire pistol'
            ],
            stats: {
              'Recoil': 9.7,
              'Accuracy': 9,
              'Damage': 3,
              'Range': 4,
              'Fire rate': 8.5
            },
            damageStats: {
              'bodyDamage': 15,
              'headDamage': 30,
              'bodyDown': 7,
              'headDown': 4,
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 2],
              ['Clip Capacity', 2],
              ['Sully\'s Enforcer G26', 2],
              ['Drake\'s Enforcer G26', 3],
              ['Elena\'s Enforcer G26', 3],
              ['Nadine\'s Enforcer G26', 3],
              ['Rafe\'s Enforcer G26', 4],
              ['Sam\'s Enforcer G26', 4]
            ]
          },{
            id: 161,
            name: 'Agarwal .40',
            points: 2,
            info: [
              'Semi-auto hard hitting pistol'
            ],
            stats: {
              'Recoil': 8,
              'Accuracy': 7.7,
              'Damage': 7.7,
              'Range': 6.5,
              'Fire rate': 7.7
            },
            damageStats: {
              'bodyDamage': 25,
              'headDamage': 75,
              'bodyDown': 4,
              'headDown': 2,
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 2],
              ['Clip Capacity', 2],
              ['Recoil', 2],
              ['Rafe\'s Agarwal .40', 2],
              ['Sam\'s Agarwal .40', 3],
              ['Nadine\'s Agarwal .40', 3],
              ['Sully\'s Agarwal .40', 3],
              ['Elena\'s Agarwal .40', 4],
              ['Drake\'s Agarwal .40', 4]
            ]
          },{
            id: 176,
            name: 'DC Single Action',
            points: 1,
            info: [
              'Semi-auto revolver from the old west'
            ],
            stats: {
              'Recoil': 8,
              'Accuracy': 9,
              'Damage': 8.5,
              'Range': 5,
              'Fire rate': 5
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Blindfire Accuracy', 2],
              ['Silencer', 2],
              ['Clip Capacity', 2],
              ['Recoil', 2],
              ['Drake\'s DC Single Action', 3],
              ['Sully\'s DC Single Action', 3],
              ['Nadine\'s DC Single Action', 4],
              ['Elena\'s DC Single Action', 3],
              ['Rafe\'s DC Single Action', 4],
              ['Sam\'s DC Single Action', 3],
            ]
          },{
            id: 177,
            name: 'RKL-155',
            points: 2,
            info: [
              'Fully automatic mid to long range pistol'
            ],
            stats: {
              'Recoil': 8,
              'Accuracy': 8,
              'Damage': 2,
              'Range': 5,
              'Fire rate': 9
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 2],
              ['Accuracy', 2],
              ['Clip Capacity', 2],
              ['Elena\'s RKL-155', 2],
              ['Drake\'s RKL-155', 3],
              ['Rafe\'s RKL-155', 2],
              ['Sully\'s RKL-155', 3],
              ['Sam\'s RKL-155', 4],
              ['Nadine\'s RKL-155', 4]
            ]
          },{
            id: 182,
            name: 'Micro 9mm',
            points: 2,
            info: [
              'Fully automatic close range pistol'
            ],
            stats: {
              'Recoil': 4,
              'Accuracy': 6,
              'Damage': 1,
              'Range': 2,
              'Fire rate': 9.8
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Silencer', 2],
              ['Blindfire Accuracy', 3],
              ['Clip Capacity', 2],
              ['Recoil', 2],
              ['Accuracy', 2],
              ['Drake\'s Micro 9mm', 4],
              ['Sully\'s Micro 9mm', 3],
              ['Nadine\'s Micro 9mm', 5],
              ['Elena\'s Micro 9mm', 3],
              ['Rafe\'s Micro 9mm', 4],
              ['Sam\'s Micro 9mm', 3],
            ]
          },{
            id: 183,
            name: 'Para 9',
            points: 1,
            info: [
              'Semi-auto close range pistol'
            ],
            stats: {
              'Recoil': 9,
              'Accuracy': 8,
              'Damage': 6,
              'Range': 4.5,
              'Fire rate': 8.5
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Blindfire Accuracy', 2],
              ['Silencer', 2],
              ['Clip Capacity', 2],
              ['Elena\'s Para 9', 2],
              ['Drake\'s Para 9', 3],
              ['Rafe\'s Para 9', 3],
              ['Sully\'s Para 9', 3],
              ['Sam\'s Para 9', 4],
              ['Nadine\'s Para 9', 4],
            ]
          },{
            id: 185,
            name: 'Krivosk-XS',
            points: 1,
            info: [
              'Semi-auto mid to long range variable pistol'
            ],
            stats: {
              'Recoil': 7,
              'Accuracy': 9,
              'Damage': 4,
              'Range': 10,
              'Fire rate': 7.5
            },
            damageStats: {
              'bodyDamage': '?',
              'headDamage': '?',
              'bodyDown': '?',
              'headDown': '?',
              'bodyKO': '?',
              'headKO': '?'
            },
            mods: [
              ['Starting Ammo', 1],
              ['Reload Speed', 1],
              ['Blindfire Accuracy', 2],
              ['Silencer', 2],
              ['Clip Capacity', 2],
              ['Recoil', 2],
              ['Sully\'s Krivosk-XS', 2],
              ['Nadine\'s Krivosk-XS', 3],
              ['Rafe\'s Krivosk-XS', 4],
              ['Drake\'s Krivosk-XS', 4],
              ['Sam\'s Krivosk-XS', 3],
              ['Elena\'s Krivosk-XS', 4],
            ]
          }]
        },
        {
          id: 'purchasables',
          name: 'Purchasable',
          max: 4,
          perks: [{
            id: 'mysticals',
            name: 'Mystical',
            max: 1,
            perks: [{
              id: 119,
              name: 'Wrath of El Dorado',
              points: 5,
              cost: 800,
              btnClass: 'btn-perk-mystical',
              description: ['Throw this totem to summon the El Dorado which launches specters that seek out and damage nearby enemies'],
              mods: [{
                id: 1,
                name: 'Highlight Targets',
                points: 1,
                cost: 50,
                hero: false,
                info: [
                  'Opponents are highlighted upon recieving damage from your Wrath of El Dorado'
                ]
              },{
                id: 2,
                name: 'Faster Specters',
                points: 2,
                cost: 75,
                hero: false,
                info: [
                  'Specters from your Wrath track opponents 25% faster'
                ]
              },{
                id: 3,
                name: 'Increased Damage',
                points: 3,
                cost: 200,
                hero: false,
                info: [
                  'Opponents take 50% addition damage when struck'
                ]
              }]
            },{
              id: 120,
              name: 'Cintamani stone',
              points: 4,
              cost: 350,
              btnClass: 'btn-perk-mystical',
              description: ['Channel the power of the Cintamani stone to revive downed allies'],
              mods: [{
                id: 1,
                name: 'Increased Range',
                points: 1,
                cost: 50,
                hero: false,
                info: [
                  'Cintamani Stone casting range is increased by 35%'
                ]
              },{
                id: 2,
                name: 'Full Revive',
                points: 3,
                cost: 200,
                hero: false,
                info: [
                  'Cintamani Stone now revives allies to full health'
                ]
              }]
            },{
              id: 118,
              name: 'Staff of Ayar Manco',
              points: 2,
              cost: 400,
              btnClass: 'btn-perk-mystical',
              description: ['Staff that send out pulses, placing enemies on radar for a short period of time'],
              mods: [{
                id: 1,
                name: 'Increased Duration',
                points: 1,
                cost: 25,
                hero: false,
                info: [
                  'The duration of your Staff is increased by 15 seconds'
                ]
              },{
                id: 2,
                name: 'Directional Arrows',
                points: 1,
                cost: 25,
                hero: false,
                info: [
                  'Radar shows you and your team which direction enemies are facing while Staff is active'
                ]
              },{
                id: 3,
                name: 'Highlight Targets',
                points: 2,
                cost: 50,
                hero: false,
                info: [
                  'Highlight opponents for yourself while your Staff of Ayar Manco is active'
                ]
              }]
            },{
              id: 121,
              name: 'Spirit of the Djinn',
              points: 3,
              cost: 500,
              btnClass: 'btn-perk-mystical',
              description: ['Activate the power of the Djinn, rendering yourself invisible and gaining a speed boost while rolling or jumping off a rope swing'],
              mods: [{
                id: 1,
                name: 'Faster Movement',
                points: 2,
                cost: 75,
                hero: false,
                info: [
                  'Your run speed is increased by 30% while Spirit of the Djinn is active'
                ]
              },{
                id: 2,
                name: 'Increased Duration',
                points: 2,
                cost: 125,
                hero: false,
                info: [
                  'Djinn duration is increased by 25% and each KO extends its duration by 5 seconds'
                ]
              },{
                id: 3,
                name: 'Fire Punch',
                points: 3,
                cost: 200,
                hero: false,
                info: [
                  'Down an opponent in 2 melee hits'
                ]
              }]
            },{
              id: 122,
              name: 'Indra\'s Eternity',
              points: 4,
              cost: 400,
              btnClass: 'btn-perk-mystical',
              description: ['Throw to create a field which slows all enemy movement'],
              mods: [{
                id: 1,
                name: 'Slow Down Increase',
                points: 2,
                cost: 125,
                hero: false,
                info: [
                  'Slow down your enemies by an additional 20%'
                ]
              },{
                id: 2,
                name: 'Area of Effect Increase',
                points: 2,
                cost: 75,
                hero: false,
                info: [
                  'The area of effect to slow opponents is increased by 25%'
                ]
              },{
                id: 3,
                name: 'Highlight Targets',
                points: 1,
                cost: 125,
                hero: false,
                info: [
                  'Opponents are highlighted if they are in the radius of your Indra\'s Eternity'
                ]
              }]
            },{
              id: 168,
              name: 'Path of Indra',
              points: 3,
              cost: 400,
              btnClass: 'btn-perk-mystical',
              description: ['Hold L1 + R1 and aim at an ally, then release to teleport to their location'],
              mods: [{
                id: 1,
                name: 'Teleport to Sidekicks',
                points: 1,
                cost: 25,
                hero: false,
                info: [
                  'Teleport to allied sidekicks as well as players'
                ]
              },{
                id: 2,
                name: 'Quick Escape',
                points: 1,
                cost: 25,
                hero: false,
                info: [
                  'If no ally is targeted, tap L1 + R1 to teleport to a safe position'
                ]
              },{
                id: 3,
                name: 'Misdirection',
                points: 1,
                cost: 50,
                hero: false,
                info: [
                  'Spawn an additional fake portal when teleporting'
                ]
              },{
                id: 4,
                name: 'Revive Target',
                points: 2,
                cost: 150,
                hero: false,
                info: [
                  'If the teleport target is downed, revive them'
                ]
              }]
            },{
              id: 179,
              name: 'Shield of Asgard',
              points: 5,
              cost: 800,
              btnClass: 'btn-perk-mystical',
              description: ['Take 75% less damage. Heals to full health when activated. Move 50% slower, but ramp up to full speed if running continuously'],
              mods: [{
                id: 1,
                name: 'Electric punch',
                points: 1,
                cost: 50,
                hero: false,
                info: [
                  'Down an opponent in two melee hits'
                ]
              },{
                id: 2,
                name: 'Active While Down',
                points: 1,
                cost: 50,
                hero: false,
                info: [
                  'Shield of Asgard remains active when downed'
                ]
              },{
                id: 3,
                name: 'Increased Duration',
                points: 1,
                cost: 100,
                hero: false,
                info: [
                  'Shield of Asgard duration is increased by 25%'
                ]
              },{
                id: 4,
                name: 'Faster Movement',
                points: 2,
                cost: 125,
                hero: false,
                info: [
                  'Shield of Asgard movement speed is increased by 30%'
                ]
              }]
            }]
          },
          {
            id: 'gear',
            name: 'Gear',
            max: 1,
            perks: [{
              id: 123,
              name: 'Grenade',
              points: 4,
              cost: 300,
              btnClass: 'btn-perk-gear',
              description: ['Frag grenade that detonates shortly after impact'],
              upgrades: [
                '25% Faster Resupply',
                '30% Faster Resupply',
                'Carry an additional grenade'
              ]
            },{
              id: 124,
              name: 'RevivePak',
              points: 2,
              cost: 200,
              btnClass: 'btn-perk-gear',
              description: ['Throw at a downed ally to revive them'],
              upgrades: [
                '15% faster resupply, carry additional RevivePak',
                'Faster revive time, revive allies to full health, 30% faster resupply',
                '50% faster throw speed, larger revive range'
              ]
            },{
              id: 125,
              name: 'Mine',
              points: 3,
              cost: 300,
              btnClass: 'btn-perk-gear',
              description: ['Proximity mine that detonates when an enemy passes by. Has a short throw distance. Can be recovered with triangle'],
              upgrades: [
                '20% faster resupply, can\'t be marked by Saviors',
                '30% faster fuse time',
                'Mid air explosion on detonate, no beeping, carry an additional mine'
              ]
            },{
              id: 126,
              name: 'C4',
              points: 3,
              cost: 250,
              btnClass: 'btn-perk-gear',
              description: ['Sticks to any surface where it lands and can be detonated using down'],
              upgrades: [
                '10% faster resupply, Can detonate while downed',
                '25% faster resupply, Detonation delay reduced by 30%, Carry an additional C4',
                '40% faster resupply, Detonation delay reduced by 50%'
              ]
            },{
              id: 127,
              name: 'Smokebomb',
              points: 1,
              cost: 200,
              btnClass: 'btn-perk-gear',
              description: ['Created a dense smoke field after detonating'],
              upgrades: [
                'Duration of smoke increased by 50%, 15% faster resupply',
                '30% faster resupply, carry additional smokebomb'
              ]
            }]
          },
          {
            id: 'heavyWeapons',
            name: 'Heavy Weapon',
            max: 1,
            perks: [{
              id: 132,
              name: 'China Lake GL',
              points: 5,
              cost: 700,
              btnClass: 'btn-perk-heavy',
              info: [
                'Pump-action grenade launcher',
                'Downs in two hits',
                '4 rounds per purchase'
              ],
              stats: {
                'Recoil': 4.5,
                'Accuracy': 9.7,
                'Damage': 9,
                'Range': 7.5,
                'Fire rate': 1
              },
              damageStats: {
                'bodyDamage': 85,
                'headDamage': '',
                'bodyDown': '~2',
                'headDown': '',
                'bodyKO': '~1',
                'headKO': ''
              }
            },{
              id: 133,
              name: 'Stoner 63',
              points: 3,
              cost: 700,
              btnClass: 'btn-perk-heavy',
              info: [
                'Automatic light machine gun',
                'All ammo goes directly into the magazine, never has to reload',
                '50 bullets per purchase'
              ],
              stats: {
                'Recoil': 6.5,
                'Accuracy': 8,
                'Damage': 5,
                'Range': 7,
                'Fire rate': 4.5
              },
              damageStats: {
                'bodyDamage': 17,
                'headDamage': 42,
                'bodyDown': 6,
                'headDown': 3,
                'bodyKO': 4,
                'headKO': 2
              }
            },{
              id: 128,
              name: 'RPG',
              points: 5,
              cost: 700,
              btnClass: 'btn-perk-heavy',
              info: [
                'Single shot RPG',
                'Downs with 1 hit if very close to target',
                '1 round per purchase'
              ],
              stats: {
                'Recoil': 5.5,
                'Accuracy': 8,
                'Damage': 10,
                'Range': 8.5,
                'Fire rate': 0.1
              },
              damageStats: {
                'bodyDamage': '100+',
                'headDamage': '',
                'bodyDown': '~1',
                'headDown': '',
                'bodyKO': '~1',
                'headKO': ''
              }
            },{
              id: 129,
              name: 'Barok .44',
              points: 4,
              cost: 600,
              btnClass: 'btn-perk-heavy',
              info: [
                'High calibre pistol',
                'Two shots to down or one headshot',
                '6 bullets per purchase'
              ],
              stats: {
                'Recoil': 3.3,
                'Accuracy': 7,
                'Damage': 9,
                'Range': 9.7,
                'Fire rate': 4
              },
              damageStats: {
                'bodyDamage': 50,
                'headDamage': '100+',
                'bodyDown': 2,
                'headDown': 1,
                'bodyKO': 1,
                'headKO': 1
              }
            },{
              id: 130,
              name: 'Condor',
              points: 4,
              cost: 700,
              btnClass: 'btn-perk-heavy',
              info: [
                'Semi-automatic shotgun',
                'Two shots to down at close range',
                '6 rounds per purchase'
              ],
              stats: {
                'Recoil': 6.5,
                'Accuracy': 8,
                'Damage': 9.7,
                'Range': 1.2,
                'Fire rate': 8
              },
              damageStats: {
                'bodyDamage': 97,
                'headDamage': '100+',
                'bodyDown': '~2',
                'headDown': '',
                'bodyKO': '~2',
                'headKO': ''
              }
            },{
              id: 131,
              name: 'ARX-160',
              points: 4,
              cost: 600,
              btnClass: 'btn-perk-heavy',
              info: [
                'Fast firing automatic rifle',
                'Incredibly fast rate of fire',
                '30 bullets per purchase'
              ],
              stats: {
                'Recoil': 4.3,
                'Accuracy': 6,
                'Damage': 1,
                'Range': 7,
                'Fire rate': 10
              },
              damageStats: {
                'bodyDamage': 12,
                'headDamage': 24,
                'bodyDown': 9,
                'headDown': 5,
                'bodyKO': 5,
                'headKO': 3
              }
            },{
              id: 169,
              name: 'Harbinger Sniper',
              points: 4,
              cost: 650,
              btnClass: 'btn-perk-heavy',
              stats: {
                'Recoil': 6,
                'Accuracy': 9,
                'Damage': 9.5,
                'Range': 10,
                'Fire rate': 3
              },
              damageStats: {
                'bodyDamage': 70,
                'headDamage': 100,
                'bodyDown': 2,
                'headDown': 1,
                'bodyKO': '?',
                'headKO': '?'
              }
            },{
              id: 178,
              name: 'US-AN 12',
              points: 5,
              cost: 900,
              btnClass: 'btn-perk-heavy',
              stats: {
                'Recoil': 8.5,
                'Accuracy': 8.5,
                'Damage': 4,
                'Range': 1,
                'Fire rate': 9.5
              },
              damageStats: {
                'bodyDamage': '?',
                'headDamage': '?',
                'bodyDown': '?',
                'headDown': '?',
                'bodyKO': '?',
                'headKO': '?'
              }
            },{
              id: 184,
              name: 'Desert 5',
              points: 4,
              cost: 700,
              btnClass: 'btn-perk-heavy',
              stats: {
                'Recoil': 3,
                'Accuracy': 7,
                'Damage': 9.5,
                'Range': 9.8,
                'Fire rate': 3.5
              },
              damageStats: {
                'bodyDamage': '?',
                'headDamage': '?',
                'bodyDown': '?',
                'headDown': '?',
                'bodyKO': '?',
                'headKO': '?'
              }
            }]
          },
          {
            id: 'sidekicks',
            name: 'Sidekick',
            max: 4,
            perks: [{
              id: 137,
              name: 'Brute Sidekick',
              points: 4,
              cost: 800,
              btnClass: 'btn-perk-sidekick',
              description: [
                'When called in, the Brute assaults the enemy team by laying down suppressing fire.'
              ],
              mods: [{
                id: 1,
                name: 'Faster Movement',
                points: 1,
                cost: 75,
                hero: false,
                info: [
                  'Movement is increased by 30%'
                ]
              },{
                id: 2,
                name: 'Highlight Targets',
                points: 2,
                cost: 100,
                hero: false,
                info: [
                  'Targets are highlighted for you when they have taken damage from your Brute'
                ]
              },{
                id: 3,
                name: 'Accuracy increase',
                points: 2,
                cost: 150,
                hero: false,
                info: [
                  'Accuracy is increased by 15%'
                ]
              },{
                id: 4,
                name: 'Health Regeneration',
                points: 3,
                cost: 175,
                hero: false,
                info: [
                  'Regenerate health after 45 seconds'
                ]
              },{
                id: 5,
                name: 'Brute Teleportation',
                points: 2,
                cost: 75,
                hero: false,
                info: [
                  'Your Brute will vanish when you die and reappear with you on respawning'
                ]
              }]
            },{
              id: 135,
              name: 'Savior Sidekick',
              points: 2,
              cost: 500,
              btnClass: 'btn-perk-sidekick',
              description: [
                'When called in, the Savior will revive you and distribute ammo to you and your team.'
              ],
              mods: [{
                id: 1,
                name: 'Faster Movement',
                points: 1,
                hero: false,
                cost: 25,
                info: [
                  'Movement is increased by 30%'
                ]
              },{
                id: 2,
                name: 'Toss RevivePaks',
                points: 1,
                cost: 75,
                hero: false,
                info: [
                  'A RevivePak is thrown at you when downed'
                ]
              },{
                id: 3,
                name: 'Additional Health',
                points: 1,
                cost: 100,
                hero: false,
                info: [
                  'Health is increased by 35%'
                ]
              },{
                id: 4,
                name: 'More Ammo and Gear',
                points: 2,
                cost: 150,
                hero: false,
                info: [
                  'Additional 75% ammo and 60% gear recharge when Savior restocks you and your team'
                ]
              }]
            },{
              id: 134,
              name: 'Sniper Sidekick',
              points: 3,
              cost: 700,
              btnClass: 'btn-perk-sidekick',
              description: [
                'When called in, the Sniper defends a location using her rifle skills to pick your foes off one by one.',
                'To move your Sniper to a new position, bring up the in-game store and select her again.'
              ],
              mods: [{
                id: 1,
                name: 'Re-positioning Speed',
                points: 1,
                cost: 25,
                hero: false,
                info: [
                  'Re-positioning speed increased by 15%'
                ]
              },{
                id: 2,
                name: 'No Laser Sight',
                points: 2,
                cost: 100,
                hero: false,
                info: [
                  'Laser sight only appears when firing'
                ]
              },{
                id: 3,
                name: 'Path of Indra',
                points: 2,
                cost: 150,
                hero: false,
                info: [
                  'On a re-position command, the Mystical Path of Indra is used to teleport within 3 seconds'
                ]
              },{
                id: 4,
                name: 'Health Regeneration',
                points: 3,
                cost: 175,
                hero: false,
                info: [
                  'Regenerate health after 25 seconds'
                ]
              }]
            },{
              id: 136,
              name: 'Hunter Sidekick',
              points: 3,
              cost: 600,
              btnClass: 'btn-perk-sidekick',
              description: [
                'When called in, the Hunter tracks down enemies and puts them in a choke hold ripe for the KO.'
              ],
              mods: [{
                id: 1,
                name: 'No Explosive Stun',
                points: 1,
                cost: 75,
                hero: false,
                info: [
                  'No stun will occur no matter what type of explosive damages the Hunter'
                ]
              },{
                id: 2,
                name: 'Silent Hunter',
                points: 2,
                cost: 50,
                hero: false,
                info: [
                  'Your Hunter can sneak up on foes without making breathing noises'
                ]
              },{
                id: 3,
                name: 'Longer Grapple',
                points: 2,
                cost: 150,
                hero: false,
                info: [
                  'Opponents take 3 additional hits to escape a grapple'
                ]
              },{
                id: 4,
                name: 'Target in Sight',
                points: 3,
                cost: 200,
                hero: false,
                info: [
                  'Your Hunter\'s target is highlighted at close range'
                ]
              }]
            }]
          }]
        },
        {
          id: 'boosters',
          name: 'Booster',
          max: 4,
          perks: [{
            id: 138,
            name: 'Helping Hand',
            description: ['Increase the speed and effectiveness of reviving'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Helping Hand 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Revive allies 20% faster'
              ]
            },
            {
              name: 'Helping Hand 2',
              points: 2,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Revive allies 33% faster',
                'Increase move speed while reviving my 25%'
              ]
            },
            {
              name: 'Helping Hand 3',
              points: 4,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Revive allies 50% faster',
                'Increase move speed while reviving my 25%',
                'Heal an ally back to full health when you revive them'
              ]
            }]
          },{
            id: 141,
            name: 'Marking',
            description: ['Gain the ability to mark enemies with L3, exposing them to your team'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Marking 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark enemies by aiming at them and pressing L3'
              ]
            },
            {
              name: 'Marking 2',
              points: 4,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark enemies by aiming at them and clicking L3',
                'Marks last an additional 3 seconds',
                'Outline marked enemies'
              ]
            },
            {
              name: 'Marking 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark enemies by aiming at them and clicking L3',
                'Marks last an additional 3 seconds',
                'Outline marked enemies',
                'Enemies near your target are also marked'
              ]
            }]
          },{
            id: 139,
            name: 'Down But Not Out',
            description: ['Increase how much health you have when down'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Down But Not Out 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'You have 30% more health when in the Down state',
                'Press Square to move 30% faster while down'
              ]
            },
            {
              name: 'Down But Not Out 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'You have 50% more health when in the Down state',
                'Press Square to move 50% faster while down'
              ]
            }]
          },{
            id: 150,
            name: 'Parting Gift',
            description: ['You drop ammo and cash when you\'ve been KO\'d'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Parting Gift 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'You drop ammo and a small treasure for your allies when you\'ve been KO\'d'
              ]
            },
            {
              name: 'Parting Gift 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'You drop ammo and a small treasure for your allies when you\'ve been KO\'d',
                'Find a small treasure in locations where you were KO\'d'
              ]
            },
            {
              name: 'Parting Gift 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'You drop ammo and a small treasure for your allies when you\'ve been KO\'d',
                'Find a small treasure in locations where you were KO\'d',
                'Find an item that reduces the time to your next gear resupply by 15 seconds where you were KO\'d'
              ]
            }]
          },{
            id: 147,
            name: 'Stealth',
            description: ['Make it easier to sneak up on your enemies'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Stealth 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemies don\'t see you during their spawn fly-in',
                'Cannot be marked by sidekicks'
              ]
            },
            {
              name: 'Stealth 2',
              points: 4,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemies don\'t see you during their spawn fly-in',
                'Cannot be marked by sidekicks',
                'Cannot be marked by enemy players'
              ]
            },
            {
              name: 'Stealth 3',
              points: 6,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemies don\'t see you during their spawn fly-in',
                'Cannot be marked by sidekicks',
                'Cannot be marked by enemy players',
                'Cannot be marked by the Staff of Ayar Manco'
              ]
            }]
          },{
            id: 146,
            name: 'Scavenger',
            description: ['Increase the amount of ammo you get from ammo pickups and the distance at which you can pickup ammo'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Scavenger 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Get an additional 25% ammo from ammo pickups',
                'Pickup ammo from 12 meters away'
              ]
            },
            {
              name: 'Scavenger 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Get an additional 30% ammo from ammo pickups',
                'Pickup ammo from 30 meters away'
              ]
            },
            {
              name: 'Scavenger 3',
              points: 4,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Get an additional 50% ammo from ammo pickups',
                'Pickup ammo from any distance'
              ]
            }]
          },{
            id: 151,
            name: 'Brawler',
            description: ['User your melee and charge melee more effectively'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Brawler 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Quicker recovery time after whiffing a charged melee attack'
              ]
            },
            {
              name: 'Brawler 2',
              points: 4,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Quicker recovery time after whiffing a charged melee attack',
                'After downing an enemy with a charged melee attack, your next attack charges faster',
                'Gear resupply is reduced by 10 seconds after a melee down'
              ]
            },
            {
              name: 'Brawler 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Quicker recovery time after whiffing a charged melee attack',
                'After downing an enemy with a charged melee attack, your next attack charges faster',
                'Gear resupply is reduced by 15 seconds after a melee down',
                'Gear resupply is reduced by 3 seconds for every melee hit'
              ]
            }]
          },{
            id: 144,
            name: 'Cash Drip',
            description: ['Increase the amount of passive cash drip'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Cash Drip 1',
              points: 3,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase passive cash drip by 33%'
              ]
            },
            {
              name: 'Cash Drip 2',
              points: 5,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase passive cash drip by 33%',
                'Get $50 every time you respawn'
              ]
            }]
          },{
            id: 148,
            name: 'Explosive Awareness',
            description: ['Make it easier to spot planted explosives'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Explosive Awareness 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemy C4 and mines are outlined for you when you\'re within 5 meters of them'
              ]
            },
            {
              name: 'Explosive Awareness 2',
              points: 4,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemy C4 and mines are outlined for you when you\'re within 10 meters of them'
              ]
            },
            {
              name: 'Explosive Awareness 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemy C4 and mines are outlined for you when you\'re within 10 meters of them',
                'Mines take longer to explode when you trigger them',
                'You can disarm enemy mines with Triangle when you are very close to them'
              ]
            }]
          },{
            id: 152,
            name: 'Combat Revive',
            description: ['Improved ability to revive allies when in combat'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Combat Revive 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase revive range by 100%'
              ]
            },
            {
              name: 'Combat Revive 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase revive range by 100%',
                'Time to next gear resupply reduced by 15 seconds every time you revive an ally'
              ]
            },
            {
              name: 'Combat Revive 3',
              points: 4,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase revive range by 100%',
                'Time to next gear resupply reduced by 15 seconds every time you revive an ally',
                'Blindfire while reviving'
              ]
            }]
          },{
            id: 153,
            name: 'Rope Master',
            description: ['Use your long gun while on a rope'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Rope Master 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Use your long gun while on a rope'
              ]
            },
            {
              name: 'Rope Master 2',
              points: 2,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Use your long gun while on a rope',
                'Use your heavy weapon while on a rope'
              ]
            }]
          },{
            id: 154,
            name: 'Combat Marking',
            description: ['Mark enemies that damage you and while you are down'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Combat Marking 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark nearby enemies in a 9 meter radius for 5 seconds while down by pressing X to call for help'
              ]
            },
            {
              name: 'Combat Marking 2',
              points: 2,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark nearby enemies in a 13 meter radius for 5 seconds while down by pressing X to call for help',
                'Show the enemy\'s nametag that has damaged you for 5 seconds'
              ]
            },
            {
              name: 'Combat Marking 3',
              points: 4,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark nearby enemies in a 18 meter radius for 5 seconds while down by pressing X to call for help',
                'Show the enemy\'s nametag that has damaged you for 10 seconds',
                'Marked enemies become outlined'
              ]
            }]
          },{
            id: 155,
            name: 'Farmer',
            description: ['Get additional treasure for kills/assists against enemy sidekicks'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Farmer 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemy Sidekick kills/assists drop a small treasure and reduce gear resupply by 10 seconds',
                'Deal 50% more melee damage'
              ]
            },
            {
              name: 'Farmer 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemy Sidekick kills/assists drop a large treasure and reduce gear resupply by 15 seconds',
                'Deal 50% more melee and explosive damage',
                'Enemy Sidekick icons appear though walls at 15 meters'
              ]
            },
            {
              name: 'Farmer 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Enemy Sidekick kills/assists drop a large treasure and reduce gear resupply by 20 seconds',
                'Deal 50% more melee and explosive damage',
                'Enemy Sidekick icons appear though walls at 20 meters',
                'Deal 30% more bullet damage to enemy sidekicks'
              ]
            }]
          },{
            id: 156,
            name: 'Endownment',
            description: ['Find items where nearby allies get KO\'d'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Endownment 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Find ammo where neargy allies get KO\'d'
              ]
            },
            {
              name: 'Endownment 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Find ammo where neargy allies get KO\'d',
                'Find a small treasure where your sidekick dies'
              ]
            },
            {
              name: 'Endownment 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Find ammo where neargy allies get KO\'d',
                'Find a small treasure where your sidekick dies',
                'Find a small treasure where nearby allies get KO\'d'
              ]
            }]
          },{
            id: 157,
            name: 'Mark On Damage',
            description: ['Damaging an enemy will mark them'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Mark On Damage 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark enemies with only explosive damage'
              ]
            },
            {
              name: 'Mark On Damage 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark enemies with all damage',
                'Killing an enemy sidekick marks the owner',
                'Marks last an additional 3 seconds'
              ]
            },
            {
              name: 'Mark On Damage 3',
              points: 5,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Mark enemies with all damage',
                'Killing an enemy sidekick marks the owner',
                'Marks last an additional 3 seconds',
                'Marked targets become outlined'
              ]
            }]
          },{
            id: 149,
            name: 'Head Master',
            description: ['Make getting headshots more rewarding'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Head Master 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Time to next gear resupply decreases by 10 seconds for each enemy you down with a headshot'
              ]
            },
            {
              name: 'Head Master 2',
              points: 4,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Time to next gear resupply decreases by 10 seconds for each enemy you down with a headshot',
                'Time to next gear resupply decreases by 3 seconds for any headshot'
              ]
            }]
          },{
            id: 158,
            name: 'Nimble Hands',
            description: ['Your ability to use your hands in certain situations is improved greatly'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Nimble Hands 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Throw gear while rolling'
              ]
            },
            {
              name: 'Nimble Hands 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Throw gear while rolling',
                'Throw gear 25% farther'
              ]
            }]
          },{
            id: 159,
            name: 'Ghost',
            description: ['You are quiet as a ghost'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Ghost 1',
              points: 2,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Your movement and actions make less sound'
              ]
            },
            {
              name: 'Ghost 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Your movement and actions make less sound',
                'Charge melee is silent'
              ]
            }]
          },{
            id: 164,
            name: 'Enhanced Radar',
            description: ['Increase effectiveness of radar'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Enhanced Radar 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase radar range by 20%'
              ]
            },
            {
              name: 'Enhanced Radar 2',
              points: 2,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase radar range by 50%'
              ]
            },
            {
              name: 'Enhanced Radar 3',
              points: 4,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Increase radar range by 50%',
                'Radar shows directional arrows when enemies fire un-silenced weapons'
              ]
            }]
          },
          {
            id: 165,
            name: 'Gunslinger',
            description: ['Reload and swap weapons faster'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Gunslinger 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Swap weapons 50% faster',
                'Reload your weapon 10% faster while rolling'
              ]
            },
            {
              name: 'Gunslinger 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Swap weapons 75% faster',
                'Reload your weapon 25% faster while rolling'
              ]
            },
            {
              name: 'Gunslinger 3',
              points: 4,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Swap weapons 100% faster',
                'Reload your weapon 50% faster while rolling'
              ]
            }]
          },
          {
            id: 166,
            name: 'Hardened',
            description: ['Reduce damage wobble while aiming'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Hardened 1',
              points: 3,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Damage wobble reduced by 20%'
              ]
            },
            {
              name: 'Hardened 2',
              points: 5,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Damage wobble reduced by 35%'
              ]
            }]
          },
          {
            id: 167,
            name: 'Gifting',
            description: ['Give allies instant gear recharges'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Gifting 1',
              points: 3,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Press R3 on ally within 6 meters to give them a gear recharge',
                'Recharges after 105 seconds'
              ]
            },
            {
              name: 'Gifting 2',
              points: 5,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Press R3 on ally within 8 meters to give them a gear recharge',
                'Recharges after 105 seconds',
                'Can hold an additional gift charge'
              ]
            },
            {
              name: 'Gifting 3',
              points: 6,
              level: 3,
              btnClass: 'btn-perk-booster',
              info: [
                'Press R3 on ally within 10 meters to give them a gear recharge',
                'Recharges after 75 seconds',
                'Can hold an additional gift charge'
              ]
            }]
          },
          {
            id: 170,
            name: 'Lock & Load',
            description: ['Ammo pickups put up to 15% of your Long gun and Pistol clip size immediately into the weapons\'s clip'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Lock & Load 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Ammo pickups put up to 15% of your Long gun and Pistol clip size immediately into the weapons\'s clip'
              ]
            },
            {
              name: 'Lock & Load 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Ammo pickups put up to 30% of your Long gun and Pistol clip size immediately into the weapons\'s clip',
                'Picking up n ammo drop will give you 3 seconds towards your Gear'
              ]
            }]
          },
          {
            id: 171,
            name: 'Undisturbed',
            description: ['Hold Charge Melee while climbing'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Undisturbed 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Hold Charge Melee while climbing'
              ]
            },
            {
              name: 'Undisturbed 2',
              points: 3,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Hold Charge Melee while climbing and rolling'
              ]
            }]
          },
          {
            id: 172,
            name: 'Silent Assasin',
            description: ['The enemy is not able to make noise or call for help when you Down or KO them',
            'The enemy Down and KO report on screen is delayed to their teammates'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Silent Assasin 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'The enemy is not able to make noise or call for help when you Down or KO them',
                'The enemy Down and KO report on screen is delayed to their teammates'
              ]
            },
            {
              name: 'Silent Assasin 2',
              points: 2,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'The enemy is not able to make noise or call for help when you Down or KO them',
                'The enemy Down and KO report on screen is delayed to their teammates',
                'Down state icon does not draw off screen for an enemie\'s allies',
                'No X is shown to the enemy teammates when KO\'ed'
              ]
            }]
          },
          {
            id: 173,
            name: 'Weapons Expert',
            description: ['Aim your weapon while vaulting, jumping, or falling'],
            btnClass: 'btn-perk-booster',
            levels: [{
              name: 'Weapons Expert 1',
              points: 1,
              level: 1,
              btnClass: 'btn-perk-booster',
              info: [
                'Aim your weapon while vaulting, jumping, or falling'
              ]
            },
            {
              name: 'Weapons Expert 2',
              points: 2,
              level: 2,
              btnClass: 'btn-perk-booster',
              info: [
                'Aim your weapon while vaulting, jumping, or falling',
                'Cancel out of a roll early by aiming'
              ]
            }]
          }]
        },
      ];

      populateMods(cats[0].perks);
      populateMods(cats[1].perks);
      populateMods(cats[2].perks[0].perks);
      populateMods(cats[2].perks[3].perks);

      return cats;
    };

    loadoutService.getNewLoadout = function() {
      return {
        cats: {
          longGuns: [],
          pistols: [],
          purchasables: [],
          boosters: []
        },
        points: 0
      };
    };

    return loadoutService;
  });
