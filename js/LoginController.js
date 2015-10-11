angular
.module('ngJohnny')
.controller('LoginController', function($scope,$window,$firebaseArray) {


  var ref = new Firebase("https://flickering-torch-1357.firebaseio.com/users");
  $scope.users=$firebaseArray(ref);

$scope.Login = function() {
  angular.forEach($scope.users, function(user) {
      if (user.id==$scope.yourId) {
        console.log(user.id);
        $window.location.href = '#/home';
      }
  });



}



$scope.SignUp = function () {
  };


});
