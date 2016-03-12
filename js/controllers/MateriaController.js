app.controller('MatController', function($scope, $http) {
	$http.get('json/muestraMaterias.json').then(function(response) {
		var list = response.data.lista;
		$scope.materias = getAllMaterias(list);
	});
});

