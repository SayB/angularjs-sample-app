'use strict';

angular.module('wtr.controllers', [])
.controller('WeatherController', ["$scope", function($scope, WeatherService) {

	var updates = {};

	function loadData() {
		alert("Halloooo !!");
		// updates = WeatherService.get($scope.city);
		// console.log(updates);
	};

	$scope.loadData = function() {
		alert("Well ... now that's Interesting !");
	};

	var mua = {
		loadData: function() {
			alert('Extended from MUA ! :)');
		}
	};

	angular.extend(this, mua);

}]);