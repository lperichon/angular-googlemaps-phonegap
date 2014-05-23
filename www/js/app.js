'use strict';

var mapApp = angular.module('mapApp', [
	'google-maps'
]);


function MainCtrl($scope){
	$scope.title = "Store";
	$scope.map = {
		center: {
			latitude: 17.44,
			longitude: 78.44
		},
		zoom: 10
	};

}

