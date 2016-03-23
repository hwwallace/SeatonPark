angular.module('directoryApp', [])

// .directive('dir', function() {
// 	return {
// 		template: "This is my dir directive"
// 	};
// })

.controller('ctrl', function($scope){
	// $scope.directory = function() {
	// 	console.log('This is the controller');
	// };

	$scope.directory = [
		{
		"name": "Bob and Viola Crenshaw",
		"address": "6509 Applegate Lane, Louisville, KY 40228",
		"year": "1986"
	},
	{
		"name": "Don Trosper",
		"address": "5607 Chenoweth Run Road, Louisville, KY 40299",
		"year": "1993"
	},
	{
		"name": "Steve and Vicki Washburn",
		"address": "7308 Chestnut Tree Lane, Louisville, KY 40291",
		"year": "2007"
	},
	{
		"name": "Sandra Crenshaw",
		"address": "2008 Blankenbaker Road, Louisville, KY 40299",
		"year": "1981"
	},
	{
		"name": "Wayne and Margaret Higgins",
		"address": "12012 Old Henry Road, Louisville, KY 40223",
		"year": "1997"
	},
	{
		"name": "Charles and Becky Smith",
		"address": "8106 Kellerman Road, Louisville, KY 40219",
		"year": "2001"
	},
	{
		"name": "Bob Esslinger",
		"address": "1932 Rutherford Avenue, Louisville, KY 40205",
		"year": "2006"
	},
	{
		"name": "Rick and Vanessa Coffey",
		"address": "418 Marshall Walk, Louisville, KY 40214",
		"year": "1996"
	},
	{
		"name": "Thomas and Eva Sweeney",
		"address": "9800-9886 Thixton Lane, Louisville, KY 40291",
		"year": "2013"
	},
	{
		"name": "Eddie and Nancy Barrara",
		"address": "4009 Chenoweth Run Road, Jeffersontown, KY 40299",
		"year": "2008"
	},
	{
		"name": "Richard and Marla Cooper",
		"address": "5200 Southpoint Drive, Louisville, KY 40229",
		"year": "2015"
	}
	] // end directory
})















/*.service('dir', function($http) {
	this.helloConsole = function() {
		console.log('This is the hello console service.');
	}; // end helloConsole

	this.getDir = function(callback) {
		$http.get('mock/directory.json')
		.then(callback);
	}; // end getDir
} // end dir service

.controller('ctrl', function ($scope, dir) { // Add the service as a dependancy as a parameter within the callback function.
	$scope.helloConsole = dir.helloConsole; // Create a new $scope method for the service, and set it to the named service and its method.

	// $scope.todos = []     // The todos array was moved to it's own file, todos.json.

	dir.directory(function(response) {
		console.log(response.data);
		$scope.directory = response.data; // Return the data to the todos scope.
	}); // end dir.directory
}) // end ctrl controller

.directive('directory', function() {
	return {
		templateUrl: "templates.todos.html",
		controller:  "mainCtrl",
		replace: true // This replaces the todo directive element tags found in the HTML.
	};
})*/

;