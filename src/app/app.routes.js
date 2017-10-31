angular.module('wbooks').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('home.books');
    });

    // Now set up the states
    $stateProvider
      .state('home',{
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/home/home.html'
          }
        }
      })
      .state('home.books', {
        url: '/',
        views: {
          personalization: {
            templateUrl: '../app/components/home/personalization/personalization.html',
            controller: 'personalizationController',
            controllerAs: 'pers'            
          },
          books: {
            templateUrl: '../app/components/home/books/books.html',
            controller: 'booksController',
            controllerAs: 'books'
          }
        }
      })
      .state('info', {
        url: '/info',
        views: {
          main: {
            templateUrl: '../app/components/info/info.html'
          }
        }
      })
    $locationProvider.html5Mode(true);
  }
]);
