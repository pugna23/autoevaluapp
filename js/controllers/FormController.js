app.controller('FormCtrller', ['$scope','materiaservice', function($scope, materiaservice) {
	
	$scope.materiaSeleccionada = materiaservice;
	$scope.answered = '';
	
	$scope.question = new ChoiceSimple({
		"id": 8,
		"fecha": "01 Nov 2014",
		"pregunta": "la pregunta 1?",
		"img": "img/ecdefault.jpg",
		"tipo": "ChoiceSimple",
		"opciones": ["Opcion A", "Opcion B", "Opcion C", "Ninguna de las anteriores"],
		"respuesta": "Opcion A",
		"justifica": "blabla",
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
		$scope.answered = '';
		$("#btnRta").removeClass("disabled");
		$("#btnSiguiente").addClass("disabled");
		$scope.question.aceptarRespuestas();
		$("resultado-correcto, resultado-incorrecto").addClass("sr-only");
	};
	
	$scope.$watch('answered', function(nuevo) {
		console.log(nuevo);
	});
	
	$scope.specialValue = 'yellow';
	$scope.hello = function() {
		alert('hola');
	}
	
}]);