function Materia(obj) {
	this.nombre = obj.nombre;
	this.archivo = obj.archivo;
	this.ultFecha = new Date(obj.ultFecha);
}

function getAllMaterias(lista) {
	return jQuery.map(lista, function(m, index) {
		return new Materia(m);
	});
}

//--------------------------------------------------------------->

var app = angular.module('evalApp',[]);

app.controller('MatController', function($scope, $http) {
	$http.get('json/muestraMaterias.json').then(function(response) {
		var list = response.data.lista;
		$scope.materias = getAllMaterias(list);
	});
});

