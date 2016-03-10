function Pregunta(param) {
	var obj = $.extend({"img": "", "justifica": ""},param);	
	this.id = obj.id;
	this.fecha = new Date(obj.fecha);
	this.img = obj.img;
	this.pregunta = obj.pregunta;
	this.respuesta = obj.respuesta;
	this.justifica = obj.justifica;
}

function VoF(obj) {
	Pregunta.apply(this,[obj]);
	this.opciones = ["Verdadero","Falso"];
}
VoF.prototype = Pregunta;

function MultipleChoice(obj) {
	Pregunta.apply(this,[obj]);
	this.opciones = obj.opciones;
}
MultipleChoice.prototype = Pregunta;

function RtaInput(obj) {
	Pregunta.apply(this,[obj]);
	this.label = obj.label;
}
RtaInput.prototype = Pregunta;


function createPregunta(pregunta) {
	switch (pregunta.tipo) {
	case "MultipleChoice":
		return new MultipleChoice(pregunta);
		break;
	case "VoF":
		return new VoF(pregunta);
		break;
	case "Input":
		return new RtaInput(pregunta);
		break;
	}
}