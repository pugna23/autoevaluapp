function enableElement (elem) {
	$(elem).removeClass("disabled");
	$(elem).attr("disabled",false);
}

function disableElement (elem) {
	$(elem).addClass("disabled");
	$(elem).attr("disabled",true);
}


app.controller('FormCtrller', ['$scope','$compile','$document', '$http', 'materiaservice', function($scope, $compile, $document, $http, materiaservice) {
	
	$scope.materiaSeleccionada = new Materia({"nombre": "Matemática Superior",
			"codigo": "082032", "archivo": "json/superior.json"});
	
	$document.ready(function() {
		$scope.resetTest();
	});
	
	$scope.resetTest = function() {
		$scope.cantPreguntas = 5;
		$scope.readyTest = false;
		$scope.preguntasContestadas = [];
		$scope.correctas = 0;
		$scope.incorrectas = 0;
		$scope.answered = null;
		$http.get($scope.materiaSeleccionada.archivo).then(function(response) {
			var list = response.data.questions;
			$scope.materiaSeleccionada.preguntas = getAllQuestions(list);
			$scope.generateOptions();
			$scope.pickQuestion();
			$scope.dibujarForm("#divRespuesta",$scope.question.formRta);
			$scope.cargarEnunciado();
			enableElement("#btnRta");
			disableElement("#btnSiguiente");
			$scope.question.aceptarRespuestas();
		});
	};
	
	$scope.startTest = function() {
		$scope.readyTest = true;
	}
	
	$scope.generateOptions = function() {
		var maxOptions = $scope.materiaSeleccionada.preguntas.length;
		maxOptions = Math.floor(maxOptions / 5);
		var optList = [];
		for (var i = 1; i <= maxOptions; i++) {
			optList.push(i * 5);
		};
		$scope.questionOptions = optList;
	};
	
	$scope.pickQuestion = function() {
		var rnd = 0;
		do {
			rnd = Math.floor(Math.random()*($scope.materiaSeleccionada.preguntas.length));
			console.log(rnd);
		} while ($.inArray(rnd,$scope.preguntasContestadas) > -1);
		$scope.preguntasContestadas.push(rnd);
		console.log($scope.preguntasContestadas);
		$scope.question = $scope.materiaSeleccionada.preguntas[rnd];
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
		if ($q.esCorrecto($scope.answered)) {
			$scope.correctas++;
		} else $scope.incorrectas++;
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
		if ($scope.preguntasContestadas.length <= $scope.cantPreguntas) {
			$scope.cargarEnunciado();
			$scope.dibujarForm("#divRespuesta",$scope.question.formRta);
		};
	};
	
	/***********************************/
	
}]);
