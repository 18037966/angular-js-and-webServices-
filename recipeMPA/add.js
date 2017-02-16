
var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http){

	$scope.add = function() {

		var connection = $http(
			{
				method: "post",
		        url: "http://localhost:8080/recipeWS/recipes",
				data:
				{
					"name":$scope.name,
					"serves":$scope.serves,
					"ingredients":$scope.ingredients,
					"steps":$scope.steps,
					"remarks":$scope.remarks
				}
				// TO DO
			})

		.then(function(response)
			{
				$scope.message = "Message for Add Product: Success - status:" + response.status;
				alert($scope.message);
				window.location.reload();
				// TO DO
			})

		.catch(function(response)
			{
				
              $scope.message = "Message for Add Product: Error - status: "+ response.status;
			  alert($scope.message);

				// TO DO
			})

		.finally (function(config)
			{
				// TO DO
			});

	};

});
//end controller
