angular
	.module('ngJohnny')
	.filter('patientFilter', function() {

		return function(listpat, datePicked) {

			var filtered = [];

			var start = datePicked.start;
			var end = datePicked.end;

			angular.forEach(listpat, function(patient) {
          console.log(patient.date);
				if(patient.dateTime >= start && patient.dateTime <= end) {

					filtered.push(patient);
				}
			});

			return filtered;
		}
	});
