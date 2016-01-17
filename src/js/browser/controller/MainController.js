'use strict';

angular.module('TemperatureMonitor', []).
  controller('MainController', ['$scope', '$timeout', 'TemperatureService', function($scope,
    $timeout, TemperatureService) {
      $scope.pollData = function () {
        TemperatureService.getNewestMessung().then(function (messung)
        {
          $scope.aktuell = messung.temperatur;
          $scope.gefuehlt = messung.temperatur_gefuehlt;
          $scope.aussen = messung.temperatur_aussen;
        }, function (reason) {
          alert('error ' + reason);
        });
      }

      $scope.pollData();
      $timeout(function () {
        pollData();
      }, 10000);



  }]);
