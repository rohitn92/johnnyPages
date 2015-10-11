angular
  .module('ngJohnny',['ui.bootstrap','ngRoute','firebase'])
  .config(function($routeProvider){


    $routeProvider

    .when('/search',{
      templateUrl: 'partials/search.html',
      controller: 'SearchController'
    })
    .when('/addpatient',{
      templateUrl: 'partials/addpatient.html',
      controller: 'AddPatientController'
    })
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    })
    .when('/home',{
      templateUrl: 'partials/home.html',
    })
    .otherwise({
      redirectTo: '/login'
    });
  });
