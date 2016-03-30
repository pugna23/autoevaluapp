function Choice(obj) {
	Pregunta.apply(this,[obj]);
	this.opciones = obj.opciones;
	
	this.optionLength = function() {
		return (100 / this.opciones.length);
	}
}
Choice.prototype = Pregunta;

function ChoiceRadio(obj) {
	Choice.apply(this,[obj]);
	
	this.anularRespuestas = function() {
		$(".choice").addClass("disabled");
		$("input[type='radio']").attr("disabled",true);
	};
	
	this.aceptarRespuestas = function() {
		$(".choice").removeClass("disabled");
		$("input[type='radio']").attr("disabled",false);
	};
	
	this.formRta = "<choice-radio></choice-radio>";
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if ($.isNumeric(rta)) return (this.respuesta == rta);
		return (this.respuesta == noBr(rta));
	}
}
ChoiceRadio.prototype = Choice;

/**************************************************************************/

function VoF(obj) {
	ChoiceRadio.apply(this,[obj]);
	this.opciones = ["Verdadero","Falso"];
}
VoF.prototype = ChoiceRadio;

/**************************************************************************/

function ChoiceCheckbox(obj) {
	Choice.apply(this,[obj]);
	
	this.defaultAnswer = falsos(this.respuesta.length);
	this.formRta = "<choice-checkbox></choice-checkbox>";
	
	this.esCorrecto = function(rta) {
		var correcto = true;
		for (var i = 0; i < this.respuesta.length; i++) {
			if (rta[i] != this.respuesta[i]) {
				correcto = false;
			};
		};
		return correcto;
	};
	
	this.anularRespuestas = function() {
		$("input[type='checkbox']").attr("disabled",true);
	};
	
	this.aceptarRespuestas = function() {
		$("input[type='checkbox']").attr("disabled",false);
	};
	
	this.stringRespuesta = function() {
		var str = '';
		for (var i=0; i< this.respuesta.length; i++) {
			if (this.respuesta[i]) {
				if (str != '') {
					str = str + "; ";
				};
				str = str + this.opciones[i];
			};
		};
		if (str == '') str = 'Ninguna opción';
		return str;
	};
};
ChoiceCheckbox.prototype = Choice;

var falsos = function(n) {
	var list = [];
	for (var i=1; i <= n; i++) {
		list.push(false);
	}
	return list;
}