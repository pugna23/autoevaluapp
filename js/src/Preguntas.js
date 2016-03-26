function noBr(texto) {
	return texto.replace(/<br>/gi,"");
}

function Pregunta(param) {
	var obj = $.extend({"img": "", "justifica": ""},param);	
	this.id = obj.id;
	this.fecha = new Date(obj.fecha);
	this.img = obj.img;
	this.pregunta = obj.pregunta;
	this.respuesta = obj.respuesta;
	this.justifica = obj.justifica;
	
	this.tieneImagen = function() {
		return !(this.img === "" || this.img === null || this.img === '');
	}
	
	this.esCorrecto = function(rta) {
		this.respuesta === rta;
	}
}

function getAllQuestions(materia) {
	return jQuery.map(materia, function(q, index) {
		return createPregunta(q);
	});
}

function createPregunta(pregunta) {
	switch (pregunta.tipo.toUpperCase()) {
	case "CHOICESIMPLE":
		return new ChoiceSimple(pregunta);
		break;
	case "VOF":
		return new VoF(pregunta);
		break;
	case "INPUT":
		return new InputSimple(pregunta);
		break;
	default:
		return new InputSimple(pregunta);
	}
}

/**************************************************************************/

function MultipleChoice(obj) {
	Pregunta.apply(this,[obj]);
	
	this.anularRespuestas = function() {
		$(".choice").addClass("disabled");
		$("input[type='radio']").attr("disabled",true);
	};
	
	this.aceptarRespuestas = function() {
		$(".choice").removeClass("disabled");
		$("input[type='radio']").attr("disabled",false);
	};
	
	this.optionLength = function() {
		return (100 / this.opciones.length);
	}
	
	this.formRta = "<choice-simple></choice-simple>";
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if ($.isNumeric(rta)) return (this.respuesta == rta);
		return (this.respuesta == noBr(rta));
	}
}
MultipleChoice.prototype = Pregunta;

/**************************************************************************/

function VoF(obj) {
	MultipleChoice.apply(this,[obj]);
	this.opciones = ["Verdadero","Falso"];
}
VoF.prototype = MultipleChoice;

/**************************************************************************/

function ChoiceSimple(obj) {
	MultipleChoice.apply(this,[obj]);
	this.opciones = obj.opciones;
}
ChoiceSimple.prototype = MultipleChoice;

/**************************************************************************/

function InputSimple(param) {
	var obj = $.extend({"label": "Respuesta"},param);
	Pregunta.apply(this,[obj]);
	this.label = obj.label;
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if ($.isNumeric(rta)) return (this.respuesta == rta);
		return (this.respuesta.toUpperCase() === rta.toUpperCase());
	};
	
	this.anularRespuestas = function() {
		$("#divRespuesta input[type='text']").prop('readonly',true);
	};
	
	this.aceptarRespuestas = function() {
		$("#divRespuesta input[type='text']").prop('readonly',false);
	};
	
	this.formRta = "<input-simple></input-simple>";
}
InputSimple.prototype = Pregunta;