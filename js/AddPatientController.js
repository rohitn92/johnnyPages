angular
.module('ngJohnny')
.controller('AddPatientController', function($scope, $firebaseArray){
$scope.addDetails = true;
$scope.addDiseases = false;
$scope.newPatient = {};
var ref = new Firebase("https://flickering-torch-1357.firebaseio.com/patients");
$scope.patients=$firebaseArray(ref);
$scope.newPatient.date = new Date().toLocaleString();


  $scope.newPatient.diseases = [{type:'', comments: ''}];

  $scope.removeFrom = function(array, index) {
    array.splice(index, 1);
  };

  $scope.addTo = function(array, template) {
    array.push(template);
  };


$scope.addPatient = function(newPatient){

$scope.patients.$add(newPatient).then(function(){
  console.log('successfully written');
});
$scope.newPatient = {};
$scope.newPatient.date = new Date().toLocaleString();
$scope.newPatient.diseases = [{type:'', comments: ''}];
$scope.addDetails = true;
$scope.addDiseases = false;
}


});
