function enableElement (elem) {
	$(elem).removeClass("disabled");
	$(elem).attr("disabled",false);
}

function disableElement (elem) {
	$(elem).addClass("disabled");
	$(elem).attr("disabled",true);
}


app.controller('FormCtrller', ['$scope','$compile','materiaservice', function($scope, $compile, materiaservice) {
	
	$scope.materiaSeleccionada = new Materia({"nombre": "Matemática Superior",
			"codigo": "082032", "archivo": "json/superior.json"});
	
	$scope.answered = null;
	$scope.contestadas = 0;
	$scope.correctas = 0;
	
	$scope.question = createPregunta($scope.materiaSeleccionada.selectPregunta());
	
	$scope.cargarEnunciado = function() {
		var q = $scope.question;
		if (q.tieneImagen()) {
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
		
		if ($scope.question.esCorrecto($scope.answered)) {
			$("resultado-correcto").removeClass("sr-only");
		} else {
			$("resultado-incorrecto").removeClass("sr-only");
		}		
	};
	
	$scope.continuar = function() {
		var $q = $scope.question;
		$("resultado-correcto, resultado-incorrecto").addClass("sr-only");
		if ($q.esCorrecto($scope.answered)) $scope.correctas++;
		$scope.contestadas++;
		$scope.resetQuestionElements();
	};
	
	$scope.resetQuestionElements = function () {
		$scope.answered = null;
		enableElement("#btnRta");
		disableElement("#btnSiguiente");
		$scope.question.aceptarRespuestas();
		$("#divRespuesta").empty();
		/*********/
		$scope.question = createPregunta($scope.materiaSeleccionada.selectPregunta());
		$scope.cargarEnunciado();
		$scope.dibujarForm();
	};
	
	$scope.dibujarForm = function() {
		var elem = $compile($scope.question.formRta)($scope);
		$("#divRespuesta").append(elem);
	};
}]);