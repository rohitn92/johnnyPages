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
    .otherwise({
      redirectTo: '/'
    });
  });
