app.factory('materiaservice', [function() {
	var Actual = {};
	
	Actual.data = {"nombre": "dummy", "codigo": "099540"};
	
	Actual.set = function(nuevo) {
		Actual.data = nuevo;
		console.log(Actual.data);
	};
	
	return Actual;
}]);

/*
 * .controller('appCtrl', ['$scope', 'Fact',
    function($scope, Fact) {
      $scope.model = Fact.data
      Fact.setTrue();
      //$scope.model.setTrue();
    }
  ]).factory("Fact", function() {
    var Fact = {};
    Fact.data = {"value":false};

    Fact.setTrue = function() {
      Fact.data.value = true;
    };

    return Fact;
  });
  
  ************************************************
  <div ng-controller="appCtrl">
    value: {{model.value}}
    <br/>
 */