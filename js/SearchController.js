angular
.module('ngJohnny')
.controller('SearchController', function($scope, PatientFactory){

$scope.patients;

PatientFactory.getPatients().success(function(data){
  $scope.patients = data;
}).error(function(error){
  console.log(error);
});


});
