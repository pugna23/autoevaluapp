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
		$scope.dibujarForm("#divRespuesta",$scope.question.formRta);
		$scope.cargarEnunciado();
		enableElement("#btnRta");
		disableElement("#btnSiguiente");
		$scope.question.aceptarRespuestas();
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
			$scope.dibujarForm("#divPregunta","<imagen-modal></imagen-modal>");
			$("#enunciado").width("70%");
		};
	}

	$scope.dibujarForm = function(id,forma) {
		var elem = $compile(forma)($scope);
		$(id).append(elem);
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
		$("#enunciado").width("100%");
		$("imagen-modal").remove();
		/*********/
		$scope.pickQuestion();
		$scope.cargarEnunciado();
		$scope.dibujarForm("#divRespuesta",$scope.question.formRta);
	};
		
}]);