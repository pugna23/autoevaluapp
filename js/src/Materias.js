function Materia(obj) {
	this.http = "";
	this.nombre = obj.nombre;
	this.codigo = obj.codigo;
	this.archivo = obj.archivo;
	this.preguntas = [{
		"id": 1,
		"fecha": "01 dec 2015",
		"pregunta": "Calcular el valor de la integral <img src='img/082032-01.png'> por Transformada De Laplace.",
		"tipo": "Input",
		"respuesta": 0.24
	},{
		"id": 3,
		"fecha": "1 dec 2015",
		"tipo": "input",
		"img": "img/082032-03.png",
		"pregunta": "Al resolver la integral por el método de trapecios se obtiene un valor .......... al exacto.",
		"respuesta": "mayor"
	},{
		"id": 24,
		"fecha": "2 oct 2014",
		"pregunta":"Los métodos de Runge-Kutta son de paso múltiple y muy precisos.",
		"tipo": "vof",
		"respuesta": "Falso",
		"justifica": "Son de paso simple."
	},{
		"id": 25,
		"fecha": "2 oct 2014",
		"pregunta": "Las fórmulas implícitas se utilizan para mejorar la precisión de las explicitas.",
		"tipo": "vof",
		"respuesta": "Verdadero",
		"justifica": "No pueden usarse por si solas, sino como etapa correctora de los métodos predictor-corrector."
	}
	];

	/***/
	
	this.cantEjercicios = this.preguntas.length;
	this.ultFecha = jQuery.map(this.preguntas, function(p, index) {
		return new Date(p.fecha)
	}).sort(function(a,b) {return b-a})[0];
	
	
	this.selectPregunta = function() {
		return this.preguntas[Math.floor(Math.random()*(this.cantEjercicios))]
	};
}

function getAllMaterias(lista) {
	return jQuery.map(lista, function(m, index) {
		return new Materia(m);
	});
}
