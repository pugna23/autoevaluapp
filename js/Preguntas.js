function Pregunta(param) {
	var obj = $.extend({"img": "", "justifica": ""},param);	
	this.id = obj.id;
	this.fecha = new Date(obj.fecha);
	this.img = obj.img;
	this.pregunta = obj.pregunta;
	this.respuesta = obj.respuesta;
	this.justifica = obj.justifica;
	
	this.tieneImagen = function() {
		return !(this.img === "");
	}
	
	this.esCorrecto = function(contesta) {
		return (contesta === this.respuesta);
	}
}

function VoF(obj) {
	Pregunta.apply(this,[obj]);
	this.opciones = ["Verdadero","Falso"];
}
VoF.prototype = Pregunta;

function ChoiceSimple(obj) {
	Pregunta.apply(this,[obj]);
	this.opciones = obj.opciones;
}
ChoiceSimple.prototype = Pregunta;

function InputSimple(obj) {
	Pregunta.apply(this,[obj]);
	this.label = obj.label;
	
	this.esCorrecto = function(rta) {
		return (this.respuesta.toUpperCase() === rta.toUpperCase());
	}
}
InputSimple.prototype = Pregunta;

function createPregunta(pregunta) {
	switch (pregunta.tipo) {
	case "ChoiceSimple":
		return new ChoiceSimple(pregunta);
		break;
	case "VoF":
		return new VoF(pregunta);
		break;
	case "Input":
		return new InputSimple(pregunta);
		break;
	}
}