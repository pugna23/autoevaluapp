app.service('materiaService', [function() {
	var actual = {
			nombre: "dummy"
	};
	return {
		getActual: function() {
			return actual;
		},
		
		setActual: function(m) {
			actual = m;
		}
	};
	
}]);