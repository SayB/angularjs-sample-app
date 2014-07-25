
angular.module("wtr.config", [])
	.constant("API_ENDPOINT", "http://api.openweathermap.org/data/2.5/forecast/city?q={{:city}}&units=metric&mo");