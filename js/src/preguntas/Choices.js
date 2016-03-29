function Choice(obj) {
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
Choice.prototype = Pregunta;

/**************************************************************************/

function VoF(obj) {
	Choice.apply(this,[obj]);
	this.opciones = ["Verdadero","Falso"];
}
VoF.prototype = Choice;

/**************************************************************************/

function ChoiceSimple(obj) {
	Choice.apply(this,[obj]);
	this.opciones = obj.opciones;
}
ChoiceSimple.prototype = Choice;

