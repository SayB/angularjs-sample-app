"use strict";

var wtr = angular.module("wtr.services");

wtr.factory("WeatherService", function($http) {

	// This is the Weather Service's API Interface for AngularJS

	var WeatherService = function(data) {
		angular.extend(this, data);
	};

	WeatherService.get = function(name) {
		var url = API_ENDPOINT.replace("{{:city}}", name) + "&callback=JSON_CALLBACK";
		return $http.jsonp(url).then(function(response) {
			return new WeatherService(response);
		});
	};

});