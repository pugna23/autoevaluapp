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
		return !(this.img == "" || this.img === null);
	}
	
	this.esCorrecto = function(rta) {
		this.respuesta === rta;
	}
	
	this.stringRespuesta = function() {
		return this.respuesta;
	}

	this.defaultAnswer = null;
}

function getAllQuestions(materia) {
	return jQuery.map(materia, function(q, index) {
		return createPregunta(q);
	});
}

function createPregunta(pregunta) {
	switch (pregunta.tipo.toUpperCase()) {
	case "CHOICERADIO":
		return new ChoiceRadio(pregunta);
		break;
	case "VOF":
		return new VoF(pregunta);
		break;
	case "CHOICECB":
		return new ChoiceCheckbox(pregunta);
		break;
	case "INPUT":
		return new InputSimple(pregunta);
		break;
	case "INPUT M":
		return new InputMultiple(pregunta);
		break;
	case "NUMERICINPUT":
		return new NumericInput(pregunta);
		break;
	default:
		console.error("No coincide con ninguna pregunta el tipo " + pregunta.tipo + "(#" + pregunta.id + ").");
	}
}

var arrayOf = function(elemento, n) {
	var list = [];
	for (var i=1; i <= n; i++) {
		list.push(elemento);
	}
	return list;
}
