app.controller('FormCtrller', ['$scope','materiaService', function($scope, materiaService) {
	
	$scope.materiaSeleccionada = materiaService.getActual;
	
	$scope.question = new ChoiceSimple({
		"id": 8,
		"fecha": "01 Jan 2001",
		"pregunta": "la pregunta 1?",
		"img": "img/ecdefault.jpg",
		"tipo": "ChoiceSimple",
		"opciones": ["Opción A", "Opcion B", "Opcion C"],
		"respuesta": "Opción A",
		"justifica": "bla"
	});
	
	$scope.cargarEnunciado = function() {
		if (question.tieneImagen()) {
			$("imagen-modal").removeClass("sr-only");
			
		} else {
			$("imagen-modal").addClass("sr-only");
			$("#enunciado").width("100%");
		}
	}
	
	
	
	$scope.corregir = function() {
		$("#btnSiguiente").removeClass("disabled");
		$("#btnRta").addClass("disabled");
		$("resultado-incorrecto").toggleClass("sr-only");
		$(".choice").addClass("disabled");
	};
	
	$scope.continuar = function() {
		$("#btnRta").removeClass("disabled");
		$("#btnSiguiente").addClass("disabled");
		$(".choice").removeClass("disabled");
		$("resultado-correcto, resultado-incorrecto").addClass("sr-only");
	};
	
	
}]);