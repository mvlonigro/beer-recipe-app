'use strict';
// Define app
var beerRecipeApp = angular.module('beer-recipe', ['snap']);

// Controller used for this app
beerRecipeApp
	.controller('beerRecipeCtrl', ['$scope', 'snapRemote', function($scope, snapRemote) {
	$scope.init = function() {
		$scope.ingredientList = ["Ingredient0","Ingredient1","Ingredient2","Ingredient3","Ingredient4","Ingredient5","Ingredient6",
		"Ingredient7","Ingredient8","Ingredient9","Ingredient10","Ingredient11","Ingredient12","Ingredient13","Ingredient14","Ingredient15"]

		// Set model arrays
		$scope.ingredients = [];
		$scope.steps = [];
		$scope.notes = [];
	}

	$scope.addIngredient = function() {
		// Push new ingredient onto the ingredients array
		//alert("add ingredient");
		if (typeof($scope.newIngredient) !== 'undefined' && $scope.newIngredient.length > 0) {
			var ingText = '';
			if (typeof($scope.newIngredientQuantity) !== 'undefined' && $scope.newIngredientQuantity.length > 0) {
				ingText += $scope.newIngredientQuantity + '\t';
				$scope.newIngredientQuantity = '';
			}

			ingText += $scope.newIngredient;

			if (typeof($scope.newIngredientNote) !== 'undefined' && $scope.newIngredientNote.length > 0) {
				ingText += '\n' + 'Note: ' + $scope.newIngredientNote;
				$scope.newIngredientNote = '';
			}

			$scope.ingredients.push(ingText);
		}
		$scope.newIngredient = '';
		$scope.closeSnap();
	}

	$scope.addStep = function() {
		// Push new step onto the steps array
		//alert("add step");
		if ($scope.newStep.length > 0) {
			$scope.steps.push($scope.newStep);
		}
		$scope.newStep = '';
	}

	$scope.addNote = function() {
		// Push new note onto the notes array
		//alert("add note");
		if ($scope.newNote.length > 0) {
			$scope.notes.push($scope.newNote);
		}
		$scope.newNote = '';
	}

	$scope.selectIngredient = function( ing ) {
		// Set newIngredient (ingredient input text box) to selected ingredient text
		$scope.newIngredient = ing;

	}

	$scope.openSnap = function() {
		snapRemote.open('left');
	}

	$scope.closeSnap = function() {
		snapRemote.close('left');
	}
}]);