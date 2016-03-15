function Materia(obj) {
	this.nombre = obj.nombre;
	this.archivo = obj.archivo;
	this.ultFecha = new Date(obj.ultFecha);
	this.preguntas = [
	                  {
	                	"id": "00001",
	              		"fecha": "01 Jan 2001",
	              		"pregunta": "la pregunta 1?",
	              		"tipo": "ChoiceSimple",
	              		"opciones": ["Opcion A", "Opcion B", "Opcion C"],
	              		"respuesta": 1,
	              		"justifica": "bla"
	                  }, {
	              		"id": "00002",
	            		"fecha": "13 Feb 2010",
	            		"img": "img/p2.png",
	            		"tipo": "VoF",
	            		"pregunta": "la pregunta 2?",
	            		"respuesta": true 
	                  }, {
	                	"id": "00003",
	              		"fecha": "14 Apr 2015",
	              		"pregunta": "la pregunta 3?",
	              		"tipo": "Input",
	              		"label": "K",
	              		"respuesta": "8"  
	                  }];
	this.selectPregunta = function() {
		return this.preguntas[Math.floor(Math.random()*(this.preguntas.length))]
	};
}

function getAllMaterias(lista) {
	return jQuery.map(lista, function(m, index) {
		return new Materia(m);
	});
}