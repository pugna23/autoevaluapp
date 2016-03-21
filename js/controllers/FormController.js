app.controller('FormCtrller', ['$scope','materiaservice', function($scope, materiaservice) {
	
	$scope.materiaSeleccionada = materiaservice;
	$scope.answered = null;
	
	$scope.question = new VoF({
		"id": 2, "fecha": "13 Feb 2010", "img": "img/ejemplo.png",
		"tipo": "VoF", "pregunta": "la pregunta 2?", "respuesta": "Falso"
	});
	
	$scope.cargarEnunciado = function() {
		if (question.tieneImagen()) {
			$("imagen-modal").removeClass("sr-only");
			$("#enunciado").width("70%");
		} else {
			$("imagen-modal").addClass("sr-only");
			$("#enunciado").width("100%");
		}
	}
	
	$scope.corregir = function() {
		$("#btnSiguiente").removeClass("disabled");
		$("#btnRta").addClass("disabled");
		$scope.question.anularRespuestas();
		
		console.log("Respuesta final: " + $scope.answered);
		if ($scope.question.esCorrecto($scope.answered)) {
			$("resultado-correcto").removeClass("sr-only");
		} else {
			$("resultado-incorrecto").removeClass("sr-only");
		}
	};
	
	$scope.continuar = function() {
		$scope.answered = null;
		$("#btnRta").removeClass("disabled");
		$("#btnSiguiente").addClass("disabled");
		$scope.question.aceptarRespuestas();
		$("resultado-correcto, resultado-incorrecto").addClass("sr-only");
	};
	
}]);