app.directive("menuMaterias",function() {
	return {
		restrict: 'E',
		templateUrl: "js/directives/menuMaterias.html",
		controller: function($scope, $http) {
						
			$http.get('json/materias.json').then(function(response) {
				var list = response.data;
				$scope.materias = getAllMaterias(list);
			});
			
			$scope.seleccionar = function(materia) {
				$("#formulario").scope().changeMateria(materia);
			}
			
		},
		controllerAs: 'MatController'
	}
});