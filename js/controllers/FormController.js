app.controller('FormCtrller', ['$scope','materiaservice', function($scope, materiaservice) {
	
	$scope.materiaSeleccionada = materiaservice;
	$scope.answered = null;
	
	$scope.question = new InputSimple({
		"id": 8,
		"fecha": "01 Jan 2001",
		"pregunta": "la pregunta 1?",
		"img": "img/ecdefault.jpg",
		"tipo": "Input",
		"label": "K =",
		"respuesta": "Cache",
		"justifica": "blabla"
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
	
	$scope.contestar = function(rta) {
		$scope.answered = rta;
		console.log("Contestó: " + $scope.answered);
	}
	
	$scope.corregir = function() {
		$("#btnSiguiente").removeClass("disabled");
		$("#btnRta").addClass("disabled");
		$(".choice").addClass("disabled");
		$("#divRespuesta input[type='text']").prop('readonly',true);

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
		$(".choice").removeClass("disabled");
		$("#divRespuesta input[type='text']").prop('readonly',false);
		$("resultado-correcto, resultado-incorrecto").addClass("sr-only");
	};
	
	
}]);