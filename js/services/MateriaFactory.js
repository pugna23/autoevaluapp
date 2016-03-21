app.factory('materiaservice', [function() {
	var Actual = {
			nombre: "dummy",
			codigo: "099540"
	};
	
	function setActual(m) {
		Actual = m;
		console.log(Actual);
	};
	
	return {
		Actual: Actual,
		set: setActual
	};
	
}]);