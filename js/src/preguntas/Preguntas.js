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
	
	this.stringRespuesta = this.respuesta;
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
	case "NUMERICINPUT":
		return new NumericInput(pregunta);
		break;
	default:
		console.error("No coincide con ninguna pregunta el tipo " + pregunta.tipo + "(#" + pregunta.id + ").");
	}
}
