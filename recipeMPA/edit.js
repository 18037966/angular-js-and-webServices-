
var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
{
	$scope.id = null;
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
			$scope.recipe = response.data;
			// TO DO
		})

		.catch(function(response)
		{
			// It is OK to do nothing here
			// It is clear if operation succeeds or not
		})

		.finally(function(config)
		{
			// It is OK to do nothing here
			// It is clear if operation succeeds or not
		})
		// end http

	};// end display


	// start edit
	$scope.edit = function()
	{
		var connection = $http(
		{
			method: "put",
		    url: "http://localhost:8080/recipeWS/recipes?id=" + $scope.id,
			data:
			{
				"id": $scope.recipe.id,
				"name": $scope.recipe.name,
				"serves": $scope.recipe.serves,
				"ingredients": $scope.recipe.ingredients,
				"remarks": $scope.recipe.remarks,
				"steps":$scope.recipe.steps
			}
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
			$scope.message = "Message for Edit Product: Error - status: " + response.status;
			alert($scope.message);
			//window.location.reload();

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
