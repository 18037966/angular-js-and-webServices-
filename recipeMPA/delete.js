
var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
{
	// $scope.id = null;
	$scope.recipe = null;
	$scope.message = null;

	$scope.display = function()
	{
		var connection = $http(
		{
			method: "get",
		    url: "http://localhost:8080/recipeWS/recipes?id=" + $scope.id
			// TO DO
		})

		.then(function(response)
		{
			console.log("Display is working")
			$scope.recipe = response.data;
			if($scope.recipe == null)
			{
				alert("Recipe doesnot eixits");
				window.location.reload();
				
			}
			
			// TO DO
		})

		.catch(function(response)
		{
			console.log("display is not working");
			$scope.message = "Message for Edit Product: Error - status: " + response.status;
			alert($scope.message);
			// OK to do nothing
		})

		.finally(function(config)
		{
			// OK to do nothing
		})
		// end http

	};// end display


	// start delete
	$scope.delete = function()
	{
		var connection = $http(
		{
			method: "delete",
		    url: "http://localhost:8080/recipeWS/recipes?id=" + $scope.id
			// TO DO
		})

		.then(function(response)
		{
			$scope.message = "Message for Edit Product: Success - status: " + response.status;
			alert($scope.message);
			window.location.reload();
			// TO DO
		})

		.catch(function(response)
		{
			console.log("delete is not working");
			$scope.message = "Message for Edit Product: Error - status: " + response.status;
			alert($scope.message);
			// TO DO
		})

		.finally(function(config)
		{
			// TO DO
		})
		// end http

	};
	// end edit


});
//end controller
