angular
	.module('ngJohnny')
	.factory('PatientFactory', function($http) {

		function getPatients() {
			return $http.get('data/data.json');
		}

		return {
			getPatients: getPatients
		}
	});
