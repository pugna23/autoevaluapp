function Materia(obj) {
	this.nombre = obj.nombre;
	this.archivo = obj.archivo;
	this.ultFecha = new Date(obj.ultFecha);
}

function getAllMaterias(lista) {
	return jQuery.map(lista, function(m, index) {
		return new Materia(m);
	});
}