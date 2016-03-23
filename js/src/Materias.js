function Materia(obj) {
	this.http = "";
	this.nombre = obj.nombre;
	this.codigo = obj.codigo;
	this.archivo = obj.archivo;
	this.preguntas = [{
		"id": 13,
		"fecha": "5 aug 2010",
		"pregunta": "La superposición de dos ondas senoidales de igual frecuencia y distinta amplitud, PUEDE ser:",
		"tipo": "choicesimple",
		"opciones": ["De distinta frecuencia<br> de las dadas","De amplitud igual a la<br> suma de ambas amplitudes", "Una función no senoidal", "Ninguna de las anteriores"],
		"respuesta": "De amplitud igual a la suma de ambas amplitudes",
		"justifica": "Si están en fase, la amplitud es la suma de las amplitudes."
	},{
		"id": 15,
		"fecha": "5 aug 2010",
		"pregunta": "Para que la transferencia  G(s) corresponda a un sistema estable, entonces:",
		"img": "img/082032-15.png",
		"tipo": "choicesimple",
		"opciones": ["k = 0", "k = 8", "k puede tomar cualquier<br> valor real", "No existe valor de k<br> perteneciente a R"],
		"respuesta": "k = 8",
		"justifica": "Para que sea estable, 2 no debe ser polo, entonces el factor (s-2) del denominador debe anularse con el mismo en el numerador, o sea que 2 debe ser raíz del numerador ->  4-2k+12=0  ->  k=8"
	},{
		"id": 12,
		"fecha": "17 jul 2014",
		"pregunta": "No existe polinomio de grado 2 que pase por los puntos (0, 2), (2, 6), (4, a) y (6, b)",
		"tipo": "choicesimple",
		"opciones": ["Sólo si a=10 y b=14","Sólo si b – 3a + 16 = 0","Sólo si b – 3a + 16 ≠ 0", "Ninguna de las anteriores"],
		"respuesta": "Ninguna de las anteriores",
		"justifica": "Se cumple si a=10 y b=14 ó si b – 3a + 16 ≠ 0."
	},{
		"id": 6,
		"fecha": "22 dec 2015",
		"tipo": "ChoiceSimple",
		"pregunta": "Dada <img src='img/082032-06.png'> y las proposiciones r, s, t, u, siendo: <br> p: Es posible resolverla por Simpson con h=0,3; <br> q: Al resolverla por Trapecios con h=0,1 se obtiene un valor menor al exacto; <br> La única verdadera es:",
		"opciones": ["r: not(p) y q", "s: not(p) y not(q)", "t: p y not(q)", "u: p y q"],
		"respuesta": "s: not(p) y not(q)"
	},{
		"id": 3,
		"fecha": "1 dec 2015",
		"tipo": "input",
		"pregunta": "Al resolver la integral <img src='img/082032-03.png'> por el método de trapecios se obtiene un valor .......... al exacto.",
		"respuesta": "mayor"
	},{
		"id" : 2,
		"fecha": "1 dec 2015",
		"tipo": "input",
		"pregunta": "La transferencia G(s) corresponde a un sistema estable solamente con un valor de la constante real K. Cuál es el valor de K?",
		"label": "K = ",
		"respuesta": 2,
		"img": "img/082032-02.png"
	}	];

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
