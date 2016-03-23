function enableElement (elem) {
	$(elem).removeClass("disabled");
	$(elem).attr("disabled",false);
}

function disableElement (elem) {
	$(elem).addClass("disabled");
	$(elem).attr("disabled",true);
}


app.controller('FormCtrller', ['$scope','$compile','$document', 'materiaservice', function($scope, $compile, $document, materiaservice) {
	
	$scope.materiaSeleccionada = new Materia({"nombre": "Matemática Superior",
			"codigo": "082032", "archivo": "json/superior.json"});
	
	$document.ready(function() {
		$scope.resetTest();
		$scope.pickQuestion();
		$scope.dibujarForm();
		$scope.cargarEnunciado();
	});
	
	$scope.resetTest = function() {
		$scope.contestadas = 0;
		$scope.correctas = 0;
		$scope.answered = null;
	};

	$scope.pickQuestion = function() {
		$scope.question = createPregunta($scope.materiaSeleccionada.selectPregunta());
	};

	$scope.cargarEnunciado = function() {
		
		if ($scope.question.tieneImagen()) {
			$("imagen-modal").removeClass("sr-only");
			$("#enunciado").width("70%");
		} else {
			$("imagen-modal").addClass("sr-only");
			$("#enunciado").width("100%");
		}
	}

	$scope.dibujarForm = function() {
		var elem = $compile($scope.question.formRta)($scope);
		$("#divRespuesta").append(elem);
	};	
	
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
		$scope.resetQuestion();
	};
	
	$scope.resetQuestion = function () {
		$scope.answered = null;
		enableElement("#btnRta");
		disableElement("#btnSiguiente");
		$scope.question.aceptarRespuestas();
		$("#divRespuesta").empty();
		/*********/
		$scope.pickQuestion();
		$scope.cargarEnunciado();
		$scope.dibujarForm();
	};
		
}]);