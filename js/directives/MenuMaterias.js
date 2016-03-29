app.directive("menuMaterias",function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/menuMaterias.html",
		controller: function($scope, $http, materiaservice) {
			
			$scope.seleccionada = materiaservice;
			
			$http.get('json/materias.json').then(function(response) {
				var list = response.data;
				$scope.materias = getAllMaterias(list);
			});
			
			$scope.seleccionar = function(materia) {
				console.log(materiaservice);
				$scope.seleccionada.set(materia);
				//$("#divMaterias").hide("slow");
			}
		},
		controllerAs: 'MatController'
	}
});