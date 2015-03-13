'use strict';
// Define app
var beerRecipeApp = angular.module('beer-recipe', ['snap']);

// Controller used for this app
beerRecipeApp
	.controller('beerRecipeCtrl', ['$scope', 'snapRemote', function($scope, snapRemote) {
	$scope.init = function() {
		// From ingredient-list.js
		$scope.ingredientList = ingredientList;

		// Set model arrays
		// Ingredient model format:
		// [{
		//		text: "ingredient text",
		//		quantity: "80%",
		//		note: "1st hour"
		// }]
		// Holds the ingredients displayed on the recipe
		$scope.ingredients = [];
		// Holds the steps displayed on the recipe
		$scope.steps = [];
		// Holds the notes displayed on the recipe
		$scope.notes = [];
	}

	// Adds a new ingredient to the recipe
	$scope.addIngredient = function() {
		// Push new ingredient onto the ingredients array
		//alert("add ingredient");
		if (typeof($scope.newIngredient) !== 'undefined' && $scope.newIngredient.length > 0) {
			
			$scope.ingredients.push({
				text: $scope.newIngredient,
				quantity: $scope.newIngredientQuantity,
				note: $scope.newIngredientNote
			});
		}
		$scope.newIngredient = '';
		$scope.newIngredientQuantity = '';
		$scope.newIngredientNote = '';
		$scope.ingredientFieldFocus();
	}

	// Adds a new step to the recipe
	$scope.addStep = function() {
		// Push new step onto the steps array
		if ($scope.newStep.length > 0) {
			$scope.steps.push($scope.newStep);
		}
		$scope.newStep = '';
	}

	// Adds a new note to the recipe
	$scope.addNote = function() {
		// Push new note onto the notes array
		if ($scope.newNote.length > 0) {
			$scope.notes.push($scope.newNote);
		}
		$scope.newNote = '';
	}

	// Populates the text input with the ingredient that was selected from the side bar
	$scope.selectIngredient = function(ing) {
		// Set newIngredient (ingredient input text box) to selected ingredient text
		$scope.newIngredient = ing;
		// Add the focus back to the text input
		$scope.ingredientFieldFocus();
	}

	// Adds focus back to the ingredient input box
	$scope.ingredientFieldFocus = function() {
		document.getElementById('add-ingredient-field').focus();
	}

	// Removes an item from the recipe
	$scope.deleteRecipeItem = function(type, index) {
		if (type === 'ingredient') {
			$scope.ingredients.splice(index, 1);
		} else if (type === 'step') {
			$scope.steps.splice(index, 1);
		} else if (type === 'note') {
			$scope.notes.splice(index, 1);
		}
	}

	// Returns true if the item passed in is undefined or an empty string ''
	//	Needed for the quantity and notes for an ingredient
	$scope.isUndefinedOrEmpty = function(item) {
		if (typeof(item) === 'undefined' || item === '') {
			return true;
		}
		return false;
	}

	// Opens the side bar
	$scope.openSnap = function() {
		snapRemote.open('left');
	}

	// Closes the side bar
	$scope.closeSnap = function() {
		snapRemote.close();
	}
}]);