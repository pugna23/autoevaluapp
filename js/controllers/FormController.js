function enableElement (elem) {
	$(elem).removeClass("disabled");
	$(elem).attr("disabled",false);
}

function disableElement (elem) {
	$(elem).addClass("disabled");
	$(elem).attr("disabled",true);
}


app.controller('FormCtrller', ['$scope','materiaservice', function($scope, materiaservice) {
	
	$scope.materiaSeleccionada = materiaservice;
	$scope.answered = null;
	$scope.contestadas = 0;
	$scope.correctas = 0;
	
	$scope.question = new VoF({
		"id": 2, "fecha": "13 Feb 2010",
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
		enableElement("#btnSiguiente");
		disableElement("#btnRta");
		$scope.question.anularRespuestas();	
		console.log("Respuesta final: " + $scope.answered);
		if ($scope.question.esCorrecto($scope.answered)) {
			$("resultado-correcto").removeClass("sr-only");
		} else {
			$("resultado-incorrecto").removeClass("sr-only");
		}
	};
	
	$scope.continuar = function() {
		enableElement("#btnRta");
		disableElement("#btnSiguiente");
		$scope.question.aceptarRespuestas();
		$("resultado-correcto, resultado-incorrecto").addClass("sr-only");
		if ($scope.question.esCorrecto($scope.answered)) $scope.correctas++;
		$scope.contestadas++;
		$scope.answered = null;
	};
	
}]);