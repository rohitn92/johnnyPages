angular
  .module('ngJohnny',['ui.bootstrap', 'ngRoute','firebase'])
  .config(function($routeProvider){

    $routeProvider
    .when('/',{
      templateUrl: 'partials/home.html',
    })
    .when('/search',{
      templateUrl: 'partials/search.html',
      controller: 'SearchController'
    })
    .when('/addpatient',{
      templateUrl: 'partials/addpatient.html',
      controller: 'AddPatientController'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
