angular
.module('ngJohnny')
.controller('AddPatientController', function($scope, $firebaseArray){
$scope.addDetails = true;
$scope.newPatient = {};
var ref = new Firebase("https://flickering-torch-1357.firebaseio.com/patients");
$scope.patients=$firebaseArray(ref);
$scope.newPatient.date = new Date().toLocaleString();

$scope.addPatient = function(newPatient){

$scope.patients.$add(newPatient).then(function(){
  console.log('successfully written');
});
$scope.newPatient = {};
}


});
