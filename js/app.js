var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("in controller...");
	$scope.newUser = {};
	$scope.info = "";

	$scope.users = [
		{username: "mashrafee", fullName: "Mashrafe", email:"salman@salma.com"},
		{username: "sabbir", fullName: "Sabbir", email:"wari@wari.com"},
		{username: "ikbal", fullName: "Iqbal", email:"seva@test.com"},
		{username: "sakib", fullName: "Sakib", email:"seva@test.com"},
		{username: "nasir", fullName: "Nasir", email:"seva@test.com"},
		{username: "taskin", fullName: "Taskin", email:"seva@test.com"},
		{username: "musha", fullName: "Musha", email:"seva@test.com"},
		{username: "liton", fullName: "Liton", email:"seva@test.com"}
	];

	$scope.saveUser = function(){
		console.log("Saving...");
		$scope.users.push($scope.newUser);
		$scope.info = "New User Added Successfully!";
		$scope.newUser = {};
	};

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	$scope.deleteUser = function(){
		console.log($scope.users.indexOf($scope.clickedUser));
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.info = "User Deleted Successfully!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});
