function ChoiceRadio(obj) {
	Pregunta.apply(this,[obj]);
	this.opciones = obj.opciones;
	
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
	
	this.formRta = "<choice-radio></choice-radio>";
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if ($.isNumeric(rta)) return (this.respuesta == rta);
		return (this.respuesta == noBr(rta));
	}
}
ChoiceRadio.prototype = Pregunta;

/**************************************************************************/

function VoF(obj) {
	ChoiceRadio.apply(this,[obj]);
	this.opciones = ["Verdadero","Falso"];
}
VoF.prototype = ChoiceRadio;

