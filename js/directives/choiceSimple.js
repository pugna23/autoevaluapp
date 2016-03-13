app.directive('choiceSimple', function() {
	return {
		restrict: 'E',
		scope: {
			opciones: "="
		},
		templateUrl: "js/directives/choiceSimple.html"
	}
});