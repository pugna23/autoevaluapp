app.factory('materiaservice', [function() {
	var actual = {
			nombre: "dummy",
			codigo: "099540"
	};
	
	return {
		getActual: actual,
		
		setActual: function(m) {
			actual = m;
			console.log(actual);
		}
	};
	
}]);