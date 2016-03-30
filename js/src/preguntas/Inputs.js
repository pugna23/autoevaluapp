function InputSimple(param) {
	var obj = $.extend({"label": "Respuesta", "metric": ""},param);
	Pregunta.apply(this,[obj]);
	
	this.label = obj.label;
	this.metric = obj.metric;
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		if ($.isNumeric(rta)) return (this.respuesta == rta);
		return (this.respuesta.toUpperCase() === $.trim(rta).toUpperCase());
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

/**************************************************************************/
function NumericInput(obj) {
	InputSimple.apply(this,[obj]);
	
	this.esCorrecto = function(rta) {
		if (rta == null) return false;
		var valor = parseFloat(rta);
		var $precision = this.respuesta.precision;
		return (this.respuesta.value.toFixed($precision + 3) == valor.toFixed($precision + 3));
	}
	
	this.stringRespuesta = function() {
		return this.respuesta.value;
	}
}
NumericInput.prototype = InputSimple;