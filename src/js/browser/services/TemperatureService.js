'use strict';

angular.module('TemperatureMonitor').service('TemperatureService', ['$http',
  '$q', function ($http, $q) {
  	var service = {};

  	service.url = 'http://home-ortiz.rhcloud.com/api/';
  	service.getMessungen = function ()
  	{
  		return $http({ method: 'GET', url: this.url + 'messungen' }).then(function (response) {
  	    	// map data
  	    	var messungen = {};
  	    	messungen.labels = [];
  	    	messungen.series = ['Wohnzimmer', 'Gefuehlt', 'Aussen'];
  	    	messungen.data = [[], [], []];
  			angular.forEach(response.data, function(value, key){
  				var zeit = new Date(value.zeit);
  				messungen.labels.push(zeit.getHours() + ":" + (zeit.getMinutes() < 10 ? "0" : "" ) + zeit.getMinutes());
  				messungen.data[0].push(value.temperatur);
  				messungen.data[1].push(value.temperatur_gefuehlt);
  				if (!value.temperatur_aussen)
  					messungen.data[2].push(0);
  				else
  					messungen.data[2].push(value.temperatur_aussen);
  			});

  	    	return messungen;
  	  	});
	}
	service.getNewestMessung = function ()
	{
		return $http({ method: 'GET', url: this.url + 'messungen/current' }).then(function (response) {
	    	return response.data;
	  	});
	}
	return service;
}]);
