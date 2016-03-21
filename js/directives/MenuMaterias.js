app.directive("menuMaterias",function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/menuMaterias.html",
		controller: function($scope, $http, materiaservice) {
			
			$scope.materiaSeleccionada = materiaservice;
			
			$http.get('json/muestraMaterias.json').then(function(response) {
				var list = response.data.lista;
				$scope.materias = getAllMaterias(list);
			});
			
			$scope.seleccionar = function(materia) {
				$scope.materiaSeleccionada.set(materia);
				$("#divMaterias").hide("slow");
			}
		},
		controllerAs: 'MatController'
	}
});