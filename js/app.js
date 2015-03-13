'use strict';
// Define app
var beerRecipeApp = angular.module('beer-recipe', ['snap']);

// Controller used for this app
beerRecipeApp
	.controller('beerRecipeCtrl', ['$scope', 'snapRemote', function($scope, snapRemote) {
	$scope.init = function() {
		// $scope.ingredientList = ["Ingredient0","Ingredient1","Ingredient2","Ingredient3","Ingredient4","Ingredient5","Ingredient6",
		// "Ingredient7","Ingredient8","Ingredient9","Ingredient10","Ingredient11","Ingredient12","Ingredient13","Ingredient14","Ingredient15"]

		// From ingredient-list.js
		$scope.ingredientList = ingredientList;

		// Set model arrays
		// Ingredient model format:
		// [{
		//		text: "ingredient text",
		//		quantity: "80%",
		//		note: "1st hour"
		// }]
		$scope.ingredients = [];
		$scope.steps = [];
		$scope.notes = [];
	}

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

	$scope.addStep = function() {
		// Push new step onto the steps array
		if ($scope.newStep.length > 0) {
			$scope.steps.push($scope.newStep);
		}
		$scope.newStep = '';
	}

	$scope.addNote = function() {
		// Push new note onto the notes array
		if ($scope.newNote.length > 0) {
			$scope.notes.push($scope.newNote);
		}
		$scope.newNote = '';
	}

	$scope.selectIngredient = function(ing) {
		// Set newIngredient (ingredient input text box) to selected ingredient text
		$scope.newIngredient = ing;
		// Add the focus back to the text input
		$scope.ingredientFieldFocus();
	}

	$scope.ingredientFieldFocus = function() {
		document.getElementById('add-ingredient-field').focus();
	}

	$scope.deleteRecipeItem = function(type, index) {
		if (type === 'ingredient') {
			$scope.ingredients.splice(index, 1);
		} else if (type === 'step') {
			$scope.steps.splice(index, 1);
		} else if (type === 'note') {
			$scope.notes.splice(index, 1);
		}
	}

	$scope.isUndefinedOrEmpty = function(item) {
		if (typeof(item) === 'undefined' || item === '') {
			return true;
		}
		return false;
	}

	$scope.openSnap = function() {
		console.log('open');
		snapRemote.open('left');
	}

	$scope.closeSnap = function() {
		console.log('close');
		snapRemote.close();
	}
}]);