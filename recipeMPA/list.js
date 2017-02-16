
var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
	{
		$scope.recipes = null;
		$scope.message = null;
		$scope.filtered = null;

		$scope.filterString = '';
		$scope.sortByName = false;
		$scope.sortOrder = '';
		$scope.setSortOrder = function()
		{
			
			if($scope.sortByName)
			{
				$scope.sortOrder = 'name';
				//console.log(sortOrder);
			}
			else
			{
				$scope.sortOrder = '';
				//console.log(sortOrder);
			}
			//console.log(sortOrder);
   	}
	
        $scope.setFilterString = function()
		{
			console.log("This does work and " + $scope.filterString);
			$scope.filtered = $scope.filterString;
			//$filter($scope.filterString);
			
			//$scope.sortOrder = $scope.filterString;
			
		
		}		


		var connection = $http(
		{
			method: "get",
		    url: "http://localhost:8080/recipeWS/recipes"
			// TO DO
		})

		.then(function(response)
		{
			$scope.recipes = response.data;
		})
			// TO DO
          
		.catch(function(response)
		{
			// It is OK not to take any action here because it would be
			// clear to the user if the list operation is succesfull or not
		})

		.finally(function(config)	// induce a syntax error here and see what happens
		{
			// It is OK not to take any action here because it would be
			// clear to the user if the list operation is succesfull or not
		});


	});
	//end controller
	
	
