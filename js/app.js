var app = angular.module('evalApp',['ngSanitize']).filter('digits', function() {
	return function(input) {
	   if (input < 10) input = '0' + input;
	      return input;
	    }
	})
	.filter('newlineable', function() {
		return function(data) {
			if (!data) return data;
			   return data.replace(/\n\r?/g, '<br />');
			 };
	});