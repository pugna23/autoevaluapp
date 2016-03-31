function Input(obj) {
	Pregunta.apply(this,[obj]);
	
	this.anularRespuestas = function() {
		$("#divRespuesta input[type='text']").prop('readonly',true);
	};
	
	this.aceptarRespuestas = function() {
		$("#divRespuesta input[type='text']").prop('readonly',false);
	};
	
}
Input.prototype = Pregunta;

function InputSimple(param) {
	var obj = $.extend({"label": "Respuesta:", "metric": ""},param);
	Input.apply(this,[obj]);
	
	this.label = obj.label;
	this.metric = obj.metric;
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if ($.isNumeric(rta)) return (this.respuesta == rta);
		return (this.respuesta.toUpperCase() === $.trim(rta).toUpperCase());
	};
		
	this.formRta = "<input-simple></input-simple>";
}
InputSimple.prototype = Input;

/**************************************************************************/
function NumericInput(obj) {
	InputSimple.apply(this,[obj]);
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if (!$.isNumeric(rta)) return false;
		var valor = parseFloat(rta);
		var $precision = this.respuesta.precision;
		return (this.respuesta.value.toFixed($precision + 3) == valor.toFixed($precision + 3));
	}
	
	this.stringRespuesta = function() {
		return this.respuesta.value;
	}
}
NumericInput.prototype = InputSimple;

/**************************************************************************/
function InputMultiple(param) {
	var obj = $.extend({"label": arrayOf("Respuesta:",param.respuesta.length),"metric": arrayOf("",param.respuesta.length)},param);
	Input.apply(this,[obj]);
	
	this.label = obj.label;
	this.metric = obj.metric;
	
	this.esCorrecto = function(rta) {
		for (var i=0; i < this.respuesta.length; i++) {
			if (rta[i] == null) return false;
			if ($.isNumeric(this.respuesta[i])) {
				if (!$.isNumeric(rta[i]) || (this.respuesta[i] - rta[i]) > 0.0001) return false;
			} else {
				if ($.isNumeric(rta[i])) return false;
				if (this.respuesta[i].toUpperCase() != $.trim(rta[i]).toUpperCase()) return false;
			}
		}
		return true;
	}
	
	this.formRta = "<input-multiple></input-multiple>";
	
	this.defaultAnswer = arrayOf(null,this.respuesta.length);
	
	this.stringRespuesta = function() {
		var str = '';
		for (var i=0; i< this.respuesta.length; i++) {
			if (str != '') str = str + "; ";
			str = str + this.label[i] + " " + this.respuesta[i];
		};
		return str;
	}
	
	this.divLength = function() {
		var divid = Math.max(100 / this.respuesta.length,25);
		return divid;
	}
	
}
