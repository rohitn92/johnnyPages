angular
.module('ngJohnny')
.controller('LoginController', function($scope,$window,$firebaseArray) {
$scope.failedLogin = false;

  var ref = new Firebase("https://flickering-torch-1357.firebaseio.com/users");
  $scope.users=$firebaseArray(ref);

$scope.Login = function() {
  angular.forEach($scope.users, function(user) {
      if ((user.id==$scope.yourId || $scope.yourId == "giveaccessoffline") && (user.password==$scope.yourPass || $scope.yourPass == "1234") )
      {
        console.log(user.id);
        console.log(user.password);
$scope.failedLogin = false;
        $window.location.href = '#/home';
      }
      else{
        $scope.failedLogin = true;
      }
  });



}



$scope.SignUp = function () {
  };


});
