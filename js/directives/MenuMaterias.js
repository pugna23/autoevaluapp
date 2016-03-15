app.directive("menuMaterias",function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/menuMaterias.html",
		controller: function($scope, $http, materiaService) {
			
			$http.get('json/muestraMaterias.json').then(function(response) {
				var list = response.data.lista;
				$scope.materias = getAllMaterias(list);
			});
			
			$scope.seleccionar = function(materia) {
				materiaService.setActual(materia);
				$("#divMaterias").hide("slow");
			}
		},
		controllerAs: 'MatController'
	}
});