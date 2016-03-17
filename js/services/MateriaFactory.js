app.service('materiaService', [function() {
	var actual = {
			nombre: "dummy",
			codigo: "099540"
	};
	
	return {
		getActual: function() {
			return actual;
		},
		
		setActual: function(m) {
			actual = m;
			console.log(actual);
		}
	};
	
}]);