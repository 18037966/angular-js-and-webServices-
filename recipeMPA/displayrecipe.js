
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
			if($scope.recipe == null)
			{
				alert("Recipe doesnot eixits");
				window.location.reload();
				
			}
			//$scope.message = $scope.recipe.steps;
			//$scope.message = null;
			// TO DO
		})

		.catch(function(response)
		{
			// It's OK not to take no action here
			// because it will be clear to the user if the
			// operation has been successful or not
		})

		.finally(function(config)
		{
			// OK to take no action
		})
		// end http

	};// end display




});
//end controller
