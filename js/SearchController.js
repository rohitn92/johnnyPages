angular
.module('ngJohnny')
.controller('SearchController', function($scope, $firebaseArray){

//$scope.patients;

 var ref = new Firebase("https://flickering-torch-1357.firebaseio.com/patients");
// var syncObject = $firebaseObject(ref);

// syncObject.$bindTo($scope, "patients");

$scope.patients=$firebaseArray(ref);

// PatientFactory.getPatients().success(function(data){
//   $scope.patients = data;
// }).error(function(error){
//   console.log(error);
// });




});
