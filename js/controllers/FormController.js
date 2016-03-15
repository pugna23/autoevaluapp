app.controller('FormCtrller', function($scope, materiaService) {
	
	$scope.materiaSeleccionada = materiaService.getActual;
	
	$scope.corregir = function() {
		$("#btnSiguiente").removeClass("disabled");
		$("#btnRta").addClass("disabled");
	};
	
	$scope.continuar = function() {
		$("#btnRta").removeClass("disabled");
		$("#btnSiguiente").addClass("disabled");
	};
});