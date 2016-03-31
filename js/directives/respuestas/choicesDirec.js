app.directive('choiceRadio', function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/respuestas/choiceRadio.html"
	}
});

app.directive('choiceCheckbox', function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/respuestas/choiceCheckbox.html"
	}
});

app.directive('choiceSelect', function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/respuestas/choiceSelect.html"
	}
});