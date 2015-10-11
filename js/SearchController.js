angular
.module('ngJohnny')
.controller('SearchController', function($scope, $firebaseArray){
  $scope.editDetails = true;
  $scope.editDiseases = false;
//$scope.patients;

$scope.datePicked = {
  start: null,
  end: null
};
 var ref = new Firebase("https://flickering-torch-1357.firebaseio.com/patients");
// var syncObject = $firebaseObject(ref);
//var syncObject = $firebaseObject(ref);
// syncObject.$bindTo($scope, "patients");
 //syncObject.$bindTo($scope, "patients");
$scope.patients=$firebaseArray(ref);

// PatientFactory.getPatients().success(function(data){
//   $scope.patients = data;
// }).error(function(error){
//   console.log(error);
// });




  $scope.removeFrom = function(array, index) {
    array.splice(index, 1);
  };

  $scope.addTo = function(array, template) {
if (array==undefined)
$scope.existingPatient.diseases = [{type:'', comments: ''}];
  else  array.push(template);
  };

$scope.editPatient = function(patient) {
    $scope.editEnabled = true;
    $scope.existingPatient = patient;
  }

$scope.closeEdit = function (existingPatient){
  $scope.patients.$save(existingPatient);
    $scope.editEnabled = false;
    $scope.existingPatient = {};
}

});
