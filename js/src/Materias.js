function Materia(obj) {
	this.http = "";
	this.nombre = obj.nombre;
	this.codigo = obj.codigo;
	this.archivo = obj.archivo;
	this.preguntas = [];

	/***/
	
	this.ultFecha = jQuery.map(this.preguntas, function(p, index) {
		return new Date(p.fecha)
	}).sort(function(a,b) {return b-a})[0];
	
	
	this.selectPregunta = function() {
		return this.preguntas[Math.floor(Math.random()*(this.preguntas.length))]
	};
}

function getAllMaterias(lista) {
	return jQuery.map(lista, function(m, index) {
		return new Materia(m);
	});
}
