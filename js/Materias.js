function Materia(obj) {
	this.http = "";
	this.nombre = obj.nombre;
	this.codigo = obj.codigo;
	this.archivo = obj.archivo;
	this.preguntas = [{
		"id": 14,
		"fecha": "5 aug 2010",
		"pregunta": "Sea f(t) con periodo T=2. El desarrollo en Serie exponencial de Fourier tiene sus coeficientes:",
		"tipo": "choicesimple",
		"img": "img/082032-14.png",
		"opciones": ["Todos reales","Ninguno real","Todos imaginarios puros","Ninguna de las anteriores"],
		"respuesta": "Ninguna de las anteriores",
		"justifica": "Por ser suma de una función impar más una constante, la SEF tiene un coeficiente real (el c0) y los demás imaginarios puros."
	},{
		"id": 15,
		"fecha": "5 aug 2010",
		"pregunta": "Para que la transferencia  G(s) corresponda a un sistema estable, entonces:",
		"img": "img/082032-15.png",
		"tipo": "choicesimple",
		"opciones": ["k = 0", "k = 8", "k puede tomar cualquier valor real", "No existe valor de k perteneciente a R"],
		"respuesta": "k = 8",
		"justifica": "Para que sea estable, 2 no debe ser polo, entonces el factor (s-2) del denominador debe anularse con el mismo en el numerador, o sea que 2 debe ser raíz del numerador ->  4-2k+12=0  ->  k=8"
	},{
		"id": 12,
		"fecha": "17 jul 2014",
		"pregunta": "No existe polinomio de grado 2 que pase por los puntos (0, 2), (2, 6), (4, a) y (6, b)",
		"tipo": "choicesimple",
		"opciones": ["Sólo si a=10 y b=14","Sólo si b – 3a + 16 = 0","Sólo si b – 3a + 16 ≠0", "Ninguna de las anteriores"],
		"respuesta": "Ninguna de las anteriores",
		"justifica": "Se cumple si a=10 y b=14 ó si b – 3a + 16 ≠ 0."
	},{
		"id": 9,
		"img": "img/082032-09.png",
		"fecha": "17 jul 2014",
		"pregunta": "Los coeficientes de la Serie Exponencial de Fourier de f(t) son:",
		"tipo": "choicesimple",
		"opciones": ["Todos reales","Todos imaginarios","Uno real y el resto imaginarios","Ninguno de los anteriores"],
		"respuesta": "Todos reales"
	},{
		"id": 5,
		"fecha": "22 dec 2015",
		"tipo": "ChoiceSimple",
		"pregunta": "La serie trigonométrica de Fourier de la f(t) (con cualquier k perteneciente a R) es solo de:",
		"opciones": ["Senos", "Cosenos", "Frecuencias impares"],
		"respuesta": "Cosenos",
		"img": "img/082032-04.png"
	},{
		"id": 3,
		"fecha": "1 dec 2015",
		"tipo": "input",
		"pregunta": "Al resolver la integral <img src='img/082032-03.png'> por el método de trapecios se obtiene un valor .......... al exacto.",
		"respuesta": "mayor"
	},{
		"id" : 4,
		"fecha": "22 dec 2015",
		"tipo": "Input",
		"pregunta": "Dada f(t), para que el valor medio de dicha función sea 4, el valor de k perteneciente a R debe ser:",
		"label": "k = ",
		"respuesta": 4.5,
		"img": "img/082032-04.png"
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
